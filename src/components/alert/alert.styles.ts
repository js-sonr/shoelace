import { css } from 'lit';

export default css`
  :host {
    display: contents;
    margin: 0;
  }

  .alert {
    position: relative;
    width: 100%;
    display: flex;
    align-items: stretch;
    background-color: var(--nu-color-neutral-0);
    border: solid var(--nu-panel-border-width) var(--nu-color-neutral-200);
    border-radius: var(--nu-border-radius-medium);
    font-family: var(--nu-font-sans);
    font-size: var(--nu-font-size-sm);
    line-height: 1.6;
    color: var(--nu-color-neutral-900);
    margin: inherit;
    padding: var(--nu-spacing-medium) var(--nu-spacing-large);
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--nu-font-size-lg);
    padding-inline-end: var(--nu-spacing-medium);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
    padding-inline-start: var(--nu-spacing-small);
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--nu-font-size-medium);
    padding-inline-start: var(--nu-spacing-medium);
  }

  /* Variants */
  .alert--default {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-color-neutral-200);
    color: var(--nu-color-neutral-900);
  }

  .alert--danger {
    border-color: var(--nu-color-danger-300);
    color: var(--nu-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--nu-color-danger-600);
  }

  /* Title styles */
  ::slotted([slot='title']) {
    margin-bottom: var(--nu-spacing-3x-small);
    font-size: var(--nu-font-size-sm);
    font-weight: var(--nu-font-weight-semibold);
    line-height: 1;
    letter-spacing: var(--nu-letter-spacing-tight);
  }

  /* Description styles */
  ::slotted(:not([slot='title'])) {
    font-size: var(--nu-font-size-sm);
    line-height: 1.6;
  }

  /* Icon positioning */
  .alert--has-icon {
    padding-inline-start: var(--nu-spacing-large);
  }

  .alert--has-icon .alert__icon {
    position: absolute;
    left: var(--nu-spacing-large);
    top: var(--nu-spacing-large);
  }

  .alert--has-icon .alert__message {
    padding-inline-start: var(--nu-spacing-2x-large);
  }

  /* Remove icon and close button when not needed */
  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }
`;
