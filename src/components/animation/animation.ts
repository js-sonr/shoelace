import NuAnimation from './animation.component.js';

export * from './animation.component.js';
export default NuAnimation;

NuAnimation.define('nu-animation');

declare global {
  interface HTMLElementTagNameMap {
    'nu-animation': NuAnimation;
  }
}
