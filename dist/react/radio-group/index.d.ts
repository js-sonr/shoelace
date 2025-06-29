import Component from '../../components/radio-group/radio-group.component.js';
import { type EventName } from '@lit/react';
import type { NuChangeEvent } from '../../events/events.js';
import type { NuInputEvent } from '../../events/events.js';
import type { NuInvalidEvent } from '../../events/events.js';
export type { NuChangeEvent } from '../../events/events.js';
export type { NuInputEvent } from '../../events/events.js';
export type { NuInvalidEvent } from '../../events/events.js';
/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://nebulaui.org/components/radio-group
 * @status stable
 * @since 2.0
 *
 * @dependency sl-button-group
 *
 * @slot - The default slot where `<nu-radio>` or `<nu-radio-button>` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 * @slot help-text - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
 *
 * @event nu-change - Emitted when the radio group's selected value changes.
 * @event nu-input - Emitted when the radio group receives user input.
 * @event nu-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-group - The button group that wraps radio buttons.
 * @csspart button-group__base - The button group's `base` part.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuChange: EventName<NuChangeEvent>;
    onNuInput: EventName<NuInputEvent>;
    onNuInvalid: EventName<NuInvalidEvent>;
}>;
export default reactWrapper;
