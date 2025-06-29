import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/textarea/textarea.styles.ts
var textarea_styles_default = i`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--nu-input-font-family);
    font-weight: var(--nu-input-font-weight);
    line-height: var(--nu-line-height-normal);
    letter-spacing: var(--nu-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--nu-transition-fast) color,
      var(--nu-transition-fast) border,
      var(--nu-transition-fast) box-shadow,
      var(--nu-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--nu-input-background-color);
    border: solid var(--nu-input-border-width) var(--nu-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--nu-input-background-color-hover);
    border-color: var(--nu-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--nu-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--nu-input-background-color-focus);
    border-color: var(--nu-input-border-color-focus);
    color: var(--nu-input-color-focus);
    box-shadow: 0 0 0 var(--nu-focus-ring-width) var(--nu-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--nu-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--nu-input-background-color-disabled);
    border-color: var(--nu-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--nu-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--nu-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--nu-input-filled-background-color);
    color: var(--nu-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--nu-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--nu-input-filled-background-color-focus);
    outline: var(--nu-focus-ring);
    outline-offset: var(--nu-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--nu-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--nu-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--nu-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--nu-input-border-radius-small);
    font-size: var(--nu-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--nu-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--nu-input-border-radius-medium);
    font-size: var(--nu-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--nu-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--nu-input-border-radius-large);
    font-size: var(--nu-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--nu-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;

export {
  textarea_styles_default
};
