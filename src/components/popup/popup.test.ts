import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-popup></nu-popup> `);

    expect(el).to.exist;
  });
});
