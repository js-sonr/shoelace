import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-pie-chart>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-pie-chart></nu-pie-chart> `);

    expect(el).to.exist;
  });
});
