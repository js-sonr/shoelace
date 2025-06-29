import Component from '../../components/list-view/list-view.component.js';
import { type EventName } from '@lit/react';
import type { NuSortChangeEvent } from '../../events/events.js';
import type { NuItemSelectEvent } from '../../events/events.js';
import type { NuLoadMoreEvent } from '../../events/events.js';
export type { NuSortChangeEvent } from '../../events/events.js';
export type { NuItemSelectEvent } from '../../events/events.js';
export type { NuLoadMoreEvent } from '../../events/events.js';
/**
 * @summary A list view component for displaying activity feeds and account balance lists in blockchain applications.
 * @documentation https://nebulaui.org/components/list-view
 * @status experimental
 * @since 2.0
 *
 * @event nu-sort-change - Emitted when the sort order changes.
 * @event nu-item-select - Emitted when an item is selected.
 * @event nu-load-more - Emitted when more items should be loaded.
 *
 * @slot - The default slot for list items.
 * @slot empty - Content to show when the list is empty.
 * @slot loading - Content to show when the list is loading.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The list header containing controls.
 * @csspart content - The main content area containing items.
 * @csspart group - A group wrapper when grouping is enabled.
 * @csspart group-header - The header for each group.
 * @csspart empty - The empty state container.
 * @csspart loading - The loading state container.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuSortChange: EventName<NuSortChangeEvent>;
    onNuItemSelect: EventName<NuItemSelectEvent>;
    onNuLoadMore: EventName<NuLoadMoreEvent>;
}>;
export default reactWrapper;
