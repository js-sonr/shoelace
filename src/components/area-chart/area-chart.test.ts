import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-area-chart>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-area-chart></nu-area-chart> `);

    expect(el).to.exist;
  });
});
