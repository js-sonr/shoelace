import NuDivider from './divider.component.js';

export * from './divider.component.js';
export default NuDivider;

NuDivider.define('nu-divider');

declare global {
  interface HTMLElementTagNameMap {
    'nu-divider': NuDivider;
  }
}
