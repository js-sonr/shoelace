import NuListItem from './list-item.component.js';

export * from './list-item.component.js';
export default NuListItem;

NuListItem.define('nu-list-item');

declare global {
  interface HTMLElementTagNameMap {
    'nu-list-item': NuListItem;
  }
}
