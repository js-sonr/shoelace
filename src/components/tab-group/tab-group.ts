import NuTabGroup from './tab-group.component.js';

export * from './tab-group.component.js';
export default NuTabGroup;

NuTabGroup.define('nu-tab-group');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tab-group': NuTabGroup;
  }
}
