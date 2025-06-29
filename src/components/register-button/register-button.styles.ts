import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .register-button {
    display: inline-block;
  }

  .register-button nu-button::part(base) {
    color: var(--nu-register-button-color, var(--nu-color-success-600));
  }
`;
