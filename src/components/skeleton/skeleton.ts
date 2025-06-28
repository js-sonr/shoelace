import NuSkeleton from './skeleton.component.js';

export * from './skeleton.component.js';
export default NuSkeleton;

NuSkeleton.define('nu-skeleton');

declare global {
  interface HTMLElementTagNameMap {
    'nu-skeleton': NuSkeleton;
  }
}
