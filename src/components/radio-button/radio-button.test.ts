import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type NuRadioButton from './radio-button.js';
import type NuRadioGroup from '../radio-group/radio-group.js';

describe('<nu-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<NuRadioGroup>(html`
      <nu-radio-group value="1">
        <nu-radio-button id="radio-1" value="1"></nu-radio-button>
        <nu-radio-button id="radio-2" value="2" disabled></nu-radio-button>
      </nu-radio-group>
    `);
    const radio1 = radioGroup.querySelector<NuRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<NuRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  it('should receive positional data attributes from <nu-button-group>', async () => {
    const radioGroup = await fixture<NuRadioGroup>(html`
      <nu-radio-group value="1">
        <nu-radio-button id="radio-1" value="1"></nu-radio-button>
        <nu-radio-button id="radio-2" value="2"></nu-radio-button>
        <nu-radio-button id="radio-3" value="3"></nu-radio-button>
      </nu-radio-group>
    `);
    const radio1 = radioGroup.querySelector<NuRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<NuRadioButton>('#radio-2')!;
    const radio3 = radioGroup.querySelector<NuRadioButton>('#radio-3')!;

    await Promise.all([radioGroup.updateComplete, radio1.updateComplete, radio2.updateComplete, radio3.updateComplete]);

    expect(radio1).to.have.attribute('data-sl-button-group__button');
    expect(radio1).to.have.attribute('data-sl-button-group__button--first');
    expect(radio2).to.have.attribute('data-sl-button-group__button');
    expect(radio2).to.have.attribute('data-sl-button-group__button--inner');
    expect(radio3).to.have.attribute('data-sl-button-group__button');
    expect(radio3).to.have.attribute('data-sl-button-group__button--last');
  });
});
