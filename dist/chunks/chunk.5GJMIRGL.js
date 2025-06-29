import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/switch/switch.styles.ts
var switch_styles_default = i`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--nu-toggle-size-small);
    --thumb-size: calc(var(--nu-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--nu-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--nu-toggle-size-medium);
    --thumb-size: calc(var(--nu-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--nu-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--nu-toggle-size-large);
    --thumb-size: calc(var(--nu-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--nu-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--nu-input-font-family);
    font-size: inherit;
    font-weight: var(--nu-input-font-weight);
    color: var(--nu-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--nu-color-neutral-400);
    border: solid var(--nu-input-border-width) var(--nu-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--nu-transition-fast) border-color,
      var(--nu-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--nu-color-neutral-0);
    border-radius: 50%;
    border: solid var(--nu-input-border-width) var(--nu-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--nu-transition-fast) translate ease,
      var(--nu-transition-fast) background-color,
      var(--nu-transition-fast) border-color,
      var(--nu-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--nu-color-neutral-400);
    border-color: var(--nu-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--nu-color-neutral-400);
    border-color: var(--nu-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-color-primary-600);
    outline: var(--nu-focus-ring);
    outline-offset: var(--nu-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--nu-color-primary-600);
    border-color: var(--nu-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--nu-color-primary-600);
    border-color: var(--nu-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--nu-color-primary-600);
    border-color: var(--nu-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--nu-color-neutral-0);
    border-color: var(--nu-color-primary-600);
    outline: var(--nu-focus-ring);
    outline-offset: var(--nu-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--nu-input-required-content);
    color: var(--nu-input-required-content-color);
    margin-inline-start: var(--nu-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;

export {
  switch_styles_default
};
