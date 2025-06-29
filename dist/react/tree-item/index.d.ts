import Component from '../../components/tree-item/tree-item.component.js';
import { type EventName } from '@lit/react';
import type { NuExpandEvent } from '../../events/events.js';
import type { NuAfterExpandEvent } from '../../events/events.js';
import type { NuCollapseEvent } from '../../events/events.js';
import type { NuAfterCollapseEvent } from '../../events/events.js';
import type { NuLazyChangeEvent } from '../../events/events.js';
import type { NuLazyLoadEvent } from '../../events/events.js';
export type { NuExpandEvent } from '../../events/events.js';
export type { NuAfterExpandEvent } from '../../events/events.js';
export type { NuCollapseEvent } from '../../events/events.js';
export type { NuAfterCollapseEvent } from '../../events/events.js';
export type { NuLazyChangeEvent } from '../../events/events.js';
export type { NuLazyLoadEvent } from '../../events/events.js';
/**
 * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
 * @documentation https://nebulaui.org/components/tree-item
 * @status stable
 * @since 2.0
 *
 * @dependency sl-checkbox
 * @dependency sl-icon
 * @dependency sl-spinner
 *
 * @event nu-expand - Emitted when the tree item expands.
 * @event nu-after-expand - Emitted after the tree item expands and all animations are complete.
 * @event nu-collapse - Emitted when the tree item collapses.
 * @event nu-after-collapse - Emitted after the tree item collapses and all animations are complete.
 * @event nu-lazy-change - Emitted when the tree item's lazy state changes.
 * @event nu-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
 *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
 *  state and update the tree.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded.
 * @slot collapse-icon - The icon to show when the tree item is collapsed.
 *
 * @csspart base - The component's base wrapper.
 * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
 * @csspart item--disabled - Applied when the tree item is disabled.
 * @csspart item--expanded - Applied when the tree item is expanded.
 * @csspart item--indeterminate - Applied when the selection is indeterminate.
 * @csspart item--selected - Applied when the tree item is selected.
 * @csspart indentation - The tree item's indentation container.
 * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
 * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart label - The tree item's label.
 * @csspart children - The container that wraps the tree item's nested children.
 * @csspart checkbox - The checkbox that shows when using multiselect.
 * @csspart checkbox__base - The checkbox's exported `base` part.
 * @csspart checkbox__control - The checkbox's exported `control` part.
 * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.
 * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.
 * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
 * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
 * @csspart checkbox__label - The checkbox's exported `label` part.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuExpand: EventName<NuExpandEvent>;
    onNuAfterExpand: EventName<NuAfterExpandEvent>;
    onNuCollapse: EventName<NuCollapseEvent>;
    onNuAfterCollapse: EventName<NuAfterCollapseEvent>;
    onNuLazyChange: EventName<NuLazyChangeEvent>;
    onNuLazyLoad: EventName<NuLazyLoadEvent>;
}>;
export default reactWrapper;
