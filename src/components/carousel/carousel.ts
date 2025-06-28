import NuCarousel from './carousel.component.js';

export * from './carousel.component.js';
export default NuCarousel;

NuCarousel.define('nu-carousel');

declare global {
  interface HTMLElementTagNameMap {
    'nu-carousel': NuCarousel;
  }
}
