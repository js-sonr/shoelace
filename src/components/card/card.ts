import NuCard from './card.component.js';

export * from './card.component.js';
export default NuCard;

NuCard.define('nu-card');

declare global {
  interface HTMLElementTagNameMap {
    'nu-card': NuCard;
  }
}
