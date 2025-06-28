import NuProgressRing from './progress-ring.component.js';

export * from './progress-ring.component.js';
export default NuProgressRing;

NuProgressRing.define('nu-progress-ring');

declare global {
  interface HTMLElementTagNameMap {
    'nu-progress-ring': NuProgressRing;
  }
}
