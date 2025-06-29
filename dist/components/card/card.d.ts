import NuCard from './card.component.js';
export * from './card.component.js';
export default NuCard;
declare global {
    interface HTMLElementTagNameMap {
        'nu-card': NuCard;
    }
}
