import NuRange from './range.component.js';

export * from './range.component.js';
export default NuRange;

NuRange.define('nu-range');

declare global {
  interface HTMLElementTagNameMap {
    'nu-range': NuRange;
  }
}
