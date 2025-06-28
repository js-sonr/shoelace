import NuSpinner from './spinner.component.js';

export * from './spinner.component.js';
export default NuSpinner;

NuSpinner.define('nu-spinner');

declare global {
  interface HTMLElementTagNameMap {
    'nu-spinner': NuSpinner;
  }
}
