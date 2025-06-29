import { css } from 'lit';

export default css`
  :host {
    display: block;
    --slice-color-1: var(--nu-color-purple-500);
    --slice-color-2: var(--nu-color-purple-400);
    --slice-color-3: var(--nu-color-blue-500);
    --slice-color-4: var(--nu-color-blue-400);
    --slice-color-5: var(--nu-color-cyan-500);
    --slice-color-6: var(--nu-color-cyan-400);
    --slice-stroke: hsl(var(--nu-color-neutral-0) / 0.2);
    --slice-stroke-width: 2;
    --label-color: var(--nu-color-neutral-700);
    --label-size: var(--nu-font-size-small);
    --center-text-color: var(--nu-color-neutral-500);
    --center-value-color: var(--nu-color-neutral-900);
    --chart-spacing: var(--nu-spacing-small);
    --chart-border-radius: var(--nu-border-radius-medium);
  }

  .pie-chart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--chart-spacing);
    border-radius: var(--chart-border-radius);
  }

  .chart-svg {
    max-width: 16rem;
    margin: 0 auto;
    overflow: visible;
    width: 100%;
    height: 100%;
  }

  .center-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    pointer-events: none;
  }

  .center-label {
    font-size: var(--nu-font-size-large);
    color: var(--center-text-color);
    margin-bottom: var(--nu-spacing-2x-small);
  }

  .center-value {
    font-size: var(--nu-font-size-2x-large);
    font-weight: var(--nu-font-weight-bold);
    color: var(--center-value-color);
    transition: color var(--nu-transition-fast) ease;
  }

  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--center-text-color);
    font-size: var(--label-size);
  }

  /* Slice interactions */
  .slice {
    cursor: pointer;
    transition: transform var(--nu-transition-medium) ease, filter var(--nu-transition-medium) ease;
  }

  .slice:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  .slice:active {
    transform: scale(0.98);
  }

  /* Label styling */
  .label {
    pointer-events: none;
    user-select: none;
  }

  .label tspan {
    font-family: inherit;
  }

  /* Dark theme support */
  :host([data-theme='dark']) {
    --slice-stroke: hsl(var(--nu-color-neutral-1000) / 0.1);
    --label-color: var(--nu-color-neutral-100);
    --center-text-color: var(--nu-color-neutral-400);
    --center-value-color: var(--nu-color-neutral-100);
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    --slice-stroke: currentColor;
    --label-color: currentColor;
    --center-text-color: currentColor;
    --center-value-color: currentColor;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .slice,
    .center-value {
      transition: none;
    }
  }

  /* Responsive text sizing */
  @container (max-width: 200px) {
    .center-label {
      font-size: var(--nu-font-size-small);
    }
    
    .center-value {
      font-size: var(--nu-font-size-x-large);
    }
    
    --label-size: var(--nu-font-size-x-small);
  }

  @container (min-width: 400px) {
    .center-label {
      font-size: var(--nu-font-size-x-large);
    }
    
    .center-value {
      font-size: var(--nu-font-size-3x-large);
    }
    
    --label-size: var(--nu-font-size-medium);
  }
`;
