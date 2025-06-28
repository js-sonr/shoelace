import NuTreeItem from './tree-item.component.js';

export * from './tree-item.component.js';
export default NuTreeItem;

NuTreeItem.define('nu-tree-item');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tree-item': NuTreeItem;
  }
}
