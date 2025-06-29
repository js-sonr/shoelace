import Component from '../../components/list-item/list-item.component.js';
import { type EventName } from '@lit/react';
import type { NuItemClickEvent } from '../../events/events.js';
import type { NuItemSelectEvent } from '../../events/events.js';
export type { NuItemClickEvent } from '../../events/events.js';
export type { NuItemSelectEvent } from '../../events/events.js';
/**
 * @summary A list item component for displaying individual activities in activity feeds or balance lists.
 * @documentation https://nebulaui.org/components/list-item
 * @status experimental
 * @since 2.0
 *
 * @event nu-item-click - Emitted when the item is clicked.
 * @event nu-item-select - Emitted when the item selection state changes.
 *
 * @slot - The default slot for custom content.
 * @slot icon - Custom icon content.
 * @slot title - Custom title content.
 * @slot description - Custom description content.
 * @slot amount - Custom amount content.
 * @slot metadata - Custom metadata content.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The icon container.
 * @csspart content - The main content area.
 * @csspart header - The header containing title and amount.
 * @csspart title - The title text.
 * @csspart description - The description text.
 * @csspart amount - The amount text.
 * @csspart metadata - The metadata container.
 * @csspart status - The status indicator.
 * @csspart timestamp - The timestamp text.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuItemClick: EventName<NuItemClickEvent>;
    onNuItemSelect: EventName<NuItemSelectEvent>;
}>;
export default reactWrapper;
