import '../../../dist/shoelace.js';
import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { resetMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type NuAlert from './alert.js';
import type NuIconButton from '../icon-button/icon-button.js';

const getAlertContainer = (alert: NuAlert): HTMLElement => {
  return alert.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const expectAlertToBeVisible = (alert: NuAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectAlertToBeInvisible = (alert: NuAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display, 'alert should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (alert: NuAlert, action: () => void | Promise<void>) => {
  const hidePromise = oneEvent(alert, 'sl-hide');
  const afterHidePromise = oneEvent(alert, 'sl-after-hide');
  let afterHideHappened = false;
  oneEvent(alert, 'sl-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectAlertToBeInvisible(alert);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (alert: NuAlert, action: () => void | Promise<void>) => {
  const showPromise = oneEvent(alert, 'sl-show');
  const afterShowPromise = oneEvent(alert, 'sl-after-show');
  let afterShowHappened = false;
  oneEvent(alert, 'sl-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectAlertToBeVisible(alert);
};

const getCloseButton = (alert: NuAlert): NuIconButton | null | undefined =>
  alert.shadowRoot?.querySelector<NuIconButton>('[part="close-button"]');

describe('<nu-alert>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const alert = await fixture<NuAlert>(html`<nu-alert open>I am an alert</nu-alert>`);

    expectAlertToBeVisible(alert);
  });

  it('is accessible', async () => {
    const alert = await fixture<NuAlert>(html`<nu-alert open>I am an alert</nu-alert>`);

    await expect(alert).to.be.accessible();
  });

  describe('alert visibility', () => {
    it('should be visible with the open attribute', async () => {
      const alert = await fixture<NuAlert>(html`<nu-alert open>I am an alert</nu-alert>`);

      expectAlertToBeVisible(alert);
    });

    it('should not be visible without the open attribute', async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert>I am an alert</nu-alert>`);

      expectAlertToBeInvisible(alert);
    });

    it('should emit sl-show and sl-after-show when calling show()', async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert>I am an alert</nu-alert>`);

      expectAlertToBeInvisible(alert);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.show());
    });

    it('should emit sl-hide and sl-after-hide when calling hide()', async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert open>I am an alert</nu-alert>`);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => alert.hide());
    });

    it('should emit sl-show and sl-after-show when setting open = true', async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert>I am an alert</nu-alert> `);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => {
        alert.open = true;
      });
    });

    it('should emit sl-hide and sl-after-hide when setting open = false', async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert open>I am an alert</nu-alert> `);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        alert.open = false;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the alert has the closable attribute', () => async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert open closable>I am an alert</nu-alert> `);
      const closeButton = getCloseButton(alert);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the alert', () => async () => {
      const alert = await fixture<NuAlert>(html` <nu-alert open closable>I am an alert</nu-alert> `);
      const closeButton = getCloseButton(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clickOnElement(closeButton!);
      });
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.nu-toast-stack');

    const closeRemainingAlerts = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as NuAlert).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingAlerts();
    });

    it('can be rendered as a toast', async () => {
      const alert = await fixture<NuAlert>(html`<nu-alert>I am an alert</nu-alert>`);

      expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(toastStack?.firstChild).to.be.equal(alert);
    });

    it('resolves only after being closed', async () => {
      const alert = await fixture<NuAlert>(html`<nu-alert closable>I am an alert</nu-alert>`);

      const afterShowEvent = oneEvent(alert, 'sl-after-show');
      let toastPromiseResolved = false;
      alert.toast().then(() => (toastPromiseResolved = true));

      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(alert, 'sl-after-hide');
      const closeButton = getCloseButton(alert);
      clickOnElement(closeButton!);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (alert: NuAlert): Promise<void> => {
      const openPromise = oneEvent(alert, 'sl-after-show');
      alert.toast();
      await openPromise;
    };

    const closeToast = async (alert: NuAlert): Promise<void> => {
      const closePromise = oneEvent(alert, 'sl-after-hide');
      const closeButton = getCloseButton(alert);
      await clickOnElement(closeButton!);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last alert is done', async () => {
      const container = await fixture<HTMLElement>(
        html`<div>
          <nu-alert data-testid="alert1" closable>alert 1</nu-alert>
          <nu-alert data-testid="alert2" closable>alert 2</nu-alert>
        </div>`
      );

      const alert1 = queryByTestId<NuAlert>(container, 'alert1');
      const alert2 = queryByTestId<NuAlert>(container, 'alert2');

      await openToast(alert1!);

      expectToastStack();

      await openToast(alert2!);

      expectToastStack();

      await closeToast(alert1!);

      expectToastStack();

      await closeToast(alert2!);

      expectNoToastStack();
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<NuAlert>(html` <nu-alert open duration="3000">I am an alert</nu-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<NuAlert>(html` <nu-alert open duration="3000">I am an alert</nu-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(1000);

      await moveMouseOnElement(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<NuAlert>(html` <nu-alert duration="3000">I am an alert</nu-alert>`);

      expectAlertToBeInvisible(alert);

      clock.tick(1000);

      const afterShowPromise = oneEvent(alert, 'sl-after-show');
      alert.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });
  });

  describe('alert variants', () => {
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const alert = await fixture<NuAlert>(html`<nu-alert variant="${variant}" open>I am an alert</nu-alert>`);

        const alertContainer = getAlertContainer(alert);
        expect(alertContainer).to.have.class(`alert--${variant}`);
      });
    });
  });
});
