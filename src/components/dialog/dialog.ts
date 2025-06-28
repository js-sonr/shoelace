import NuDialog from './dialog.component.js';

export * from './dialog.component.js';
export default NuDialog;

NuDialog.define('nu-dialog');

declare global {
  interface HTMLElementTagNameMap {
    'nu-dialog': NuDialog;
  }
}
