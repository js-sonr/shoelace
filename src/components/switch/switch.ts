import NuSwitch from './switch.component.js';

export * from './switch.component.js';
export default NuSwitch;

NuSwitch.define('nu-switch');

declare global {
  interface HTMLElementTagNameMap {
    'nu-switch': NuSwitch;
  }
}
