import {
  candle_chart_styles_default
} from "./chunk.YGYVGY6Z.js";
import {
  linear,
  max,
  min,
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

// src/components/candle-chart/candle-chart.component.ts
var NuCandleChart = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.data = "[]";
    this.width = 600;
    this.height = 400;
    this.margin = { top: 20, right: 30, bottom: 40, left: 60 };
    this.showGrid = true;
    this.showAxes = true;
    this.showVolume = false;
    this.candleWidth = 0.7;
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
          date: typeof item.date === "string" ? new Date(item.date) : item.date instanceof Date ? item.date : /* @__PURE__ */ new Date(),
          open: Number(item.open || 0),
          high: Number(item.high || 0),
          low: Number(item.low || 0),
          close: Number(item.close || 0),
          volume: typeof item.volume === "number" ? item.volume : void 0
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
  renderChart() {
    if (!this.parsedData.length) {
      return x`<div class="no-data"><slot>No data available</slot></div>`;
    }
    const innerWidth = this.width - this.margin.left - this.margin.right;
    const innerHeight = this.height - this.margin.top - this.margin.bottom;
    const volumeHeight = this.showVolume ? innerHeight * 0.2 : 0;
    const priceHeight = innerHeight - volumeHeight;
    const allPrices = this.parsedData.flatMap((d) => [d.open, d.high, d.low, d.close]);
    const minPrice = min(allPrices) || 0;
    const maxPrice = max(allPrices) || 0;
    const priceRange = maxPrice - minPrice;
    const pricePadding = priceRange * 0.1;
    const xScale = time().domain([
      this.parsedData[0].date,
      this.parsedData[this.parsedData.length - 1].date
    ]).range([0, innerWidth]);
    const yScale = linear().domain([minPrice - pricePadding, maxPrice + pricePadding]).range([priceHeight, 0]);
    const volumeScale = this.showVolume ? linear().domain([0, max(this.parsedData.map((d) => d.volume || 0)) || 0]).range([innerHeight, priceHeight + 10]) : null;
    const candlePixelWidth = Math.max(2, innerWidth / this.parsedData.length * this.candleWidth);
    const yTicks = yScale.ticks(8);
    const xTicks = xScale.ticks(Math.min(this.parsedData.length, 10));
    const xAxisLabels = xTicks.map((tick) => ({
      value: tick.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      position: xScale(tick) / innerWidth * 100
    }));
    const yAxisLabels = yTicks.map((tick) => ({
      value: tick.toFixed(2),
      position: yScale(tick) / priceHeight * 100
    }));
    return x`
      <div class="chart-container">
        <!-- Y axis -->
        <div class="y-axis">
          ${yAxisLabels.map((label) => x`
            <div
              class="y-axis-label"
              style="top: ${label.position}%;"
            >
              $${label.value}
            </div>
          `)}
        </div>

        <!-- Chart area -->
        <div class="chart-area">
          <svg
            part="svg"
            viewBox="0 0 ${innerWidth} ${innerHeight}"
            class="chart-svg"
            preserveAspectRatio="none"
          >
            ${this.showGrid ? b`
              <!-- Horizontal grid lines -->
              ${yTicks.map((tick) => b`
                <line
                  part="grid"
                  class="grid-line"
                  x1="0"
                  y1="${yScale(tick)}"
                  x2="${innerWidth}"
                  y2="${yScale(tick)}"
                  stroke="var(--grid-color, #e4e4e7)"
                  stroke-width="1"
                  opacity="0.3"
                />
              `)}
              <!-- Vertical grid lines -->
              ${xTicks.map((tick) => b`
                <line
                  part="grid"
                  class="grid-line"
                  x1="${xScale(tick)}"
                  y1="0"
                  x2="${xScale(tick)}"
                  y2="${priceHeight}"
                  stroke="var(--grid-color, #e4e4e7)"
                  stroke-width="1"
                  opacity="0.3"
                />
              `)}
            ` : ""}

            <!-- Volume bars -->
            ${this.showVolume && volumeScale ? this.parsedData.map((d) => {
      if (!d.volume) return "";
      const x2 = xScale(d.date);
      const isBullish = d.close >= d.open;
      return b`
                <rect
                  part="volume"
                  class="volume-bar ${isBullish ? "bullish" : "bearish"}"
                  x="${x2 - candlePixelWidth / 2}"
                  y="${volumeScale(d.volume)}"
                  width="${candlePixelWidth}"
                  height="${innerHeight - volumeScale(d.volume)}"
                  fill="${isBullish ? "var(--bullish-color, #22c55e)" : "var(--bearish-color, #ef4444)"}"
                  opacity="0.3"
                />
              `;
    }) : ""}

            <!-- Candlesticks -->
            ${this.parsedData.map((d, i) => {
      const x2 = xScale(d.date);
      const isBullish = d.close >= d.open;
      const bodyTop = yScale(Math.max(d.open, d.close));
      const bodyBottom = yScale(Math.min(d.open, d.close));
      const bodyHeight = bodyBottom - bodyTop;
      const color = isBullish ? "var(--bullish-color, #22c55e)" : "var(--bearish-color, #ef4444)";
      return b`
                <g 
                  class="candle ${isBullish ? "bullish" : "bearish"}"
                  @click=${() => this.handleCandleClick(d, i)}
                  @mouseenter=${() => this.handleCandleHover(d, i)}
                >
                  <!-- High-Low wick -->
                  <line
                    part="wick"
                    class="wick"
                    x1="${x2}"
                    y1="${yScale(d.high)}"
                    x2="${x2}"
                    y2="${yScale(d.low)}"
                    stroke="${color}"
                    stroke-width="2"
                  />
                  
                  <!-- Open-Close body -->
                  <rect
                    part="body"
                    class="body"
                    x="${x2 - candlePixelWidth / 2}"
                    y="${bodyTop}"
                    width="${candlePixelWidth}"
                    height="${Math.max(1, bodyHeight)}"
                    fill="${isBullish ? color : color}"
                    stroke="${color}"
                    stroke-width="1"
                    opacity="${isBullish ? 0.8 : 1}"
                  />
                </g>
              `;
    })}
          </svg>

          <!-- X axis labels -->
          <div class="x-axis">
            ${xAxisLabels.map((label) => x`
              <div
                class="x-axis-label"
                style="left: ${label.position}%; transform: translateX(-50%);"
              >
                ${label.value}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
  handleCandleClick(d, index) {
    this.emit("nu-candle-click", {
      detail: {
        data: d,
        index,
        isBullish: d.close >= d.open,
        priceChange: d.close - d.open,
        percentChange: (d.close - d.open) / d.open * 100
      }
    });
  }
  handleCandleHover(d, index) {
    this.emit("nu-candle-hover", {
      detail: {
        data: d,
        index,
        isBullish: d.close >= d.open,
        priceChange: d.close - d.open,
        percentChange: (d.close - d.open) / d.open * 100
      }
    });
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
      <div part="base" class="candle-chart" style=${o(containerStyles)}>
        ${this.renderChart()}
      </div>
    `;
  }
};
NuCandleChart.styles = [component_styles_default, candle_chart_styles_default];
__decorateClass([
  e("svg")
], NuCandleChart.prototype, "svg", 2);
__decorateClass([
  n({ type: String })
], NuCandleChart.prototype, "data", 2);
__decorateClass([
  n({ type: Number })
], NuCandleChart.prototype, "width", 2);
__decorateClass([
  n({ type: Number })
], NuCandleChart.prototype, "height", 2);
__decorateClass([
  n({ type: Object })
], NuCandleChart.prototype, "margin", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-grid" })
], NuCandleChart.prototype, "showGrid", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-axes" })
], NuCandleChart.prototype, "showAxes", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-volume" })
], NuCandleChart.prototype, "showVolume", 2);
__decorateClass([
  n({ type: Number, attribute: "candle-width" })
], NuCandleChart.prototype, "candleWidth", 2);
__decorateClass([
  n({ type: Boolean, attribute: "animate-chart" })
], NuCandleChart.prototype, "animateChart", 2);
__decorateClass([
  r()
], NuCandleChart.prototype, "parsedData", 2);
__decorateClass([
  watch("data")
], NuCandleChart.prototype, "handleDataChange", 1);

export {
  NuCandleChart
};
