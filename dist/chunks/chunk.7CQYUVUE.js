import {
  progress_ring_styles_default
} from "./chunk.LJTKCRFN.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  e,
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/progress-ring/progress-ring.component.ts
var NuProgressRing = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
NuProgressRing.styles = [component_styles_default, progress_ring_styles_default];
__decorateClass([
  e(".progress-ring__indicator")
], NuProgressRing.prototype, "indicator", 2);
__decorateClass([
  r()
], NuProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], NuProgressRing.prototype, "value", 2);
__decorateClass([
  n()
], NuProgressRing.prototype, "label", 2);

export {
  NuProgressRing
};
