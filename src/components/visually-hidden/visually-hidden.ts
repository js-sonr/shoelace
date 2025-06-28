import NuVisuallyHidden from './visually-hidden.component.js';

export * from './visually-hidden.component.js';
export default NuVisuallyHidden;

NuVisuallyHidden.define('nu-visually-hidden');

declare global {
  interface HTMLElementTagNameMap {
    'nu-visually-hidden': NuVisuallyHidden;
  }
}
