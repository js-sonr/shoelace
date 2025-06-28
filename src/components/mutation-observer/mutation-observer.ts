import NuMutationObserver from './mutation-observer.component.js';

export * from './mutation-observer.component.js';
export default NuMutationObserver;

NuMutationObserver.define('nu-mutation-observer');

declare global {
  interface HTMLElementTagNameMap {
    'nu-mutation-observer': NuMutationObserver;
  }
}
