import NebulaElement from '../../internal/nebula-element.js';
import NuIconButton from '../icon-button/icon-button.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://nebulaui.org/components/tag
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon-button
 *
 * @slot - The tag's content.
 *
 * @event nu-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 * @csspart remove-button - The tag's remove button, an `<nu-icon-button>`.
 * @csspart remove-button__base - The remove button's exported `base` part.
 */
export default class NuTag extends NebulaElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'nu-icon-button': typeof NuIconButton;
    };
    private readonly localize;
    /** The tag's theme variant. */
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    /** The tag's size. */
    size: 'small' | 'medium' | 'large';
    /** Draws a pill-style tag with rounded edges. */
    pill: boolean;
    /** Makes the tag removable and shows a remove button. */
    removable: boolean;
    private handleRemoveClick;
    render(): import("lit-html").TemplateResult<1>;
}
