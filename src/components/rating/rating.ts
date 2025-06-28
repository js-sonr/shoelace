import NuRating from './rating.component.js';

export * from './rating.component.js';
export default NuRating;

NuRating.define('nu-rating');

declare global {
  interface HTMLElementTagNameMap {
    'nu-rating': NuRating;
  }
}
