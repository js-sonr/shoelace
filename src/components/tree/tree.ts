import NuTree from './tree.component.js';

export * from './tree.component.js';
export default NuTree;

NuTree.define('nu-tree');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tree': NuTree;
  }
}
