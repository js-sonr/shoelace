import Component from '../../components/radio/radio.component.js';
import { type EventName } from '@lit/react';
import type { NuBlurEvent } from '../../events/events.js';
import type { NuFocusEvent } from '../../events/events.js';
export type { NuBlurEvent } from '../../events/events.js';
export type { NuFocusEvent } from '../../events/events.js';
/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://nebulaui.org/components/radio
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot - The radio's label.
 *
 * @event nu-blur - Emitted when the control loses focus.
 * @event nu-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<nu-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuBlur: EventName<NuBlurEvent>;
    onNuFocus: EventName<NuFocusEvent>;
}>;
export default reactWrapper;
