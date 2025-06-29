import Component from '../../components/tooltip/tooltip.component.js';
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
 * @summary Tooltips display additional information based on a specific action.
 * @documentation https://nebulaui.org/components/tooltip
 * @status stable
 * @since 2.0
 *
 * @dependency sl-popup
 *
 * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
 * @slot content - The content to render in the tooltip. Alternatively, you can use the `content` attribute.
 *
 * @event nu-show - Emitted when the tooltip begins to show.
 * @event nu-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event nu-hide - Emitted when the tooltip begins to hide.
 * @event nu-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<nu-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
 * @csspart body - The tooltip's body where its content is rendered.
 *
 * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.
 * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.
 *
 * @animation tooltip.show - The animation to use when showing the tooltip.
 * @animation tooltip.hide - The animation to use when hiding the tooltip.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuShow: EventName<NuShowEvent>;
    onNuAfterShow: EventName<NuAfterShowEvent>;
    onNuHide: EventName<NuHideEvent>;
    onNuAfterHide: EventName<NuAfterHideEvent>;
}>;
export default reactWrapper;
