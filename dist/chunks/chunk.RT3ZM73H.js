import {
  list_view_styles_default
} from "./chunk.DEKH7FHB.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  T,
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/list-view/list-view.component.ts
var NuListView = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.items = [];
    this.sortBy = "date";
    this.groupBy = "none";
    this.pageSize = 20;
    this.loading = false;
    this.infiniteScroll = false;
    this.multiSelect = false;
    this.filterText = "";
    this.currentPage = 1;
    this.selectedItems = /* @__PURE__ */ new Set();
  }
  get sortedItems() {
    let filtered = this.items;
    if (this.filterText) {
      const filterLower = this.filterText.toLowerCase();
      filtered = filtered.filter(
        (item) => {
          var _a, _b;
          return item.title.toLowerCase().includes(filterLower) || ((_a = item.description) == null ? void 0 : _a.toLowerCase().includes(filterLower)) || ((_b = item.currency) == null ? void 0 : _b.toLowerCase().includes(filterLower));
        }
      );
    }
    return filtered.sort((a, b) => {
      var _a, _b;
      switch (this.sortBy) {
        case "date":
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case "amount": {
          const amountA = parseFloat(((_a = a.amount) == null ? void 0 : _a.replace(/[^-0-9.]/g, "")) || "0");
          const amountB = parseFloat(((_b = b.amount) == null ? void 0 : _b.replace(/[^-0-9.]/g, "")) || "0");
          return Math.abs(amountB) - Math.abs(amountA);
        }
        case "type":
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });
  }
  get groupedItems() {
    const groups = /* @__PURE__ */ new Map();
    if (this.groupBy === "none") {
      groups.set("all", this.sortedItems);
      return groups;
    }
    this.sortedItems.forEach((item) => {
      let groupKey;
      switch (this.groupBy) {
        case "date":
          groupKey = new Date(item.timestamp).toDateString();
          break;
        case "type":
          groupKey = item.type.charAt(0).toUpperCase() + item.type.slice(1);
          break;
        default:
          groupKey = "all";
      }
      if (!groups.has(groupKey)) {
        groups.set(groupKey, []);
      }
      groups.get(groupKey).push(item);
    });
    return groups;
  }
  get paginatedGroups() {
    const groups = this.groupedItems;
    if (this.infiniteScroll) {
      const itemsToShow = this.currentPage * this.pageSize;
      const allItems = Array.from(groups.values()).flat();
      const paginatedItems = allItems.slice(0, itemsToShow);
      if (this.groupBy === "none") {
        return /* @__PURE__ */ new Map([["all", paginatedItems]]);
      }
      const newGroups = /* @__PURE__ */ new Map();
      paginatedItems.forEach((item) => {
        let groupKey;
        switch (this.groupBy) {
          case "date":
            groupKey = new Date(item.timestamp).toDateString();
            break;
          case "type":
            groupKey = item.type.charAt(0).toUpperCase() + item.type.slice(1);
            break;
          default:
            groupKey = "all";
        }
        if (!newGroups.has(groupKey)) {
          newGroups.set(groupKey, []);
        }
        newGroups.get(groupKey).push(item);
      });
      return newGroups;
    }
    return groups;
  }
  handleSortChange() {
    this.dispatchEvent(
      new CustomEvent("nu-sort-change", {
        detail: { sortBy: this.sortBy },
        bubbles: true
      })
    );
  }
  handleItemSelect(itemId) {
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
      new CustomEvent("nu-item-select", {
        detail: {
          itemId,
          selectedItems: Array.from(this.selectedItems)
        },
        bubbles: true
      })
    );
    this.requestUpdate();
  }
  handleLoadMore() {
    this.currentPage++;
    this.dispatchEvent(
      new CustomEvent("nu-load-more", {
        detail: {
          page: this.currentPage,
          pageSize: this.pageSize
        },
        bubbles: true
      })
    );
  }
  renderGroupHeader(groupKey) {
    if (this.groupBy === "none") return T;
    return x`
      <div part="group-header" class="group-header">
        <h3>${groupKey}</h3>
      </div>
    `;
  }
  renderItem(item) {
    const isSelected = this.selectedItems.has(item.id);
    return x`
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
  renderLoadMore() {
    if (!this.infiniteScroll) return T;
    const totalItems = this.sortedItems.length;
    const shownItems = this.currentPage * this.pageSize;
    if (shownItems >= totalItems) return T;
    return x`
      <nu-button variant="default" size="medium" @click=${this.handleLoadMore}>
        Load More (${totalItems - shownItems} remaining)
      </nu-button>
    `;
  }
  render() {
    if (this.loading) {
      return x`
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
      return x`
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
    return x`
      <div part="base" class="list-view">
        <div part="content" class="list-content">
          ${Array.from(groups.entries()).map(
      ([groupKey, items]) => x`
              <div part="group" class="group">
                ${this.renderGroupHeader(groupKey)}
                <div class="group-items">${items.map((item) => this.renderItem(item))}</div>
              </div>
            `
    )}
          ${this.renderLoadMore()}
        </div>
      </div>
    `;
  }
};
NuListView.styles = [component_styles_default, list_view_styles_default];
__decorateClass([
  n({ type: Array })
], NuListView.prototype, "items", 2);
__decorateClass([
  n({ attribute: "sort-by" })
], NuListView.prototype, "sortBy", 2);
__decorateClass([
  n({ attribute: "group-by" })
], NuListView.prototype, "groupBy", 2);
__decorateClass([
  n({ type: Number, attribute: "page-size" })
], NuListView.prototype, "pageSize", 2);
__decorateClass([
  n({ type: Boolean })
], NuListView.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, attribute: "infinite-scroll" })
], NuListView.prototype, "infiniteScroll", 2);
__decorateClass([
  n({ type: Boolean, attribute: "multi-select" })
], NuListView.prototype, "multiSelect", 2);
__decorateClass([
  n({ attribute: "filter-text" })
], NuListView.prototype, "filterText", 2);
__decorateClass([
  r()
], NuListView.prototype, "currentPage", 2);
__decorateClass([
  r()
], NuListView.prototype, "selectedItems", 2);
__decorateClass([
  watch("sortBy")
], NuListView.prototype, "handleSortChange", 1);

export {
  NuListView
};
