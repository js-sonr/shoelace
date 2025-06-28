import NuBreadcrumbItem from './breadcrumb-item.component.js';

export * from './breadcrumb-item.component.js';
export default NuBreadcrumbItem;

NuBreadcrumbItem.define('nu-breadcrumb-item');

declare global {
  interface HTMLElementTagNameMap {
    'nu-breadcrumb-item': NuBreadcrumbItem;
  }
}
