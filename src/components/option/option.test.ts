import '../../../dist/nebula.js';
import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type NuOption from './option.js';

describe('<nu-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<NuOption>(html`
      <nu-select label="Select one">
        <nu-option value="1">Option 1</nu-option>
        <nu-option value="2">Option 2</nu-option>
        <nu-option value="3">Option 3</nu-option>
        <nu-option value="4" disabled>Disabled</nu-option>
      </nu-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<NuOption>(html` <nu-option>Test</nu-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<NuOption>(html` <nu-option>Test</nu-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<NuOption>(html` <nu-option>Text</nu-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should convert non-string values to string', async () => {
    const el = await fixture<NuOption>(html` <nu-option>Text</nu-option> `);

    // @ts-expect-error - intentional
    el.value = 10;
    await el.updateComplete;

    expect(el.value).to.equal('10');
  });

  it('should escape HTML when calling getTextLabel()', async () => {
    const el = await fixture<NuOption>(html` <nu-option><strong>Option</strong></nu-option> `);
    expect(el.getTextLabel()).to.equal('Option');
  });
});
