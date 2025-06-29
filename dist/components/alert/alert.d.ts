import NuAlert from './alert.component.js';
export * from './alert.component.js';
export default NuAlert;
declare global {
    interface HTMLElementTagNameMap {
        'nu-alert': NuAlert;
    }
}
