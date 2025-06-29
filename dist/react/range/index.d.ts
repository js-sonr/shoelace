import Component from '../../components/range/range.component.js';
import { type EventName } from '@lit/react';
import type { NuBlurEvent } from '../../events/events.js';
import type { NuChangeEvent } from '../../events/events.js';
import type { NuFocusEvent } from '../../events/events.js';
import type { NuInputEvent } from '../../events/events.js';
import type { NuInvalidEvent } from '../../events/events.js';
export type { NuBlurEvent } from '../../events/events.js';
export type { NuChangeEvent } from '../../events/events.js';
export type { NuFocusEvent } from '../../events/events.js';
export type { NuInputEvent } from '../../events/events.js';
export type { NuInvalidEvent } from '../../events/events.js';
/**
 * @summary Ranges allow the user to select a single value within a given range using a slider.
 * @documentation https://nebulaui.org/components/range
 * @status stable
 * @since 2.0
 *
 * @slot label - The range's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event nu-blur - Emitted when the control loses focus.
 * @event nu-change - Emitted when an alteration to the control's value is committed by the user.
 * @event nu-focus - Emitted when the control gains focus.
 * @event nu-input - Emitted when the control receives input.
 * @event nu-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The range's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` element.
 * @csspart tooltip - The range's tooltip.
 *
 * @cssproperty --thumb-size - The size of the thumb.
 * @cssproperty --tooltip-offset - The vertical distance the tooltip is offset from the track.
 * @cssproperty --track-color-active - The color of the portion of the track that represents the current value.
 * @cssproperty --track-color-inactive - The of the portion of the track that represents the remaining value.
 * @cssproperty --track-height - The height of the track.
 * @cssproperty --track-active-offset - The point of origin of the active track.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuBlur: EventName<NuBlurEvent>;
    onNuChange: EventName<NuChangeEvent>;
    onNuFocus: EventName<NuFocusEvent>;
    onNuInput: EventName<NuInputEvent>;
    onNuInvalid: EventName<NuInvalidEvent>;
}>;
export default reactWrapper;
