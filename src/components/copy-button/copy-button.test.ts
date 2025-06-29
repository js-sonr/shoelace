import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import type NuCopyButton from './copy-button.js';

// We use aria-live to announce labels via tooltips
const ignoredRules = ['button-name'];

describe('<nu-copy-button>', () => {
  let el: NuCopyButton;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture(html`<nu-copy-button value="something"></nu-copy-button> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
