import Component from '../../components/input/input.component.js';
import { type EventName } from '@lit/react';
import type { NuBlurEvent } from '../../events/events.js';
import type { NuChangeEvent } from '../../events/events.js';
import type { NuClearEvent } from '../../events/events.js';
import type { NuFocusEvent } from '../../events/events.js';
import type { NuInputEvent } from '../../events/events.js';
import type { NuInvalidEvent } from '../../events/events.js';
export type { NuBlurEvent } from '../../events/events.js';
export type { NuChangeEvent } from '../../events/events.js';
export type { NuClearEvent } from '../../events/events.js';
export type { NuFocusEvent } from '../../events/events.js';
export type { NuInputEvent } from '../../events/events.js';
export type { NuInvalidEvent } from '../../events/events.js';
/**
 * @summary Inputs collect data from the user.
 * @documentation https://nebulaui.org/components/input
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the input.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event nu-blur - Emitted when the control loses focus.
 * @event nu-change - Emitted when an alteration to the control's value is committed by the user.
 * @event nu-clear - Emitted when the clear button is activated.
 * @event nu-focus - Emitted when the control gains focus.
 * @event nu-input - Emitted when the control receives input.
 * @event nu-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` control.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The container that wraps the suffix.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuBlur: EventName<NuBlurEvent>;
    onNuChange: EventName<NuChangeEvent>;
    onNuClear: EventName<NuClearEvent>;
    onNuFocus: EventName<NuFocusEvent>;
    onNuInput: EventName<NuInputEvent>;
    onNuInvalid: EventName<NuInvalidEvent>;
}>;
export default reactWrapper;
