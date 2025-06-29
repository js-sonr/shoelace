import {
  skeleton_styles_default
} from "./chunk.IXFCI3FF.js";
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

// src/components/skeleton/skeleton.component.ts
var NuSkeleton = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
NuSkeleton.styles = [component_styles_default, skeleton_styles_default];
__decorateClass([
  n()
], NuSkeleton.prototype, "effect", 2);

export {
  NuSkeleton
};
