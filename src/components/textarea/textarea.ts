import NuTextarea from './textarea.component.js';

export * from './textarea.component.js';
export default NuTextarea;

NuTextarea.define('nu-textarea');

declare global {
  interface HTMLElementTagNameMap {
    'nu-textarea': NuTextarea;
  }
}
