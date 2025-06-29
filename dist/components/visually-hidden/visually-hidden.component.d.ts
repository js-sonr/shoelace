import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://nebulaui.org/components/visually-hidden
 * @status stable
 * @since 2.0
 *
 * @slot - The content to be visually hidden.
 */
export default class NuVisuallyHidden extends NebulaElement {
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
