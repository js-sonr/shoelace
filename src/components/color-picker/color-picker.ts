import NuColorPicker from './color-picker.component.js';

export * from './color-picker.component.js';
export default NuColorPicker;

NuColorPicker.define('nu-color-picker');

declare global {
  interface HTMLElementTagNameMap {
    'nu-color-picker': NuColorPicker;
  }
}
