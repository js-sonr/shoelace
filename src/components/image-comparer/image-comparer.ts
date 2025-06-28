import NuImageComparer from './image-comparer.component.js';

export * from './image-comparer.component.js';
export default NuImageComparer;

NuImageComparer.define('nu-image-comparer');

declare global {
  interface HTMLElementTagNameMap {
    'nu-image-comparer': NuImageComparer;
  }
}
