import NuMenu from './menu.component.js';

export * from './menu.component.js';
export default NuMenu;

NuMenu.define('nu-menu');

declare global {
  interface HTMLElementTagNameMap {
    'nu-menu': NuMenu;
  }
}
