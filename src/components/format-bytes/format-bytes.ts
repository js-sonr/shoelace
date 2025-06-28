import NuFormatBytes from './format-bytes.component.js';

export * from './format-bytes.component.js';
export default NuFormatBytes;

NuFormatBytes.define('nu-format-bytes');

declare global {
  interface HTMLElementTagNameMap {
    'nu-format-bytes': NuFormatBytes;
  }
}
