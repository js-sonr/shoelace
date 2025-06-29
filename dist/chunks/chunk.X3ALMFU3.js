import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/select/select.styles.ts
var select_styles_default = i`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--nu-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--nu-input-font-family);
    font-weight: var(--nu-input-font-weight);
    letter-spacing: var(--nu-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--nu-transition-fast) color,
      var(--nu-transition-fast) border,
      var(--nu-transition-fast) box-shadow,
      var(--nu-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--nu-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--nu-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--nu-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--nu-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--nu-input-background-color);
    border: solid var(--nu-input-border-width) var(--nu-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--nu-input-background-color-disabled);
    border-color: var(--nu-input-border-color-disabled);
    color: var(--nu-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--nu-input-background-color-focus);
    border-color: var(--nu-input-border-color-focus);
    box-shadow: 0 0 0 var(--nu-focus-ring-width) var(--nu-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--nu-input-filled-background-color);
    color: var(--nu-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--nu-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--nu-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--nu-input-filled-background-color-focus);
    outline: var(--nu-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--nu-input-border-radius-small);
    font-size: var(--nu-input-font-size-small);
    min-height: var(--nu-input-height-small);
    padding-block: 0;
    padding-inline: var(--nu-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--nu-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--nu-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--nu-input-border-radius-medium);
    font-size: var(--nu-input-font-size-medium);
    min-height: var(--nu-input-height-medium);
    padding-block: 0;
    padding-inline: var(--nu-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--nu-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--nu-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--nu-input-border-radius-large);
    font-size: var(--nu-input-font-size-large);
    min-height: var(--nu-input-height-large);
    padding-block: 0;
    padding-inline: var(--nu-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--nu-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--nu-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--nu-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--nu-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--nu-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--nu-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--nu-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--nu-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--nu-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--nu-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--nu-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--nu-font-sans);
    font-size: var(--nu-font-size-medium);
    font-weight: var(--nu-font-weight-normal);
    box-shadow: var(--nu-shadow-large);
    background: var(--nu-panel-background-color);
    border: solid var(--nu-panel-border-width) var(--nu-panel-border-color);
    border-radius: var(--nu-border-radius-medium);
    padding-block: var(--nu-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--nu-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--nu-font-size-small);
    font-weight: var(--nu-font-weight-semibold);
    color: var(--nu-color-neutral-500);
    padding-block: var(--nu-spacing-2x-small);
    padding-inline: var(--nu-spacing-x-large);
  }
`;

export {
  select_styles_default
};
