import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-line-chart>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-line-chart></nu-line-chart> `);

    expect(el).to.exist;
  });
});
