import '../../../dist/nebula.js';
import { aTimeout, expect, fixture, oneEvent } from '@open-wc/testing';
import { html } from 'lit';
import type NuAnimation from './animation.js';

describe('<nu-animation>', () => {
  const boxToAnimate = html`<div style="width: 10px; height: 10px;" data-testid="animated-box"></div>`;

  it('renders', async () => {
    const animationContainer = await fixture<NuAnimation>(html`<nu-animation>${boxToAnimate}</nu-animation>`);

    expect(animationContainer).to.exist;
  });

  it('is accessible', async () => {
    const animationContainer = await fixture<NuAnimation>(html`<nu-animation>${boxToAnimate}</nu-animation>`);

    await expect(animationContainer).to.be.accessible();
  });

  describe('animation start', () => {
    it('does not start the animation by default', async () => {
      const animationContainer = await fixture<NuAnimation>(
        html`<nu-animation name="bounce" easing="ease-in-out" duration="10">${boxToAnimate}</nu-animation>`
      );
      await aTimeout(0);

      expect(animationContainer.play).to.be.false;
    });

    it('emits the correct event on animation start', async () => {
      const animationContainer = await fixture<NuAnimation>(
        html`<nu-animation name="bounce" easing="ease-in-out" duration="10">${boxToAnimate}</nu-animation>`
      );

      const startPromise = oneEvent(animationContainer, 'sl-start');
      animationContainer.play = true;
      return startPromise;
    });
  });

  it('emits the correct event on animation end', async () => {
    const animationContainer = await fixture<NuAnimation>(
      html`<nu-animation name="bounce" easing="ease-in-out" duration="1">${boxToAnimate}</nu-animation>`
    );

    const endPromise = oneEvent(animationContainer, 'sl-finish');
    animationContainer.iterations = 1;
    animationContainer.play = true;
    return endPromise;
  });

  it('can be finished by hand', async () => {
    const animationContainer = await fixture<NuAnimation>(
      html`<nu-animation name="bounce" easing="ease-in-out" duration="1000">${boxToAnimate}</nu-animation>`
    );

    const endPromise = oneEvent(animationContainer, 'sl-finish');
    animationContainer.iterations = 1;
    animationContainer.play = true;

    await aTimeout(0);

    animationContainer.finish();
    return endPromise;
  });

  it('can be cancelled', async () => {
    const animationContainer = await fixture<NuAnimation>(
      html`<nu-animation name="bounce" easing="ease-in-out" duration="1">${boxToAnimate}</nu-animation>`
    );
    let animationHasFinished = false;
    oneEvent(animationContainer, 'sl-finish').then(() => (animationHasFinished = true));
    const cancelPromise = oneEvent(animationContainer, 'sl-cancel');
    animationContainer.play = true;

    await aTimeout(0);
    animationContainer.cancel();

    await cancelPromise;
    expect(animationHasFinished).to.be.false;
  });
});
