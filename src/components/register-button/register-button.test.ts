import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-register-button>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-register-button></nu-register-button> `);

    expect(el).to.exist;
  });
});
