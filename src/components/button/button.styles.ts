import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--nu-input-border-width);
    font-family: var(--nu-input-font-family);
    font-weight: var(--nu-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--nu-transition-x-fast) background-color,
      var(--nu-transition-x-fast) color,
      var(--nu-transition-x-fast) border,
      var(--nu-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--nu-focus-ring);
    outline-offset: var(--nu-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-input-border-color);
    color: var(--nu-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--nu-color-primary-50);
    border-color: var(--nu-color-primary-300);
    color: var(--nu-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--nu-color-primary-100);
    border-color: var(--nu-color-primary-400);
    color: var(--nu-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--nu-color-primary-600);
    border-color: var(--nu-color-primary-600);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--nu-color-primary-500);
    border-color: var(--nu-color-primary-500);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--nu-color-primary-600);
    border-color: var(--nu-color-primary-600);
    color: var(--nu-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--nu-color-success-600);
    border-color: var(--nu-color-success-600);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--nu-color-success-500);
    border-color: var(--nu-color-success-500);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--nu-color-success-600);
    border-color: var(--nu-color-success-600);
    color: var(--nu-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--nu-color-neutral-600);
    border-color: var(--nu-color-neutral-600);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--nu-color-neutral-500);
    border-color: var(--nu-color-neutral-500);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--nu-color-neutral-600);
    border-color: var(--nu-color-neutral-600);
    color: var(--nu-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--nu-color-warning-600);
    border-color: var(--nu-color-warning-600);
    color: var(--nu-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--nu-color-warning-500);
    border-color: var(--nu-color-warning-500);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--nu-color-warning-600);
    border-color: var(--nu-color-warning-600);
    color: var(--nu-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--nu-color-danger-600);
    border-color: var(--nu-color-danger-600);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--nu-color-danger-500);
    border-color: var(--nu-color-danger-500);
    color: var(--nu-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--nu-color-danger-600);
    border-color: var(--nu-color-danger-600);
    color: var(--nu-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--nu-input-border-color);
    color: var(--nu-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--nu-color-primary-600);
    background-color: var(--nu-color-primary-600);
    color: var(--nu-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--nu-color-primary-700);
    background-color: var(--nu-color-primary-700);
    color: var(--nu-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--nu-color-primary-600);
    color: var(--nu-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--nu-color-primary-600);
    color: var(--nu-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--nu-color-primary-700);
    background-color: var(--nu-color-primary-700);
    color: var(--nu-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--nu-color-success-600);
    color: var(--nu-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--nu-color-success-600);
    color: var(--nu-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--nu-color-success-700);
    background-color: var(--nu-color-success-700);
    color: var(--nu-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--nu-color-neutral-600);
    color: var(--nu-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--nu-color-neutral-600);
    color: var(--nu-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--nu-color-neutral-700);
    background-color: var(--nu-color-neutral-700);
    color: var(--nu-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--nu-color-warning-600);
    color: var(--nu-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--nu-color-warning-600);
    color: var(--nu-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--nu-color-warning-700);
    background-color: var(--nu-color-warning-700);
    color: var(--nu-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--nu-color-danger-600);
    color: var(--nu-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--nu-color-danger-600);
    color: var(--nu-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--nu-color-danger-700);
    background-color: var(--nu-color-danger-700);
    color: var(--nu-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--nu-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--nu-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--nu-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--nu-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--nu-input-height-small);
    font-size: var(--nu-button-font-size-small);
    line-height: calc(var(--nu-input-height-small) - var(--nu-input-border-width) * 2);
    border-radius: var(--nu-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--nu-input-height-medium);
    font-size: var(--nu-button-font-size-medium);
    line-height: calc(var(--nu-input-height-medium) - var(--nu-input-border-width) * 2);
    border-radius: var(--nu-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--nu-input-height-large);
    font-size: var(--nu-button-font-size-large);
    line-height: calc(var(--nu-input-height-large) - var(--nu-input-border-width) * 2);
    border-radius: var(--nu-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--nu-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--nu-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--nu-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--nu-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--nu-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--nu-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--nu-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--nu-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--nu-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--nu-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--nu-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--nu-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--nu-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--nu-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--nu-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--nu-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--nu-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--nu-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--nu-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--nu-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--nu-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--nu-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;
