import {
  pie_chart_styles_default
} from "./chunk.44S7JDBP.js";
import {
  arc_default,
  pie_default
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

// src/components/pie-chart/pie-chart.component.ts
var NuPieChart = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.data = "[]";
    this.size = 300;
    this.innerRadius = 0;
    this.gap = 0.01;
    this.cornerRadius = 12;
    this.showLabels = true;
    this.showValues = true;
    this.minLabelAngle = 20;
    this.centerText = "";
    this.centerValue = "";
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
          name: String(item.name || item.key || item.label || ""),
          value: Number(item.value || 0),
          color: typeof item.color === "string" ? item.color : void 0
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
  getDefaultColors() {
    return [
      "var(--slice-color-1, #7e4cfe)",
      "var(--slice-color-2, #895cfc)",
      "var(--slice-color-3, #956bff)",
      "var(--slice-color-4, #a37fff)",
      "var(--slice-color-5, #b291fd)",
      "var(--slice-color-6, #b597ff)"
    ];
  }
  computeAngle(d) {
    return (d.endAngle - d.startAngle) * 180 / Math.PI;
  }
  renderChart() {
    if (!this.parsedData.length) {
      return x`<div class="no-data"><slot>No data available</slot></div>`;
    }
    const radius = this.size / 2 - 20;
    const actualInnerRadius = this.innerRadius ? radius * this.innerRadius : 0;
    const lightStrokeEffect = 10;
    const pieLayout = pie_default().value((d) => d.value).padAngle(this.gap);
    const arcGenerator = arc_default().innerRadius(actualInnerRadius).outerRadius(radius).cornerRadius(this.cornerRadius);
    const arcClip = arc_default().innerRadius(actualInnerRadius + lightStrokeEffect / 2).outerRadius(radius).cornerRadius(this.cornerRadius);
    const labelRadius = radius * 0.825;
    const arcLabel = arc_default().innerRadius(labelRadius).outerRadius(labelRadius);
    const arcs = pieLayout(this.parsedData);
    const colors = this.getDefaultColors();
    const total = this.parsedData.reduce((sum, d) => sum + d.value, 0);
    return b`
      <defs>
        ${arcs.map((d, i) => b`
          <clipPath id="pie-clip-${this.id || "default"}-${i}">
            <path d="${arcClip(d) || ""}" />
          </clipPath>
          <linearGradient id="pie-gradient-${this.id || "default"}-${i}">
            <stop offset="55%" stop-color="${d.data.color || colors[i % colors.length]}" stop-opacity="0.95" />
          </linearGradient>
        `)}
      </defs>

      <!-- Slices -->
      ${arcs.map((d, i) => {
      const angle = this.computeAngle(d);
      const centroid = arcLabel.centroid(d);
      if (!centroid) return "";
      if (d.endAngle > Math.PI) {
        centroid[0] += 10;
      } else {
        centroid[0] -= 20;
      }
      return b`
          <g>
            <g clip-path="url(#pie-clip-${this.id || "default"}-${i})">
              <path
                part="slice"
                class="slice"
                fill="url(#pie-gradient-${this.id || "default"}-${i})"
                stroke="var(--slice-stroke, rgba(255, 255, 255, 0.2))"
                stroke-width="${lightStrokeEffect}"
                d="${arcGenerator(d) || ""}"
                @click=${() => this.handleSliceClick(d, i)}
                @mouseenter=${() => this.handleSliceHover(d, i)}
              />
            </g>

            ${this.showLabels ? b`
              <g opacity="${angle > this.minLabelAngle ? 1 : 0}">
                <text 
                  part="label"
                  class="label"
                  transform="translate(${centroid})" 
                  text-anchor="middle" 
                  font-size="var(--label-size, 14)"
                  fill="var(--label-color, #eee)"
                >
                  <tspan y="-0.4em" font-weight="600">
                    ${d.data.name}
                  </tspan>
                  ${this.showValues && angle > this.minLabelAngle ? b`
                    <tspan x="0" y="0.7em" fill-opacity="0.7">
                      ${(d.data.value / total * 100).toFixed(1)}%
                    </tspan>
                  ` : ""}
                </text>
              </g>
            ` : ""}
          </g>
        `;
    })}
    `;
  }
  handleSliceClick(d, index) {
    this.emit("nu-slice-click", {
      detail: {
        data: d.data,
        index,
        value: d.value,
        startAngle: d.startAngle,
        endAngle: d.endAngle
      }
    });
  }
  handleSliceHover(d, index) {
    this.emit("nu-slice-hover", {
      detail: {
        data: d.data,
        index,
        value: d.value,
        startAngle: d.startAngle,
        endAngle: d.endAngle
      }
    });
  }
  render() {
    const containerStyles = {
      width: `${this.size}px`,
      height: `${this.size}px`
    };
    const isDonut = this.innerRadius > 0;
    const centerContent = this.centerText || this.centerValue || this.querySelector('[slot="center"]');
    return x`
      <div part="base" class="pie-chart" style=${o(containerStyles)}>
        <div class="chart-container">
          ${isDonut && centerContent ? x`
            <div part="center" class="center-content">
              ${this.centerText ? x`
                <div class="center-label">${this.centerText}</div>
              ` : ""}
              ${this.centerValue ? x`
                <div class="center-value">${this.centerValue}</div>
              ` : ""}
              <slot name="center"></slot>
            </div>
          ` : ""}
          
          <svg
            part="svg"
            viewBox="${-this.size / 2} ${-this.size / 2} ${this.size} ${this.size}"
            class="chart-svg"
          >
            ${this.renderChart()}
          </svg>
        </div>
      </div>
    `;
  }
};
NuPieChart.styles = [component_styles_default, pie_chart_styles_default];
__decorateClass([
  e("svg")
], NuPieChart.prototype, "svg", 2);
__decorateClass([
  n({ type: String })
], NuPieChart.prototype, "data", 2);
__decorateClass([
  n({ type: Number })
], NuPieChart.prototype, "size", 2);
__decorateClass([
  n({ type: Number, attribute: "inner-radius" })
], NuPieChart.prototype, "innerRadius", 2);
__decorateClass([
  n({ type: Number })
], NuPieChart.prototype, "gap", 2);
__decorateClass([
  n({ type: Number, attribute: "corner-radius" })
], NuPieChart.prototype, "cornerRadius", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-labels" })
], NuPieChart.prototype, "showLabels", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-values" })
], NuPieChart.prototype, "showValues", 2);
__decorateClass([
  n({ type: Number, attribute: "min-label-angle" })
], NuPieChart.prototype, "minLabelAngle", 2);
__decorateClass([
  n({ attribute: "center-text" })
], NuPieChart.prototype, "centerText", 2);
__decorateClass([
  n({ attribute: "center-value" })
], NuPieChart.prototype, "centerValue", 2);
__decorateClass([
  n({ type: Boolean, attribute: "animate-chart" })
], NuPieChart.prototype, "animateChart", 2);
__decorateClass([
  r()
], NuPieChart.prototype, "parsedData", 2);
__decorateClass([
  watch("data")
], NuPieChart.prototype, "handleDataChange", 1);

export {
  NuPieChart
};
