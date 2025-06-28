import NuResizeObserver from './resize-observer.component.js';

export * from './resize-observer.component.js';
export default NuResizeObserver;

NuResizeObserver.define('nu-resize-observer');

declare global {
  interface HTMLElementTagNameMap {
    'nu-resize-observer': NuResizeObserver;
  }
}
