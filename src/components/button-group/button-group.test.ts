import '../../../dist/nebula.js';
import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type NuButtonGroup from './button-group.js';

describe('<nu-button-group>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const group = await fixture<NuButtonGroup>(html`
        <nu-button-group>
          <nu-button>Button 1 Label</nu-button>
          <nu-button>Button 2 Label</nu-button>
          <nu-button>Button 3 Label</nu-button>
        </nu-button-group>
      `);
      await expect(group).to.be.accessible();
    });

    it('default label empty', async () => {
      const group = await fixture<NuButtonGroup>(html`
        <nu-button-group>
          <nu-button>Button 1 Label</nu-button>
          <nu-button>Button 2 Label</nu-button>
          <nu-button>Button 3 Label</nu-button>
        </nu-button-group>
      `);
      expect(group.label).to.equal('');
    });
  });

  describe('slotted button data attributes', () => {
    it('slotted buttons have the right data attributes applied based on their order', async () => {
      const group = await fixture<NuButtonGroup>(html`
        <nu-button-group>
          <nu-button>Button 1 Label</nu-button>
          <nu-button>Button 2 Label</nu-button>
          <nu-button>Button 3 Label</nu-button>
        </nu-button-group>
      `);

      const allButtons = group.querySelectorAll('nu-button');
      const hasGroupAttrib = Array.from(allButtons).every(button =>
        button.hasAttribute('data-sl-button-group__button')
      );
      expect(hasGroupAttrib).to.be.true;

      expect(allButtons[0]).to.have.attribute('data-sl-button-group__button--first');
      expect(allButtons[1]).to.have.attribute('data-sl-button-group__button--inner');
      expect(allButtons[2]).to.have.attribute('data-sl-button-group__button--last');
    });
  });

  describe('focus and blur events', () => {
    it('toggles focus data attribute to slotted buttons on focus/blur', async () => {
      const group = await fixture<NuButtonGroup>(html`
        <nu-button-group>
          <nu-button>Button 1 Label</nu-button>
          <nu-button>Button 2 Label</nu-button>
          <nu-button>Button 3 Label</nu-button>
        </nu-button-group>
      `);

      const allButtons = group.querySelectorAll('nu-button');
      allButtons[0].dispatchEvent(new FocusEvent('focusin', { bubbles: true }));

      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.have.attribute('data-sl-button-group__button--focus');

      allButtons[0].dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.not.have.attribute('data-sl-button-group__button--focus');
    });
  });

  describe('mouseover and mouseout events', () => {
    it('toggles hover data attribute to slotted buttons on mouseover/mouseout', async () => {
      const group = await fixture<NuButtonGroup>(html`
        <nu-button-group>
          <nu-button>Button 1 Label</nu-button>
          <nu-button>Button 2 Label</nu-button>
          <nu-button>Button 3 Label</nu-button>
        </nu-button-group>
      `);

      const allButtons = group.querySelectorAll('nu-button');

      allButtons[0].dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.have.attribute('data-sl-button-group__button--hover');

      allButtons[0].dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0]).to.not.have.attribute('data-sl-button-group__button--hover');
    });
  });
});
