import {
  i
} from "./chunk.3KZKYYLP.js";

// src/components/candle-chart/candle-chart.styles.ts
var candle_chart_styles_default = i`
  :host {
    display: block;
    --bullish-color: var(--nu-color-success-500);
    --bearish-color: var(--nu-color-danger-500);
    --wick-color: inherit;
    --grid-color: var(--nu-color-neutral-200);
    --axis-color: var(--nu-color-neutral-500);
    --axis-label-color: var(--nu-color-neutral-500);
    --axis-label-size: var(--nu-font-size-x-small);
    --candle-width: 0.7;
    --chart-spacing: var(--nu-spacing-small);
    --chart-border-radius: var(--nu-border-radius-medium);
    --chart-margin: var(--nu-spacing-medium);
  }

  .candle-chart {
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
    font-weight: 500;
  }

  .grid-line {
    color: var(--grid-color);
  }

  /* Candlestick styling */
  .candle {
    cursor: pointer;
    transition: opacity var(--nu-transition-medium) ease;
  }

  .candle:hover {
    opacity: 0.8;
  }

  .candle:hover .wick {
    stroke-width: 3;
  }

  .candle:hover .body {
    stroke-width: 2;
  }

  .wick {
    transition: stroke-width var(--nu-transition-medium) ease;
  }

  .body {
    transition: stroke-width var(--nu-transition-medium) ease, opacity var(--nu-transition-medium) ease;
  }

  /* Bullish (green) candles */
  .candle.bullish .body {
    fill: var(--bullish-color);
    stroke: var(--bullish-color);
    opacity: 0.8;
  }

  .candle.bullish .wick {
    stroke: var(--bullish-color);
  }

  /* Bearish (red) candles */
  .candle.bearish .body {
    fill: var(--bearish-color);
    stroke: var(--bearish-color);
    opacity: 1;
  }

  .candle.bearish .wick {
    stroke: var(--bearish-color);
  }

  /* Volume bars */
  .volume-bar {
    transition: opacity var(--nu-transition-medium) ease;
  }

  .volume-bar:hover {
    opacity: 0.6 !important;
  }

  .volume-bar.bullish {
    fill: var(--bullish-color);
  }

  .volume-bar.bearish {
    fill: var(--bearish-color);
  }

  /* Dark theme support */
  :host([data-theme='dark']) {
    --grid-color: var(--nu-color-neutral-700);
    --axis-color: var(--nu-color-neutral-400);
    --axis-label-color: var(--nu-color-neutral-400);
    --bullish-color: var(--nu-color-success-600);
    --bearish-color: var(--nu-color-danger-600);
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    --bullish-color: var(--nu-color-success-700);
    --bearish-color: var(--nu-color-danger-700);
    --axis-label-color: currentColor;
    --grid-color: currentColor;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .candle,
    .wick,
    .body,
    .volume-bar {
      transition: none;
    }
  }

  /* Responsive adjustments */
  @container (max-width: 400px) {
    --axis-label-size: var(--nu-font-size-2x-small);
  }

  @container (min-width: 800px) {
    --axis-label-size: var(--nu-font-size-small);
  }
`;

export {
  candle_chart_styles_default
};
