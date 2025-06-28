import NuOption from './option.component.js';

export * from './option.component.js';
export default NuOption;

NuOption.define('nu-option');

declare global {
  interface HTMLElementTagNameMap {
    'nu-option': NuOption;
  }
}
