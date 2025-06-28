import NuMenuLabel from './menu-label.component.js';

export * from './menu-label.component.js';
export default NuMenuLabel;

NuMenuLabel.define('nu-menu-label');

declare global {
  interface HTMLElementTagNameMap {
    'nu-menu-label': NuMenuLabel;
  }
}
