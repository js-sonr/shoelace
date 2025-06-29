import {
  progress_bar_styles_default
} from "./chunk.O37OKSPB.js";
import {
  o as o2
} from "./chunk.CX67Q22O.js";
import {
  o
} from "./chunk.RAPJK3SC.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
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

// src/components/progress-bar/progress-bar.component.ts
var NuProgressBar = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${o(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${o2({ width: `${this.value}%` })}>
          ${!this.indeterminate ? x` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
NuProgressBar.styles = [component_styles_default, progress_bar_styles_default];
__decorateClass([
  n({ type: Number, reflect: true })
], NuProgressBar.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  n()
], NuProgressBar.prototype, "label", 2);

export {
  NuProgressBar
};
