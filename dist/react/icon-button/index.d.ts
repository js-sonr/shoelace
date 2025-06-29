import Component from '../../components/icon-button/icon-button.component.js';
import { type EventName } from '@lit/react';
import type { NuBlurEvent } from '../../events/events.js';
import type { NuFocusEvent } from '../../events/events.js';
export type { NuBlurEvent } from '../../events/events.js';
export type { NuFocusEvent } from '../../events/events.js';
/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://nebulaui.org/components/icon-button
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @event nu-blur - Emitted when the icon button loses focus.
 * @event nu-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuBlur: EventName<NuBlurEvent>;
    onNuFocus: EventName<NuFocusEvent>;
}>;
export default reactWrapper;
