import NuSplitPanel from './split-panel.component.js';

export * from './split-panel.component.js';
export default NuSplitPanel;

NuSplitPanel.define('nu-split-panel');

declare global {
  interface HTMLElementTagNameMap {
    'nu-split-panel': NuSplitPanel;
  }
}
