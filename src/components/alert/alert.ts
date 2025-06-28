import NuAlert from './alert.component.js';

export * from './alert.component.js';
export default NuAlert;

NuAlert.define('nu-alert');

declare global {
  interface HTMLElementTagNameMap {
    'nu-alert': NuAlert;
  }
}
