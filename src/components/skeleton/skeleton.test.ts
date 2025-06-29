import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import type NuSkeleton from './skeleton.js';

describe('<nu-skeleton>', () => {
  it('should render default skeleton', async () => {
    const el = await fixture<NuSkeleton>(html` <nu-skeleton></nu-skeleton> `);

    await expect(el).to.be.accessible();

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const indicator = el.shadowRoot!.querySelector<HTMLElement>('[part~="indicator"]')!;

    expect(base.getAttribute('class')).to.equal(' skeleton ');
    expect(indicator.getAttribute('class')).to.equal('skeleton__indicator');
  });

  it('should set pulse effect by attribute', async () => {
    const el = await fixture<NuSkeleton>(html` <nu-skeleton effect="pulse"></nu-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' skeleton skeleton--pulse ');
  });

  it('should set sheen effect by attribute', async () => {
    const el = await fixture<NuSkeleton>(html` <nu-skeleton effect="sheen"></nu-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' skeleton skeleton--sheen ');
  });
});
