import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .login-button {
    display: inline-block;
  }

  .login-button nu-button::part(base) {
    color: var(--nu-login-button-color, var(--nu-color-primary-600));
  }
`;
