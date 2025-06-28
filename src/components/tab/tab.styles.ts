import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--nu-font-sans);
    font-size: var(--nu-font-size-small);
    font-weight: var(--nu-font-weight-semibold);
    border-radius: var(--nu-border-radius-medium);
    color: var(--nu-color-neutral-600);
    padding: var(--nu-spacing-medium) var(--nu-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--nu-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--nu-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--nu-focus-ring);
    outline-offset: calc(-1 * var(--nu-focus-ring-width) - var(--nu-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--nu-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--nu-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--nu-font-size-small);
    margin-inline-start: var(--nu-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--nu-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
