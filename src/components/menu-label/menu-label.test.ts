import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';
import type NuMenuLabel from './menu-label.js';

describe('<nu-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<NuMenuLabel>(html` <nu-menu-label>Test</nu-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
