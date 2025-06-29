import NuButton from './button.component.js';
export * from './button.component.js';
export default NuButton;
declare global {
    interface HTMLElementTagNameMap {
        'nu-button': NuButton;
    }
}
