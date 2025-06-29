import NuListItem from './list-item.component.js';
export * from './list-item.component.js';
export default NuListItem;
declare global {
    interface HTMLElementTagNameMap {
        'nu-list-item': NuListItem;
    }
}
