import Component from '../../components/rating/rating.component.js';
import { type EventName } from '@lit/react';
import type { NuChangeEvent } from '../../events/events.js';
import type { NuHoverEvent } from '../../events/events.js';
export type { NuChangeEvent } from '../../events/events.js';
export type { NuHoverEvent } from '../../events/events.js';
/**
 * @summary Ratings give users a way to quickly view and provide feedback.
 * @documentation https://nebulaui.org/components/rating
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @event nu-change - Emitted when the rating's value changes.
 * @event nu-hover - Emitted when the user hovers over a value. The
 *  `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the
 *  rating's value would be if the user were to commit to the hovered value.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --symbol-color - The inactive color for symbols.
 * @cssproperty --symbol-color-active - The active color for symbols.
 * @cssproperty --symbol-size - The size of symbols.
 * @cssproperty --symbol-spacing - The spacing to use around symbols.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuChange: EventName<NuChangeEvent>;
    onNuHover: EventName<NuHoverEvent>;
}>;
export default reactWrapper;
