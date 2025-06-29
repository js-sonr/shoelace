import NuLoginButton from './login-button.component.js';

export * from './login-button.component.js';
export default NuLoginButton;

NuLoginButton.define('nu-login-button');

declare global {
  interface HTMLElementTagNameMap {
    'nu-login-button': NuLoginButton;
  }
}
