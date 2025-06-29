import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-candle-chart>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-candle-chart></nu-candle-chart> `);

    expect(el).to.exist;
  });
});
