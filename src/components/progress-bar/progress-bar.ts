import NuProgressBar from './progress-bar.component.js';

export * from './progress-bar.component.js';
export default NuProgressBar;

NuProgressBar.define('nu-progress-bar');

declare global {
  interface HTMLElementTagNameMap {
    'nu-progress-bar': NuProgressBar;
  }
}
