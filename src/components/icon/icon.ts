import NuIcon from './icon.component.js';

export * from './icon.component.js';
export default NuIcon;

NuIcon.define('nu-icon');

declare global {
  interface HTMLElementTagNameMap {
    'nu-icon': NuIcon;
  }
}
