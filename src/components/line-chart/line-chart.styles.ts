import { css } from 'lit';

export default css`
  :host {
    display: block;
    --line-stroke-1: #a855f7;
    --line-stroke-2: #ec4899;
    --line-stroke-3: #06b6d4;
    --dot-fill-1: #c084fc;
    --dot-fill-2: #f0abfc;
    --dot-fill-3: #67e8f9;
    --grid-color: #e4e4e7;
    --axis-color: #71717a;
    --axis-label-color: #71717a;
    --axis-label-size: 0.75rem;
  }

  .line-chart {
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
    --grid-color: #3f3f46;
    --axis-color: #a1a1aa;
    --axis-label-color: #a1a1aa;
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
