import NuFormatNumber from './format-number.component.js';

export * from './format-number.component.js';
export default NuFormatNumber;

NuFormatNumber.define('nu-format-number');

declare global {
  interface HTMLElementTagNameMap {
    'nu-format-number': NuFormatNumber;
  }
}
