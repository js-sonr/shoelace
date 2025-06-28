import NuCarouselItem from './carousel-item.component.js';

export * from './carousel-item.component.js';
export default NuCarouselItem;

NuCarouselItem.define('nu-carousel-item');

declare global {
  interface HTMLElementTagNameMap {
    'nu-carousel-item': NuCarouselItem;
  }
}
