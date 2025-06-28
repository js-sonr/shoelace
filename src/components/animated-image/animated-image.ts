import NuAnimatedImage from './animated-image.component.js';

export * from './animated-image.component.js';
export default NuAnimatedImage;

NuAnimatedImage.define('nu-animated-image');

declare global {
  interface HTMLElementTagNameMap {
    'nu-animated-image': NuAnimatedImage;
  }
}
