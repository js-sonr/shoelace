import NuDropdown from './dropdown.component.js';

export * from './dropdown.component.js';
export default NuDropdown;

NuDropdown.define('nu-dropdown');

declare global {
  interface HTMLElementTagNameMap {
    'nu-dropdown': NuDropdown;
  }
}
