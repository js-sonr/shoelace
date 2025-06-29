import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/line-chart/line-chart.styles.ts
var line_chart_styles_default = i`
  :host {
    display: block;
    --line-stroke-1: var(--nu-color-purple-500);
    --line-stroke-2: var(--nu-color-pink-500);
    --line-stroke-3: var(--nu-color-cyan-500);
    --dot-fill-1: var(--nu-color-purple-400);
    --dot-fill-2: var(--nu-color-pink-400);
    --dot-fill-3: var(--nu-color-cyan-400);
    --grid-color: var(--nu-color-neutral-200);
    --axis-color: var(--nu-color-neutral-500);
    --axis-label-color: var(--nu-color-neutral-500);
    --axis-label-size: var(--nu-font-size-x-small);
    --chart-spacing: var(--nu-spacing-small);
    --chart-border-radius: var(--nu-border-radius-medium);
    --chart-margin: var(--nu-spacing-medium);
  }

  .line-chart {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .chart-container {
    position: relative;
    height: calc(100% - var(--chart-margin) - var(--chart-margin));
    width: calc(100% - var(--chart-margin) - var(--chart-margin));
    margin: var(--chart-margin);
    padding: var(--chart-spacing);
    border-radius: var(--chart-border-radius);
  }

  .y-axis {
    position: absolute;
    inset: 0;
    height: 100%;
    width: var(--chart-margin);
    transform: translateX(calc(-1 * var(--chart-margin)));
    overflow: visible;
  }

  .chart-area {
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

  .x-axis {
    position: relative;
    transform: translateY(var(--nu-spacing-x-small));
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
    top: 100%;
    font-size: var(--axis-label-size);
    color: var(--axis-label-color);
    white-space: nowrap;
  }

  .y-axis-label {
    position: absolute;
    left: 0%;
    font-size: var(--axis-label-size);
    color: var(--axis-label-color);
    transform: translateY(-50%);
    font-variant-numeric: tabular-nums;
    width: 100%;
    text-align: right;
    padding-right: var(--nu-spacing-x-small);
    white-space: nowrap;
  }

  .grid-line {
    color: var(--grid-color);
  }

  /* Line and dot styling */
  .line {
    transition: stroke-width 0.2s ease;
  }

  .line:hover {
    stroke-width: 3 !important;
  }

  .dot {
    transition: stroke-width 0.2s ease;
    cursor: pointer;
  }

  .dot:hover {
    stroke-width: 10 !important;
  }

  /* Dark theme support */
  :host([data-theme='dark']) {
    --grid-color: var(--nu-color-neutral-700);
    --axis-color: var(--nu-color-neutral-400);
    --axis-label-color: var(--nu-color-neutral-400);
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    --line-stroke-1: currentColor;
    --line-stroke-2: currentColor;
    --line-stroke-3: currentColor;
    --axis-label-color: currentColor;
    --grid-color: currentColor;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .line,
    .dot {
      transition: none;
    }
  }
`;

export {
  line_chart_styles_default
};
