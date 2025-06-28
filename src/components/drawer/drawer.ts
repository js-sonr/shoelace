import NuDrawer from './drawer.component.js';

export * from './drawer.component.js';
export default NuDrawer;

NuDrawer.define('nu-drawer');

declare global {
  interface HTMLElementTagNameMap {
    'nu-drawer': NuDrawer;
  }
}
