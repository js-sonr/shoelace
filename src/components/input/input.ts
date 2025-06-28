import NuInput from './input.component.js';

export * from './input.component.js';
export default NuInput;

NuInput.define('nu-input');

declare global {
  interface HTMLElementTagNameMap {
    'nu-input': NuInput;
  }
}
