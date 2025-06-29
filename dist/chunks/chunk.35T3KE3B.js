import {
  badge_styles_default
} from "./chunk.DJ4MWUFZ.js";
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
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/badge/badge.component.ts
var NuBadge = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return x`
      <span
        part="base"
        class=${e({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
NuBadge.styles = [component_styles_default, badge_styles_default];
__decorateClass([
  n({ reflect: true })
], NuBadge.prototype, "variant", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuBadge.prototype, "pill", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuBadge.prototype, "pulse", 2);

export {
  NuBadge
};
