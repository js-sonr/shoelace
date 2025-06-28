import { css } from 'lit';

export default css`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--nu-tooltip-arrow-size);
    --arrow-color: var(--nu-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--nu-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--nu-tooltip-border-radius);
    background-color: var(--nu-tooltip-background-color);
    font-family: var(--nu-tooltip-font-family);
    font-size: var(--nu-tooltip-font-size);
    font-weight: var(--nu-tooltip-font-weight);
    line-height: var(--nu-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--nu-tooltip-color);
    padding: var(--nu-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;
