import NuSelect from './select.component.js';

export * from './select.component.js';
export default NuSelect;

NuSelect.define('nu-select');

declare global {
  interface HTMLElementTagNameMap {
    'nu-select': NuSelect;
  }
}
