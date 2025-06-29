import {
  breadcrumb_styles_default
} from "./chunk.7ACWTMAH.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  NuIcon
} from "./chunk.I7KSEQQV.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  e,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/breadcrumb/breadcrumb.component.ts
var NuBreadcrumb = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.separatorDir = this.localize.dir();
    this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "sl-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <nu-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></nu-icon>
        </slot>
      </span>
    `;
  }
};
NuBreadcrumb.styles = [component_styles_default, breadcrumb_styles_default];
NuBreadcrumb.dependencies = { "nu-icon": NuIcon };
__decorateClass([
  e("slot")
], NuBreadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  e('slot[name="separator"]')
], NuBreadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  n()
], NuBreadcrumb.prototype, "label", 2);

export {
  NuBreadcrumb
};
