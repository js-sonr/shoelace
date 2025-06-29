import Component from '../../components/details/details.component.js';
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
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://nebulaui.org/components/details
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<nu-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<nu-icon>`.
 *
 * @event nu-show - Emitted when the details opens.
 * @event nu-after-show - Emitted after the details opens and all animations are complete.
 * @event nu-hide - Emitted when the details closes.
 * @event nu-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuShow: EventName<NuShowEvent>;
    onNuAfterShow: EventName<NuAfterShowEvent>;
    onNuHide: EventName<NuHideEvent>;
    onNuAfterHide: EventName<NuAfterHideEvent>;
}>;
export default reactWrapper;
