import { html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './list-view.styles.js';
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
  static styles: CSSResultGroup = [componentStyles, styles];

  /** The items to display in the list */
  @property({ type: Array }) items: ActivityItem[] = [];

  /** How to sort the items */
  @property({ attribute: 'sort-by' }) sortBy: SortBy = 'date';

  /** How to group the items */
  @property({ attribute: 'group-by' }) groupBy: GroupBy = 'none';

  /** Number of items per page */
  @property({ type: Number, attribute: 'page-size' }) pageSize = 20;

  /** Whether the list is currently loading */
  @property({ type: Boolean }) loading = false;

  /** Whether to show load more button or infinite scroll */
  @property({ type: Boolean, attribute: 'infinite-scroll' }) infiniteScroll = false;

  /** Whether multiple items can be selected */
  @property({ type: Boolean, attribute: 'multi-select' }) multiSelect = false;

  /** Filter text to search items */
  @property({ attribute: 'filter-text' }) filterText = '';

  @state() private currentPage = 1;
  @state() private selectedItems = new Set<string>();

  private get sortedItems(): ActivityItem[] {
    let filtered = this.items;

    // Apply text filter
    if (this.filterText) {
      const filterLower = this.filterText.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.title.toLowerCase().includes(filterLower) ||
          item.description?.toLowerCase().includes(filterLower) ||
          item.currency?.toLowerCase().includes(filterLower)
      );
    }

    // Sort items
    return filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'date':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'amount': {
          const amountA = parseFloat(a.amount?.replace(/[^-0-9.]/g, '') || '0');
          const amountB = parseFloat(b.amount?.replace(/[^-0-9.]/g, '') || '0');
          return Math.abs(amountB) - Math.abs(amountA);
        }
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });
  }

  private get groupedItems(): Map<string, ActivityItem[]> {
    const groups = new Map<string, ActivityItem[]>();

    if (this.groupBy === 'none') {
      groups.set('all', this.sortedItems);
      return groups;
    }

    this.sortedItems.forEach(item => {
      let groupKey: string;

      switch (this.groupBy) {
        case 'date':
          groupKey = new Date(item.timestamp).toDateString();
          break;
        case 'type':
          groupKey = item.type.charAt(0).toUpperCase() + item.type.slice(1);
          break;
        default:
          groupKey = 'all';
      }

      if (!groups.has(groupKey)) {
        groups.set(groupKey, []);
      }
      groups.get(groupKey)!.push(item);
    });

    return groups;
  }

  private get paginatedGroups(): Map<string, ActivityItem[]> {
    const groups = this.groupedItems;

    if (this.infiniteScroll) {
      const itemsToShow = this.currentPage * this.pageSize;
      const allItems = Array.from(groups.values()).flat();
      const paginatedItems = allItems.slice(0, itemsToShow);

      if (this.groupBy === 'none') {
        return new Map([['all', paginatedItems]]);
      }

      // Re-group paginated items
      const newGroups = new Map<string, ActivityItem[]>();
      paginatedItems.forEach(item => {
        let groupKey: string;
        switch (this.groupBy) {
          case 'date':
            groupKey = new Date(item.timestamp).toDateString();
            break;
          case 'type':
            groupKey = item.type.charAt(0).toUpperCase() + item.type.slice(1);
            break;
          default:
            groupKey = 'all';
        }

        if (!newGroups.has(groupKey)) {
          newGroups.set(groupKey, []);
        }
        newGroups.get(groupKey)!.push(item);
      });

      return newGroups;
    }

    return groups;
  }

  @watch('sortBy')
  handleSortChange() {
    this.dispatchEvent(
      new CustomEvent('nu-sort-change', {
        detail: { sortBy: this.sortBy },
        bubbles: true
      })
    );
  }

  private handleItemSelect(itemId: string) {
    if (this.multiSelect) {
      if (this.selectedItems.has(itemId)) {
        this.selectedItems.delete(itemId);
      } else {
        this.selectedItems.add(itemId);
      }
    } else {
      this.selectedItems.clear();
      this.selectedItems.add(itemId);
    }

    this.dispatchEvent(
      new CustomEvent('nu-item-select', {
        detail: {
          itemId,
          selectedItems: Array.from(this.selectedItems)
        },
        bubbles: true
      })
    );

    this.requestUpdate();
  }

  private handleLoadMore() {
    this.currentPage++;
    this.dispatchEvent(
      new CustomEvent('nu-load-more', {
        detail: {
          page: this.currentPage,
          pageSize: this.pageSize
        },
        bubbles: true
      })
    );
  }

  private renderGroupHeader(groupKey: string) {
    if (this.groupBy === 'none') return nothing;

    return html`
      <div part="group-header" class="group-header">
        <h3>${groupKey}</h3>
      </div>
    `;
  }

  private renderItem(item: ActivityItem) {
    const isSelected = this.selectedItems.has(item.id);

    return html`
      <nu-list-item
        .type=${item.type}
        .title=${item.title}
        .description=${item.description}
        .amount=${item.amount}
        .currency=${item.currency}
        .icon=${item.icon}
        .timestamp=${item.timestamp.toISOString()}
        .status=${item.status}
        .selected=${isSelected}
        @click=${() => this.handleItemSelect(item.id)}
      ></nu-list-item>
    `;
  }

  private renderLoadMore() {
    if (!this.infiniteScroll) return nothing;

    const totalItems = this.sortedItems.length;
    const shownItems = this.currentPage * this.pageSize;

    if (shownItems >= totalItems) return nothing;

    return html`
      <nu-button variant="default" size="medium" @click=${this.handleLoadMore}>
        Load More (${totalItems - shownItems} remaining)
      </nu-button>
    `;
  }

  render() {
    if (this.loading) {
      return html`
        <div part="base" class="list-view list-view--loading">
          <div part="loading" class="loading-state">
            <slot name="loading">
              <nu-spinner></nu-spinner>
              <p>Loading...</p>
            </slot>
          </div>
        </div>
      `;
    }

    if (this.sortedItems.length === 0) {
      return html`
        <div part="base" class="list-view list-view--empty">
          <div part="empty" class="empty-state">
            <slot name="empty">
              <p>No items to display</p>
            </slot>
          </div>
        </div>
      `;
    }

    const groups = this.paginatedGroups;

    return html`
      <div part="base" class="list-view">
        <div part="content" class="list-content">
          ${Array.from(groups.entries()).map(
            ([groupKey, items]) => html`
              <div part="group" class="group">
                ${this.renderGroupHeader(groupKey)}
                <div class="group-items">${items.map(item => this.renderItem(item))}</div>
              </div>
            `
          )}
          ${this.renderLoadMore()}
        </div>
      </div>
    `;
  }
}
