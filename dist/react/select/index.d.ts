import Component from '../../components/select/select.component.js';
import { type EventName } from '@lit/react';
import type { NuChangeEvent } from '../../events/events.js';
import type { NuClearEvent } from '../../events/events.js';
import type { NuInputEvent } from '../../events/events.js';
import type { NuFocusEvent } from '../../events/events.js';
import type { NuBlurEvent } from '../../events/events.js';
import type { NuShowEvent } from '../../events/events.js';
import type { NuAfterShowEvent } from '../../events/events.js';
import type { NuHideEvent } from '../../events/events.js';
import type { NuAfterHideEvent } from '../../events/events.js';
import type { NuInvalidEvent } from '../../events/events.js';
export type { NuChangeEvent } from '../../events/events.js';
export type { NuClearEvent } from '../../events/events.js';
export type { NuInputEvent } from '../../events/events.js';
export type { NuFocusEvent } from '../../events/events.js';
export type { NuBlurEvent } from '../../events/events.js';
export type { NuShowEvent } from '../../events/events.js';
export type { NuAfterShowEvent } from '../../events/events.js';
export type { NuHideEvent } from '../../events/events.js';
export type { NuAfterHideEvent } from '../../events/events.js';
export type { NuInvalidEvent } from '../../events/events.js';
/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://nebulaui.org/components/select
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 * @dependency sl-popup
 * @dependency sl-tag
 *
 * @slot - The listbox options. Must be `<nu-option>` elements. You can use `<nu-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event nu-change - Emitted when the control's value changes.
 * @event nu-clear - Emitted when the control's value is cleared.
 * @event nu-input - Emitted when the control receives input.
 * @event nu-focus - Emitted when the control gains focus.
 * @event nu-blur - Emitted when the control loses focus.
 * @event nu-show - Emitted when the select's menu opens.
 * @event nu-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event nu-hide - Emitted when the select's menu closes.
 * @event nu-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event nu-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuChange: EventName<NuChangeEvent>;
    onNuClear: EventName<NuClearEvent>;
    onNuInput: EventName<NuInputEvent>;
    onNuFocus: EventName<NuFocusEvent>;
    onNuBlur: EventName<NuBlurEvent>;
    onNuShow: EventName<NuShowEvent>;
    onNuAfterShow: EventName<NuAfterShowEvent>;
    onNuHide: EventName<NuHideEvent>;
    onNuAfterHide: EventName<NuAfterHideEvent>;
    onNuInvalid: EventName<NuInvalidEvent>;
}>;
export default reactWrapper;
