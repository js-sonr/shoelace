import { css } from 'lit';

export default css`
  :host {
    display: block;
    --area-gradient-start: hsl(var(--nu-color-warning-500) / 0.2);
    --area-gradient-end: hsl(var(--nu-color-warning-500) / 0.02);
    --line-stroke: var(--nu-color-warning-500);
    --axis-label-color: var(--nu-color-neutral-500);
    --axis-label-size: var(--nu-font-size-x-small);
    --chart-spacing: var(--nu-spacing-small);
    --chart-border-radius: var(--nu-border-radius-medium);
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
    padding: var(--chart-spacing);
    border-radius: var(--chart-border-radius);
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
    --area-gradient-start: hsl(var(--nu-color-warning-600) / 0.2);
    --area-gradient-end: hsl(var(--nu-color-warning-600) / 0.02);
    --line-stroke: var(--nu-color-warning-600);
    --axis-label-color: var(--nu-color-neutral-400);
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
