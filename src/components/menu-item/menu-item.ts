import NuMenuItem from './menu-item.component.js';

export * from './menu-item.component.js';
export default NuMenuItem;

NuMenuItem.define('nu-menu-item');

declare global {
  interface HTMLElementTagNameMap {
    'nu-menu-item': NuMenuItem;
  }
}
