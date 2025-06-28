import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<nu-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <nu-carousel-item></nu-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture(html` <nu-carousel-item></nu-carousel-item> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});
