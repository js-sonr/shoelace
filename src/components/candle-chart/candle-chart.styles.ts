import { css } from 'lit';

export default css`
  :host {
    display: block;
    --bullish-color: #22c55e;
    --bearish-color: #ef4444;
    --wick-color: inherit;
    --grid-color: #e4e4e7;
    --axis-color: #71717a;
    --axis-label-color: #71717a;
    --axis-label-size: 0.75rem;
    --candle-width: 0.7;
  }

  .candle-chart {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .chart-container {
    position: relative;
    height: calc(100% - var(--margin-top) - var(--margin-bottom));
    width: calc(100% - var(--margin-left) - var(--margin-right));
    margin-top: var(--margin-top);
    margin-left: var(--margin-left);
    margin-right: var(--margin-right);
    margin-bottom: var(--margin-bottom);
  }

  .y-axis {
    position: absolute;
    inset: 0;
    height: 100%;
    width: var(--margin-left);
    transform: translateX(calc(-1 * var(--margin-left)));
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
    transform: translateY(0.5rem);
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
    padding-right: 0.5rem;
    white-space: nowrap;
    font-weight: 500;
  }

  .grid-line {
    color: var(--grid-color);
  }

  /* Candlestick styling */
  .candle {
    cursor: pointer;
    transition: opacity 0.2s ease;
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
    transition: stroke-width 0.2s ease;
  }

  .body {
    transition: stroke-width 0.2s ease, opacity 0.2s ease;
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
    transition: opacity 0.2s ease;
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
    --grid-color: #3f3f46;
    --axis-color: #a1a1aa;
    --axis-label-color: #a1a1aa;
    --bullish-color: #16a34a;
    --bearish-color: #dc2626;
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    --bullish-color: #15803d;
    --bearish-color: #b91c1c;
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
    --axis-label-size: 0.65rem;
  }

  @container (min-width: 800px) {
    --axis-label-size: 0.875rem;
  }
`;
