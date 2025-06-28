import NuCopyButton from './copy-button.component.js';

export * from './copy-button.component.js';
export default NuCopyButton;

NuCopyButton.define('nu-copy-button');

declare global {
  interface HTMLElementTagNameMap {
    'nu-copy-button': NuCopyButton;
  }
}
