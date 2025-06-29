import NuMenu from './menu.component.js';
export * from './menu.component.js';
export default NuMenu;
declare global {
    interface HTMLElementTagNameMap {
        'nu-menu': NuMenu;
    }
}
