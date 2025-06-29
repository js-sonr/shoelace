import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/tag/tag.styles.ts
var tag_styles_default = i`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--nu-color-primary-50);
    border-color: var(--nu-color-primary-200);
    color: var(--nu-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--nu-color-primary-600);
  }

  .tag--success {
    background-color: var(--nu-color-success-50);
    border-color: var(--nu-color-success-200);
    color: var(--nu-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--nu-color-success-600);
  }

  .tag--neutral {
    background-color: var(--nu-color-neutral-50);
    border-color: var(--nu-color-neutral-200);
    color: var(--nu-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--nu-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--nu-color-warning-50);
    border-color: var(--nu-color-warning-200);
    color: var(--nu-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--nu-color-warning-600);
  }

  .tag--danger {
    background-color: var(--nu-color-danger-50);
    border-color: var(--nu-color-danger-200);
    color: var(--nu-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--nu-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--nu-button-font-size-small);
    height: calc(var(--nu-input-height-small) * 0.8);
    line-height: calc(var(--nu-input-height-small) - var(--nu-input-border-width) * 2);
    border-radius: var(--nu-input-border-radius-small);
    padding: 0 var(--nu-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--nu-button-font-size-medium);
    height: calc(var(--nu-input-height-medium) * 0.8);
    line-height: calc(var(--nu-input-height-medium) - var(--nu-input-border-width) * 2);
    border-radius: var(--nu-input-border-radius-medium);
    padding: 0 var(--nu-spacing-small);
  }

  .tag--large {
    font-size: var(--nu-button-font-size-large);
    height: calc(var(--nu-input-height-large) * 0.8);
    line-height: calc(var(--nu-input-height-large) - var(--nu-input-border-width) * 2);
    border-radius: var(--nu-input-border-radius-large);
    padding: 0 var(--nu-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--nu-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--nu-border-radius-pill);
  }
`;

export {
  tag_styles_default
};
