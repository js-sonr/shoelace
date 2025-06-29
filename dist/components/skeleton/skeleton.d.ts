import NuSkeleton from './skeleton.component.js';
export * from './skeleton.component.js';
export default NuSkeleton;
declare global {
    interface HTMLElementTagNameMap {
        'nu-skeleton': NuSkeleton;
    }
}
