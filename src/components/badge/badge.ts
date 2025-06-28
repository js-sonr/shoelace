import NuBadge from './badge.component.js';

export * from './badge.component.js';
export default NuBadge;

NuBadge.define('nu-badge');

declare global {
  interface HTMLElementTagNameMap {
    'nu-badge': NuBadge;
  }
}
