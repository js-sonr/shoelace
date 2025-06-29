import Component from '../../components/switch/switch.component.js';
import { type EventName } from '@lit/react';
import type { NuBlurEvent } from '../../events/events.js';
import type { NuChangeEvent } from '../../events/events.js';
import type { NuInputEvent } from '../../events/events.js';
import type { NuFocusEvent } from '../../events/events.js';
import type { NuInvalidEvent } from '../../events/events.js';
export type { NuBlurEvent } from '../../events/events.js';
export type { NuChangeEvent } from '../../events/events.js';
export type { NuInputEvent } from '../../events/events.js';
export type { NuFocusEvent } from '../../events/events.js';
export type { NuInvalidEvent } from '../../events/events.js';
/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://nebulaui.org/components/switch
 * @status stable
 * @since 2.0
 *
 * @slot - The switch's label.
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
 *
 * @event nu-blur - Emitted when the control loses focus.
 * @event nu-change - Emitted when the control's checked state changes.
 * @event nu-input - Emitted when the control receives input.
 * @event nu-focus - Emitted when the control gains focus.
 * @event nu-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the switch's thumb.
 * @csspart thumb - The switch's thumb.
 * @csspart label - The switch's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --width - The width of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-size - The size of the thumb.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuBlur: EventName<NuBlurEvent>;
    onNuChange: EventName<NuChangeEvent>;
    onNuInput: EventName<NuInputEvent>;
    onNuFocus: EventName<NuFocusEvent>;
    onNuInvalid: EventName<NuInvalidEvent>;
}>;
export default reactWrapper;
