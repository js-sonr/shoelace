import NuPopup from './popup.component.js';

export * from './popup.component.js';
export default NuPopup;

NuPopup.define('nu-popup');

declare global {
  interface HTMLElementTagNameMap {
    'nu-popup': NuPopup;
  }
}
