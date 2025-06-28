import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
    background: var(--nu-panel-background-color);
    border: solid var(--nu-panel-border-width) var(--nu-panel-border-color);
    border-radius: var(--nu-border-radius-medium);
    padding: var(--nu-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--nu-spacing-x-small);
  }
`;
