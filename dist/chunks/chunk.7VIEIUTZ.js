import {
  tab_styles_default
} from "./chunk.4CIVZ2IR.js";
import {
  NuIconButton
} from "./chunk.LWTMS7J3.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  e as e2,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/tab/tab.component.ts
var id = 0;
var NuTab = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = ++id;
    this.componentId = `sl-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("nu-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return x`
      <div
        part="base"
        class=${e({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? x`
              <nu-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></nu-icon-button>
            ` : ""}
      </div>
    `;
  }
};
NuTab.styles = [component_styles_default, tab_styles_default];
NuTab.dependencies = { "nu-icon-button": NuIconButton };
__decorateClass([
  e2(".tab")
], NuTab.prototype, "tab", 2);
__decorateClass([
  n({ reflect: true })
], NuTab.prototype, "panel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuTab.prototype, "active", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuTab.prototype, "closable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuTab.prototype, "disabled", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], NuTab.prototype, "tabIndex", 2);
__decorateClass([
  watch("active")
], NuTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], NuTab.prototype, "handleDisabledChange", 1);

export {
  NuTab
};
