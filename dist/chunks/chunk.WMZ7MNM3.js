import {
  tab_panel_styles_default
} from "./chunk.4QRDPOSB.js";
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
  n
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/tab-panel/tab-panel.component.ts
var id = 0;
var NuTabPanel = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `sl-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return x`
      <slot
        part="base"
        class=${e({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
NuTabPanel.styles = [component_styles_default, tab_panel_styles_default];
__decorateClass([
  n({ reflect: true })
], NuTabPanel.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], NuTabPanel.prototype, "handleActiveChange", 1);

export {
  NuTabPanel
};
