import Component from '../../components/tag/tag.component.js';
import { type EventName } from '@lit/react';
import type { NuRemoveEvent } from '../../events/events.js';
export type { NuRemoveEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuRemove: EventName<NuRemoveEvent>;
}>;
export default reactWrapper;
