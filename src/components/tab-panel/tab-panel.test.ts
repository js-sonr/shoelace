import '../../../dist/nebula.js';
import { aTimeout, expect, fixture, html } from '@open-wc/testing';
import type NuTabPanel from './tab-panel.js';

describe('<nu-tab-panel>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<NuTabPanel>(html` <nu-tab-panel>Test</nu-tab-panel> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<NuTabPanel>(html` <nu-tab-panel>Test</nu-tab-panel> `);

    expect(el.id).to.equal('sl-tab-panel-2');
    expect(el.name).to.equal('');
    expect(el.active).to.equal(false);
    expect(el.getAttribute('role')).to.equal('tabpanel');
    expect(el.getAttribute('aria-hidden')).to.equal('true');
  });

  it('properties should reflect', async () => {
    const el = await fixture<NuTabPanel>(html` <nu-tab-panel>Test</nu-tab-panel> `);

    el.name = 'test';
    el.active = true;
    await aTimeout(100);
    expect(el.getAttribute('name')).to.equal('test');
    expect(el.hasAttribute('active')).to.equal(true);
  });

  it('changing active should always update aria-hidden role', async () => {
    const el = await fixture<NuTabPanel>(html` <nu-tab-panel>Test</nu-tab-panel> `);

    el.active = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-hidden')).to.equal('false');
  });

  it('passed id should be used', async () => {
    const el = await fixture<NuTabPanel>(html` <nu-tab-panel id="test-id">Test</nu-tab-panel> `);

    expect(el.id).to.equal('test-id');
  });
});
