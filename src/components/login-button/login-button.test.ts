import '../../../dist/nebula.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-login-button>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-login-button></nu-login-button> `);

    expect(el).to.exist;
  });
});
