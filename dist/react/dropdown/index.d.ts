import Component from '../../components/dropdown/dropdown.component.js';
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
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://nebulaui.org/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency sl-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a `<nu-button>` element.
 *
 * @event nu-show - Emitted when the dropdown opens.
 * @event nu-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event nu-hide - Emitted when the dropdown closes.
 * @event nu-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<nu-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuShow: EventName<NuShowEvent>;
    onNuAfterShow: EventName<NuAfterShowEvent>;
    onNuHide: EventName<NuHideEvent>;
    onNuAfterHide: EventName<NuAfterHideEvent>;
}>;
export default reactWrapper;
