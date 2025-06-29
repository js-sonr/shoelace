import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
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

// src/components/format-date/format-date.component.ts
var NuFormatDate = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = /* @__PURE__ */ new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return x`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  n()
], NuFormatDate.prototype, "date", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "weekday", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "era", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "year", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "month", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "day", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "hour", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "minute", 2);
__decorateClass([
  n()
], NuFormatDate.prototype, "second", 2);
__decorateClass([
  n({ attribute: "time-zone-name" })
], NuFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  n({ attribute: "time-zone" })
], NuFormatDate.prototype, "timeZone", 2);
__decorateClass([
  n({ attribute: "hour-format" })
], NuFormatDate.prototype, "hourFormat", 2);

export {
  NuFormatDate
};
