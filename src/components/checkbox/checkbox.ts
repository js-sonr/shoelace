import NuCheckbox from './checkbox.component.js';

export * from './checkbox.component.js';
export default NuCheckbox;

NuCheckbox.define('nu-checkbox');

declare global {
  interface HTMLElementTagNameMap {
    'nu-checkbox': NuCheckbox;
  }
}
