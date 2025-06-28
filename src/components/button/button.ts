import NuButton from './button.component.js';

export * from './button.component.js';
export default NuButton;

NuButton.define('nu-button');

declare global {
  interface HTMLElementTagNameMap {
    'nu-button': NuButton;
  }
}
