import {
  list_item_styles_default
} from "./chunk.HI7GMXWR.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  T,
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/list-item/list-item.component.ts
var NuListItem = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.type = "transaction";
    this.title = "";
    this.description = "";
    this.amount = "";
    this.currency = "";
    this.icon = "";
    this.timestamp = "";
    this.status = "completed";
    this.selected = false;
    this.clickable = true;
    this.showStatus = true;
    this.showTimestamp = true;
    this.metadata = {};
  }
  handleClick() {
    if (!this.clickable) return;
    this.dispatchEvent(
      new CustomEvent("nu-item-click", {
        detail: {
          type: this.type,
          title: this.title,
          description: this.description,
          amount: this.amount,
          currency: this.currency,
          timestamp: this.timestamp,
          status: this.status,
          metadata: this.metadata
        },
        bubbles: true
      })
    );
  }
  renderIcon() {
    var _a;
    if (this.icon) {
      return x`
        <nu-icon
          part="icon"
          class="list-item__icon"
          name=${this.icon}
          library=${this.type === "transaction" ? "crypto" : "default"}
        ></nu-icon>
      `;
    }
    let defaultIcon = "circle";
    const library = "default";
    switch (this.type) {
      case "transaction":
        defaultIcon = ((_a = this.amount) == null ? void 0 : _a.startsWith("-")) ? "arrow-up-right" : "arrow-down-left";
        break;
      case "balance":
        defaultIcon = "wallet2";
        break;
      case "event":
        defaultIcon = "bell";
        break;
    }
    return x` <nu-icon part="icon" class="list-item__icon" name=${defaultIcon} library=${library}></nu-icon> `;
  }
  renderStatus() {
    if (!this.showStatus) return T;
    const statusClasses = {
      "list-item__status": true,
      "list-item__status--pending": this.status === "pending",
      "list-item__status--completed": this.status === "completed",
      "list-item__status--failed": this.status === "failed"
    };
    return x`
      <div part="status" class=${e(statusClasses)}>
        <nu-icon
          name=${this.status === "pending" ? "clock" : this.status === "completed" ? "check-circle" : "x-circle"}
          library="default"
        ></nu-icon>
      </div>
    `;
  }
  renderTimestamp() {
    if (!this.showTimestamp || !this.timestamp) return T;
    const date = new Date(this.timestamp);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    const diffHours = Math.floor(diffMs / 36e5);
    const diffDays = Math.floor(diffMs / 864e5);
    let timeString = "";
    if (diffMins < 1) {
      timeString = "Just now";
    } else if (diffMins < 60) {
      timeString = `${diffMins}m ago`;
    } else if (diffHours < 24) {
      timeString = `${diffHours}h ago`;
    } else if (diffDays < 7) {
      timeString = `${diffDays}d ago`;
    } else {
      timeString = date.toLocaleDateString();
    }
    return x` <span part="timestamp" class="list-item__timestamp"> ${timeString} </span> `;
  }
  renderAmount() {
    if (!this.amount) return T;
    const isNegative = this.amount.startsWith("-");
    const amountClasses = {
      "list-item__amount": true,
      "list-item__amount--negative": isNegative,
      "list-item__amount--positive": !isNegative && this.amount !== "0"
    };
    return x`
      <div part="amount" class=${e(amountClasses)}>
        <span class="amount-value">${this.amount}</span>
        ${this.currency ? x`<span class="amount-currency">${this.currency}</span>` : T}
      </div>
    `;
  }
  renderMetadata() {
    const metadataEntries = Object.entries(this.metadata);
    if (metadataEntries.length === 0) return T;
    return x`
      <div part="metadata" class="list-item__metadata">
        ${metadataEntries.map(
      ([key, value]) => x`
            <span class="metadata-item">
              <span class="metadata-key">${key}:</span>
              <span class="metadata-value">${value}</span>
            </span>
          `
    )}
      </div>
    `;
  }
  render() {
    const classes = {
      "list-item": true,
      "list-item--selected": this.selected,
      "list-item--clickable": this.clickable,
      [`list-item--${this.type}`]: true,
      [`list-item--${this.status}`]: true
    };
    return x`
      <div
        part="base"
        class=${e(classes)}
        @click=${this.handleClick}
        role="listitem"
        tabindex=${this.clickable ? "0" : "-1"}
      >
        <div class="list-item__icon-container">
          <slot name="icon"> ${this.renderIcon()} </slot>
        </div>

        <div part="content" class="list-item__content">
          <div part="header" class="list-item__header">
            <div class="list-item__title-group">
              <slot name="title">
                <span part="title" class="list-item__title">${this.title}</span>
              </slot>
              ${this.renderStatus()}
            </div>

            <div class="list-item__amount-group">
              <slot name="amount"> ${this.renderAmount()} </slot>
              ${this.renderTimestamp()}
            </div>
          </div>

          ${this.description ? x`
                <slot name="description">
                  <div part="description" class="list-item__description">${this.description}</div>
                </slot>
              ` : T}

          <slot name="metadata"> ${this.renderMetadata()} </slot>
        </div>

        <slot></slot>
      </div>
    `;
  }
};
NuListItem.styles = [component_styles_default, list_item_styles_default];
__decorateClass([
  n()
], NuListItem.prototype, "type", 2);
__decorateClass([
  n()
], NuListItem.prototype, "title", 2);
__decorateClass([
  n()
], NuListItem.prototype, "description", 2);
__decorateClass([
  n()
], NuListItem.prototype, "amount", 2);
__decorateClass([
  n()
], NuListItem.prototype, "currency", 2);
__decorateClass([
  n()
], NuListItem.prototype, "icon", 2);
__decorateClass([
  n()
], NuListItem.prototype, "timestamp", 2);
__decorateClass([
  n()
], NuListItem.prototype, "status", 2);
__decorateClass([
  n({ type: Boolean })
], NuListItem.prototype, "selected", 2);
__decorateClass([
  n({ type: Boolean })
], NuListItem.prototype, "clickable", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-status" })
], NuListItem.prototype, "showStatus", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-timestamp" })
], NuListItem.prototype, "showTimestamp", 2);
__decorateClass([
  n({ type: Object })
], NuListItem.prototype, "metadata", 2);

export {
  NuListItem
};
