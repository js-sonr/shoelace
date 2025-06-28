import NuTab from './tab.component.js';

export * from './tab.component.js';
export default NuTab;

NuTab.define('nu-tab');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tab': NuTab;
  }
}
