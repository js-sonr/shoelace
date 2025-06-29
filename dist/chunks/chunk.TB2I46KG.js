import {
  divider_styles_default
} from "./chunk.XO66AHBG.js";
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
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/divider/divider.component.ts
var NuDivider = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
NuDivider.styles = [component_styles_default, divider_styles_default];
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], NuDivider.prototype, "handleVerticalChange", 1);

export {
  NuDivider
};
