import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
export interface ActivityItem {
    id: string;
    type: 'transaction' | 'balance' | 'event';
    timestamp: Date;
    title: string;
    description?: string;
    amount?: string;
    currency?: string;
    icon?: string;
    status?: 'pending' | 'completed' | 'failed';
    metadata?: Record<string, unknown>;
}
export type SortBy = 'date' | 'amount' | 'type';
export type GroupBy = 'date' | 'type' | 'none';
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
export default class NuListView extends NebulaElement {
    static styles: CSSResultGroup;
    /** The items to display in the list */
    items: ActivityItem[];
    /** How to sort the items */
    sortBy: SortBy;
    /** How to group the items */
    groupBy: GroupBy;
    /** Number of items per page */
    pageSize: number;
    /** Whether the list is currently loading */
    loading: boolean;
    /** Whether to show load more button or infinite scroll */
    infiniteScroll: boolean;
    /** Whether multiple items can be selected */
    multiSelect: boolean;
    /** Filter text to search items */
    filterText: string;
    private currentPage;
    private selectedItems;
    private get sortedItems();
    private get groupedItems();
    private get paginatedGroups();
    handleSortChange(): void;
    private handleItemSelect;
    private handleLoadMore;
    private renderGroupHeader;
    private renderItem;
    private renderLoadMore;
    render(): import("lit-html").TemplateResult<1>;
}
