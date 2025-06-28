import NuTabPanel from './tab-panel.component.js';

export * from './tab-panel.component.js';
export default NuTabPanel;

NuTabPanel.define('nu-tab-panel');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tab-panel': NuTabPanel;
  }
}
