import {
  area_default,
  basis_default,
  cardinal_default,
  line_default,
  linear,
  linear_default,
  max,
  monotoneX,
  step_default,
  time
} from "./chunk.RKDWVAGI.js";
import {
  o
} from "./chunk.CX67Q22O.js";
import {
  area_chart_styles_default
} from "./chunk.AIMAHL4O.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
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

// src/components/area-chart/area-chart.component.ts
var NuAreaChart = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.data = "[]";
    this.width = 400;
    this.height = 300;
    this.margin = { top: 20, right: 30, bottom: 30, left: 40 };
    this.showGrid = true;
    this.showAxes = true;
    this.curve = "monotone";
    this.animateChart = true;
    this.parsedData = [];
  }
  handleDataChange() {
    this.parseData();
    this.requestUpdate();
  }
  parseData() {
    try {
      const rawData = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
      if (!Array.isArray(rawData)) {
        this.parsedData = [];
        return;
      }
      this.parsedData = rawData.map((d) => {
        const item = d;
        return {
          date: typeof item.date === "string" ? new Date(item.date) : item.date instanceof Date ? item.date : new Date(String(item.key || "")),
          value: Number(item.value || 0)
        };
      });
    } catch (error) {
      console.error("Failed to parse chart data:", error);
      this.parsedData = [];
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.parseData();
  }
  getCurveFunction() {
    switch (this.curve) {
      case "linear":
        return linear_default;
      case "monotone":
        return monotoneX;
      case "cardinal":
        return cardinal_default;
      case "basis":
        return basis_default;
      case "step":
        return step_default;
      default:
        return monotoneX;
    }
  }
  renderChart() {
    var _a, _b;
    if (!this.parsedData.length) {
      return x`<div class="no-data"><slot>No data available</slot></div>`;
    }
    const xScale = time().domain([this.parsedData[0].date, this.parsedData[this.parsedData.length - 1].date]).range([0, 100]);
    const yScale = linear().domain([0, (_a = max(this.parsedData, (d) => d.value)) != null ? _a : 0]).range([100, 0]);
    const line = line_default().x((d) => xScale(d.date)).y((d) => yScale(d.value)).curve(this.getCurveFunction());
    const area = area_default().x((d) => xScale(d.date)).y0(yScale(0)).y1((d) => yScale(d.value)).curve(this.getCurveFunction());
    const areaPath = (_b = area(this.parsedData)) != null ? _b : void 0;
    const linePath = line(this.parsedData);
    if (!linePath) {
      return x`<div class="no-data"><slot>No data available</slot></div>`;
    }
    const xAxisLabels = this.parsedData.map((day, i) => {
      if (i % 6 !== 0 || i === 0 || i >= this.parsedData.length - 3) return null;
      return {
        value: day.date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        position: xScale(day.date)
      };
    }).filter(Boolean);
    const yAxisLabels = yScale.ticks(8).map(yScale.tickFormat(8, "d")).map((value, i) => {
      if (i < 1) return null;
      return {
        value,
        position: yScale(+value)
      };
    }).filter(Boolean);
    return x`
      <div class="chart-container">
        <!-- Chart area -->
        <svg
          part="svg"
          viewBox="0 0 100 100"
          class="chart-svg"
          preserveAspectRatio="none"
        >
          <!-- Gradient definition -->
          <defs>
            <linearGradient id="area-gradient-${this.id || "default"}" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stop-color="var(--area-gradient-start, rgba(234, 179, 8, 0.2))"
              />
              <stop
                offset="100%"
                stop-color="var(--area-gradient-end, rgba(234, 179, 8, 0.02))"
              />
            </linearGradient>
          </defs>

          <!-- Area -->
          <path 
            part="area"
            class="area"
            d="${areaPath}" 
            fill="url(#area-gradient-${this.id || "default"})" 
          />

          <!-- Line -->
          <path
            part="line"
            class="line"
            d="${linePath}"
            fill="none"
            stroke="var(--line-stroke, #eab308)"
            stroke-width="1.5"
            vector-effect="non-scaling-stroke"
          />
        </svg>

        <!-- X axis labels -->
        ${xAxisLabels.map(
      (label) => label ? x`
            <div
              class="x-axis-label"
              style="left: ${label.position}%; top: 90%;"
            >
              ${label.value}
            </div>
          ` : ""
    )}

        <!-- Y axis labels -->
        ${yAxisLabels.map(
      (label) => label ? x`
            <div
              class="y-axis-label"
              style="top: ${label.position}%; right: 3%;"
            >
              ${label.value}
            </div>
          ` : ""
    )}
      </div>
    `;
  }
  render() {
    const containerStyles = {
      width: `${this.width}px`,
      height: `${this.height}px`
    };
    return x`
      <div part="base" class="area-chart" style=${o(containerStyles)}>
        ${this.renderChart()}
      </div>
    `;
  }
};
NuAreaChart.styles = [component_styles_default, area_chart_styles_default];
__decorateClass([
  e("svg")
], NuAreaChart.prototype, "svg", 2);
__decorateClass([
  n({ type: String })
], NuAreaChart.prototype, "data", 2);
__decorateClass([
  n({ type: Number })
], NuAreaChart.prototype, "width", 2);
__decorateClass([
  n({ type: Number })
], NuAreaChart.prototype, "height", 2);
__decorateClass([
  n({ type: Object })
], NuAreaChart.prototype, "margin", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-grid" })
], NuAreaChart.prototype, "showGrid", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-axes" })
], NuAreaChart.prototype, "showAxes", 2);
__decorateClass([
  n({ type: String })
], NuAreaChart.prototype, "curve", 2);
__decorateClass([
  n({ type: Boolean, attribute: "animate-chart" })
], NuAreaChart.prototype, "animateChart", 2);
__decorateClass([
  r()
], NuAreaChart.prototype, "parsedData", 2);
__decorateClass([
  watch("data")
], NuAreaChart.prototype, "handleDataChange", 1);

export {
  NuAreaChart
};
