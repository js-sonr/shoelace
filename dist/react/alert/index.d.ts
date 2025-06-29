import Component from '../../components/alert/alert.component.js';
import { type EventName } from '@lit/react';
import type { NuShowEvent } from '../../events/events.js';
import type { NuAfterShowEvent } from '../../events/events.js';
import type { NuHideEvent } from '../../events/events.js';
import type { NuAfterHideEvent } from '../../events/events.js';
export type { NuShowEvent } from '../../events/events.js';
export type { NuAfterShowEvent } from '../../events/events.js';
export type { NuHideEvent } from '../../events/events.js';
export type { NuAfterHideEvent } from '../../events/events.js';
/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://nebulaui.org/components/alert
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<nu-icon>`.
 *
 * @event nu-show - Emitted when the alert opens.
 * @event nu-after-show - Emitted after the alert opens and all animations are complete.
 * @event nu-hide - Emitted when the alert closes.
 * @event nu-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an `<nu-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuShow: EventName<NuShowEvent>;
    onNuAfterShow: EventName<NuAfterShowEvent>;
    onNuHide: EventName<NuHideEvent>;
    onNuAfterHide: EventName<NuAfterHideEvent>;
}>;
export default reactWrapper;
