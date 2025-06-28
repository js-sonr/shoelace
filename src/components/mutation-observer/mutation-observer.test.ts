import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-mutation-observer></nu-mutation-observer> `);

    expect(el).to.exist;
  });
});
