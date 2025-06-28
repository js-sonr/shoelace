import NuQrCode from './qr-code.component.js';

export * from './qr-code.component.js';
export default NuQrCode;

NuQrCode.define('nu-qr-code');

declare global {
  interface HTMLElementTagNameMap {
    'nu-qr-code': NuQrCode;
  }
}
