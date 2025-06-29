import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/area-chart/area-chart.styles.ts
var area_chart_styles_default = i`
  :host {
    display: block;
    --area-gradient-start: rgba(234, 179, 8, 0.2);
    --area-gradient-end: rgba(234, 179, 8, 0.02);
    --line-stroke: #eab308;
    --axis-label-color: #71717a;
    --axis-label-size: 0.75rem;
  }

  .area-chart {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .chart-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: visible;
  }

  .chart-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--axis-label-color);
    font-size: var(--axis-label-size);
  }

  .x-axis-label {
    position: absolute;
    font-size: var(--axis-label-size);
    color: var(--axis-label-color);
    transform: translateX(-50%);
    white-space: nowrap;
  }

  .y-axis-label {
    position: absolute;
    font-size: var(--axis-label-size);
    color: var(--axis-label-color);
    transform: translateY(-50%);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  /* Dark theme support */
  :host([data-theme='dark']) {
    --area-gradient-start: rgba(234, 179, 8, 0.2);
    --area-gradient-end: rgba(234, 179, 8, 0.02);
    --line-stroke: #ca8a04;
    --axis-label-color: #a1a1aa;
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    --line-stroke: currentColor;
    --axis-label-color: currentColor;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .area,
    .line {
      transition: none;
    }
  }
`;

export {
  area_chart_styles_default
};
