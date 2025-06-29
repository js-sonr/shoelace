import {
  line_chart_styles_default
} from "./chunk.GJUNFLP3.js";
import {
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
  b,
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/line-chart/line-chart.component.ts
var NuLineChart = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.data = "[]";
    this.width = 400;
    this.height = 300;
    this.margin = { top: 0, right: 8, bottom: 25, left: 25 };
    this.showGrid = true;
    this.showAxes = true;
    this.showDots = true;
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
      if (Array.isArray(rawData) && rawData.length > 0) {
        const firstItem = rawData[0];
        if ("id" in firstItem || "data" in firstItem) {
          this.parsedData = rawData.map((series, index) => {
            const seriesItem = series;
            const seriesData = Array.isArray(seriesItem.data) ? seriesItem.data : [];
            return {
              id: String(seriesItem.id || `series-${index}`),
              data: seriesData.map((d) => {
                const item = d;
                return {
                  date: typeof item.date === "string" ? new Date(item.date) : item.date instanceof Date ? item.date : /* @__PURE__ */ new Date(),
                  value: Number(item.value || 0)
                };
              }),
              color: typeof seriesItem.color === "string" ? seriesItem.color : void 0,
              strokeWidth: typeof seriesItem.strokeWidth === "number" ? seriesItem.strokeWidth : 2,
              showDots: typeof seriesItem.showDots === "boolean" ? seriesItem.showDots : this.showDots
            };
          });
        } else {
          this.parsedData = [{
            id: "default",
            data: rawData.map((d) => {
              const item = d;
              return {
                date: typeof item.date === "string" ? new Date(item.date) : item.date instanceof Date ? item.date : new Date(String(item.key || "")),
                value: Number(item.value || 0)
              };
            }),
            showDots: this.showDots
          }];
        }
      }
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
    var _a;
    if (!this.parsedData.length || !this.parsedData[0].data.length) {
      return x`<div class="no-data"><slot>No data available</slot></div>`;
    }
    const allData = this.parsedData.flatMap((series) => series.data);
    const allDates = allData.map((d) => d.date);
    const allValues = allData.map((d) => d.value);
    const xScale = time().domain([Math.min(...allDates.map((d) => d.getTime())), Math.max(...allDates.map((d) => d.getTime()))]).range([0, 100]);
    const yScale = linear().domain([0, (_a = max(allValues)) != null ? _a : 0]).range([100, 0]);
    const line = line_default().x((d) => xScale(d.date)).y((d) => yScale(d.value)).curve(this.getCurveFunction());
    const yTicks = yScale.ticks(8);
    const tickFormatter = yScale.tickFormat(8, "d");
    const referenceData = this.parsedData[0].data;
    const maxValue = Math.max(...referenceData.map((d) => d.value));
    const xAxisLabels = referenceData.map((day, i) => {
      const isFirst = i === 0;
      const isLast = i === referenceData.length - 1;
      const isMax = day.value === maxValue;
      if (!isFirst && !isLast && !isMax) return null;
      let transform = "translateX(-50%)";
      if (isFirst) transform = "translateX(0%)";
      if (isLast) transform = "translateX(-100%)";
      return {
        value: day.date.toLocaleDateString("en-US", { month: "numeric", day: "numeric" }),
        position: xScale(day.date),
        transform
      };
    }).filter(Boolean);
    return x`
      <div class="chart-container">
        <!-- Y axis -->
        <div class="y-axis">
          ${yTicks.map((tick) => x`
            <div
              class="y-axis-label"
              style="top: ${yScale(tick)}%;"
            >
              ${tickFormatter(tick)}
            </div>
          `)}
        </div>

        <!-- Chart area -->
        <div class="chart-area">
          <svg
            part="svg"
            viewBox="0 0 100 100"
            class="chart-svg"
            preserveAspectRatio="none"
          >
            ${this.showGrid ? b`
              <!-- Grid lines -->
              ${yTicks.map((tick) => b`
                <g transform="translate(0,${yScale(tick)})" class="grid-line">
                  <line
                    part="grid"
                    x1="0"
                    x2="100"
                    stroke="var(--grid-color, #e4e4e7)"
                    stroke-dasharray="6,5"
                    stroke-width="0.5"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              `)}
            ` : ""}

            <!-- Lines -->
            ${this.parsedData.map((series, seriesIndex) => {
      const linePath = line(series.data);
      if (!linePath) return "";
      const lineColor = series.color || `var(--line-stroke-${seriesIndex + 1}, ${this.getDefaultColor(seriesIndex)})`;
      const dotColor = `var(--dot-fill-${seriesIndex + 1}, ${this.getDefaultDotColor(seriesIndex)})`;
      return b`
                <!-- Line -->
                <path
                  part="line"
                  class="line line-${seriesIndex}"
                  d="${linePath}"
                  fill="none"
                  stroke="${lineColor}"
                  stroke-width="${series.strokeWidth || 2}"
                  vector-effect="non-scaling-stroke"
                />

                <!-- Dots -->
                ${series.showDots !== false ? series.data.map((point) => b`
                  <path
                    part="dot"
                    class="dot dot-${seriesIndex}"
                    d="M ${xScale(point.date)} ${yScale(point.value)} l 0.0001 0"
                    vector-effect="non-scaling-stroke"
                    stroke-width="7"
                    stroke-linecap="round"
                    fill="none"
                    stroke="${dotColor}"
                  />
                `) : ""}
              `;
    })}
          </svg>

          <!-- X axis labels -->
          <div class="x-axis">
            ${xAxisLabels.map(
      (label) => label ? x`
                <div
                  class="x-axis-label"
                  style="left: ${label.position}%; transform: ${label.transform};"
                >
                  ${label.value}
                </div>
              ` : ""
    )}
          </div>
        </div>
      </div>
    `;
  }
  getDefaultColor(index) {
    const colors = ["#a855f7", "#ec4899", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"];
    return colors[index % colors.length];
  }
  getDefaultDotColor(index) {
    const colors = ["#c084fc", "#f0abfc", "#67e8f9", "#6ee7b7", "#fbbf24", "#f87171"];
    return colors[index % colors.length];
  }
  render() {
    const containerStyles = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      "--margin-top": `${this.margin.top}px`,
      "--margin-right": `${this.margin.right}px`,
      "--margin-bottom": `${this.margin.bottom}px`,
      "--margin-left": `${this.margin.left}px`
    };
    return x`
      <div part="base" class="line-chart" style=${o(containerStyles)}>
        ${this.renderChart()}
      </div>
    `;
  }
};
NuLineChart.styles = [component_styles_default, line_chart_styles_default];
__decorateClass([
  e("svg")
], NuLineChart.prototype, "svg", 2);
__decorateClass([
  n({ type: String })
], NuLineChart.prototype, "data", 2);
__decorateClass([
  n({ type: Number })
], NuLineChart.prototype, "width", 2);
__decorateClass([
  n({ type: Number })
], NuLineChart.prototype, "height", 2);
__decorateClass([
  n({ type: Object })
], NuLineChart.prototype, "margin", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-grid" })
], NuLineChart.prototype, "showGrid", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-axes" })
], NuLineChart.prototype, "showAxes", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-dots" })
], NuLineChart.prototype, "showDots", 2);
__decorateClass([
  n({ type: String })
], NuLineChart.prototype, "curve", 2);
__decorateClass([
  n({ type: Boolean, attribute: "animate-chart" })
], NuLineChart.prototype, "animateChart", 2);
__decorateClass([
  r()
], NuLineChart.prototype, "parsedData", 2);
__decorateClass([
  watch("data")
], NuLineChart.prototype, "handleDataChange", 1);

export {
  NuLineChart
};
