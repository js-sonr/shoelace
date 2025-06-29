import NuListView from './list-view.component.js';

export * from './list-view.component.js';
export default NuListView;

NuListView.define('nu-list-view');

declare global {
  interface HTMLElementTagNameMap {
    'nu-list-view': NuListView;
  }
}
