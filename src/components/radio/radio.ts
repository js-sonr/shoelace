import NuRadio from './radio.component.js';

export * from './radio.component.js';
export default NuRadio;

NuRadio.define('nu-radio');

declare global {
  interface HTMLElementTagNameMap {
    'nu-radio': NuRadio;
  }
}
