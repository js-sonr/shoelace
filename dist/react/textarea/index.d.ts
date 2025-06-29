import Component from '../../components/textarea/textarea.component.js';
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
 * @summary Textareas collect data from the user and allow multiple lines of text.
 * @documentation https://nebulaui.org/components/textarea
 * @status stable
 * @since 2.0
 *
 * @slot label - The textarea's label. Alternatively, you can use the `label` attribute.
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
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart textarea - The internal `<textarea>` control.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuBlur: EventName<NuBlurEvent>;
    onNuChange: EventName<NuChangeEvent>;
    onNuFocus: EventName<NuFocusEvent>;
    onNuInput: EventName<NuInputEvent>;
    onNuInvalid: EventName<NuInvalidEvent>;
}>;
export default reactWrapper;
