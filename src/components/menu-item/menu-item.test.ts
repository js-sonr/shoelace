import '../../../dist/nebula.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { NuSelectEvent } from '../../events/events.js';
import type NuMenuItem from './menu-item.js';

describe('<nu-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item>Item 1</nu-menu-item>
        <nu-menu-item>Item 2</nu-menu-item>
        <nu-menu-item>Item 3</nu-menu-item>
        <nu-divider></nu-divider>
        <nu-menu-item type="checkbox" checked>Checked</nu-menu-item>
        <nu-menu-item type="checkbox">Unchecked</nu-menu-item>
      </nu-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should pass accessibility tests when using a submenu', async () => {
    const el = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item>
          Submenu
          <nu-menu slot="submenu">
            <nu-menu-item>Submenu Item 1</nu-menu-item>
            <nu-menu-item>Submenu Item 2</nu-menu-item>
          </nu-menu>
        </nu-menu-item>
      </nu-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<NuMenuItem>(html` <nu-menu-item>Test</nu-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.loading).to.equal(false);
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<NuMenuItem>(html` <nu-menu-item disabled>Test</nu-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  describe('when loading', () => {
    it('should have a spinner present', async () => {
      const el = await fixture<NuMenuItem>(html` <nu-menu-item loading>Menu Item Label</nu-menu-item> `);
      expect(el.shadowRoot!.querySelector('nu-spinner')).to.exist;
    });
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<NuMenuItem>(html` <nu-menu-item>Test</nu-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<NuMenuItem>(html` <nu-menu-item>Text</nu-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item inert>Item 1</nu-menu-item>
        <nu-menu-item>Item 2</nu-menu-item>
        <nu-menu-item>Item 3</nu-menu-item>
      </nu-menu>
    `);
    const item1 = menu.querySelector('nu-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });

  it('should not render a sl-popup if the slot="submenu" attribute is missing, but the slot should exist in the component and be hidden.', async () => {
    const menu = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item>
          Item 1
          <nu-menu>
            <nu-menu-item> Nested Item 1 </nu-menu-item>
          </nu-menu>
        </nu-menu-item>
      </nu-menu>
    `);

    const menuItem: HTMLElement = menu.querySelector('nu-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('nu-popup')).to.be.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.true;
  });

  it('should render an sl-popup if the slot="submenu" attribute is present', async () => {
    const menu = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item id="test">
          Item 1
          <nu-menu slot="submenu">
            <nu-menu-item> Nested Item 1 </nu-menu-item>
          </nu-menu>
        </nu-menu-item>
      </nu-menu>
    `);

    const menuItem = menu.querySelector('nu-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('nu-popup')).to.be.not.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.false;
  });

  it('should focus on first menuitem of submenu if ArrowRight is pressed on parent menuitem', async () => {
    const menu = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item id="item-1">
          Submenu
          <nu-menu slot="submenu">
            <nu-menu-item value="submenu-item-1"> Nested Item 1 </nu-menu-item>
          </nu-menu>
        </nu-menu-item>
      </nu-menu>
    `);

    const selectHandler = sinon.spy((event: NuSelectEvent) => {
      const item = event.detail.item;
      expect(item.value).to.equal('submenu-item-1');
    });
    menu.addEventListener('sl-select', selectHandler);

    const submenu = menu.querySelector('nu-menu-item');
    submenu!.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });
    await menu.updateComplete;
    await sendKeys({ press: 'Enter' });
    await menu.updateComplete;
    // Once for each menu element.
    expect(selectHandler).to.have.been.calledTwice;
  });

  it('should focus on outer menu if ArrowRight is pressed on nested menuitem', async () => {
    const menu = await fixture<NuMenuItem>(html`
      <nu-menu>
        <nu-menu-item value="outer-item-1">
          Submenu
          <nu-menu slot="submenu">
            <nu-menu-item value="inner-item-1"> Nested Item 1 </nu-menu-item>
          </nu-menu>
        </nu-menu-item>
      </nu-menu>
    `);

    const focusHandler = sinon.spy((event: FocusEvent) => {
      expect(event.target.value).to.equal('outer-item-1');
      expect(event.relatedTarget.value).to.equal('inner-item-1');
    });

    const outerItem = menu.querySelector('nu-menu-item');
    outerItem!.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });

    outerItem.addEventListener('focus', focusHandler);
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowLeft' });
    await menu.updateComplete;
    expect(focusHandler).to.have.been.calledOnce;
  });
});
