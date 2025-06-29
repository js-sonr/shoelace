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

// src/components/format-number/format-number.component.ts
var NuFormatNumber = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
__decorateClass([
  n({ type: Number })
], NuFormatNumber.prototype, "value", 2);
__decorateClass([
  n()
], NuFormatNumber.prototype, "type", 2);
__decorateClass([
  n({ attribute: "no-grouping", type: Boolean })
], NuFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  n()
], NuFormatNumber.prototype, "currency", 2);
__decorateClass([
  n({ attribute: "currency-display" })
], NuFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  n({ attribute: "minimum-integer-digits", type: Number })
], NuFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  n({ attribute: "minimum-fraction-digits", type: Number })
], NuFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  n({ attribute: "maximum-fraction-digits", type: Number })
], NuFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  n({ attribute: "minimum-significant-digits", type: Number })
], NuFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  n({ attribute: "maximum-significant-digits", type: Number })
], NuFormatNumber.prototype, "maximumSignificantDigits", 2);

export {
  NuFormatNumber
};
