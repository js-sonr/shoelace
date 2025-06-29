import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import type NuRadio from './radio.js';
import type NuRadioGroup from '../radio-group/radio-group.js';

describe('<nu-radio>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<NuRadioGroup>(html`
      <nu-radio-group value="1">
        <nu-radio id="radio-1" value="1"></nu-radio>
        <nu-radio id="radio-2" value="2" disabled></nu-radio>
      </nu-radio-group>
    `);
    const radio1 = radioGroup.querySelector<NuRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<NuRadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
