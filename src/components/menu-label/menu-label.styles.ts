import { css } from 'lit';
export default css`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--nu-font-sans);
    font-size: var(--nu-font-size-small);
    font-weight: var(--nu-font-weight-semibold);
    line-height: var(--nu-line-height-normal);
    letter-spacing: var(--nu-letter-spacing-normal);
    color: var(--nu-color-neutral-500);
    padding: var(--nu-spacing-2x-small) var(--nu-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;
