import NuRegisterButton from './register-button.component.js';

export * from './register-button.component.js';
export default NuRegisterButton;

NuRegisterButton.define('nu-register-button');

declare global {
  interface HTMLElementTagNameMap {
    'nu-register-button': NuRegisterButton;
  }
}
