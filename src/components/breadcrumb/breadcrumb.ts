import NuBreadcrumb from './breadcrumb.component.js';

export * from './breadcrumb.component.js';
export default NuBreadcrumb;

NuBreadcrumb.define('nu-breadcrumb');

declare global {
  interface HTMLElementTagNameMap {
    'nu-breadcrumb': NuBreadcrumb;
  }
}
