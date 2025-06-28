import NuIconButton from './icon-button.component.js';

export * from './icon-button.component.js';
export default NuIconButton;

NuIconButton.define('nu-icon-button');

declare global {
  interface HTMLElementTagNameMap {
    'nu-icon-button': NuIconButton;
  }
}
