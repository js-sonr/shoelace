import NuInclude from './include.component.js';

export * from './include.component.js';
export default NuInclude;

NuInclude.define('nu-include');

declare global {
  interface HTMLElementTagNameMap {
    'nu-include': NuInclude;
  }
}
