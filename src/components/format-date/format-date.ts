import NuFormatDate from './format-date.component.js';

export * from './format-date.component.js';
export default NuFormatDate;

NuFormatDate.define('nu-format-date');

declare global {
  interface HTMLElementTagNameMap {
    'nu-format-date': NuFormatDate;
  }
}
