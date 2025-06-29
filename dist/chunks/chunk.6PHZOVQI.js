import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  NebulaElement,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/format-bytes/format-bytes.component.ts
var NuFormatBytes = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "short";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
    const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
    const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(valueToFormat, {
      style: "unit",
      unit,
      unitDisplay: this.display
    });
  }
};
__decorateClass([
  n({ type: Number })
], NuFormatBytes.prototype, "value", 2);
__decorateClass([
  n()
], NuFormatBytes.prototype, "unit", 2);
__decorateClass([
  n()
], NuFormatBytes.prototype, "display", 2);

export {
  NuFormatBytes
};
