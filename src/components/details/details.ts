import NuDetails from './details.component.js';

export * from './details.component.js';
export default NuDetails;

NuDetails.define('nu-details');

declare global {
  interface HTMLElementTagNameMap {
    'nu-details': NuDetails;
  }
}
