import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type NuTag from './tag.js';

describe('<nu-tag>', () => {
  it('should render default tag', async () => {
    const el = await fixture<NuTag>(html` <nu-tag>Test</nu-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('size')).to.equal('medium');
    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--medium ');
  });

  it('should set variant by attribute', async () => {
    const el = await fixture<NuTag>(html` <nu-tag variant="danger">Test</nu-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' tag tag--danger tag--medium ');
  });

  it('should set size by attribute', async () => {
    const el = await fixture<NuTag>(html` <nu-tag size="large">Test</nu-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--large ');
  });

  it('should set pill-attribute by attribute', async () => {
    const el = await fixture<NuTag>(html` <nu-tag pill>Test</nu-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--medium tag--pill ');
  });

  it('should set removable by attribute', async () => {
    const el = await fixture<NuTag>(html` <nu-tag removable>Test</nu-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const removeButton = el.shadowRoot!.querySelector('[part~="remove-button"]');

    expect(el.removable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--medium tag--removable ');
    expect(removeButton).not.to.be.null;
  });

  describe('removable', () => {
    it('should emit remove event when remove button clicked', async () => {
      const el = await fixture<NuTag>(html` <nu-tag removable>Test</nu-tag> `);

      const removeButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="remove-button"]')!;
      const spy = sinon.spy();

      el.addEventListener('sl-remove', spy, { once: true });

      removeButton.click();

      expect(spy.called).to.equal(true);
    });
  });
});
