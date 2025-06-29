import { css } from 'lit';

export default css`
  :host {
    display: block;
    --slice-color-1: #7e4cfe;
    --slice-color-2: #895cfc;
    --slice-color-3: #956bff;
    --slice-color-4: #a37fff;
    --slice-color-5: #b291fd;
    --slice-color-6: #b597ff;
    --slice-stroke: rgba(255, 255, 255, 0.2);
    --slice-stroke-width: 10;
    --label-color: #eee;
    --label-size: 14px;
    --center-text-color: #71717a;
    --center-value-color: #000;
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
    font-size: 1.125rem;
    color: var(--center-text-color);
    margin-bottom: 0.25rem;
  }

  .center-value {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--center-value-color);
    transition: color 0.3s ease;
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
    transition: transform 0.2s ease, filter 0.2s ease;
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
    --slice-stroke: rgba(255, 255, 255, 0.1);
    --label-color: #f4f4f5;
    --center-text-color: #a1a1aa;
    --center-value-color: #f4f4f5;
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
      font-size: 0.875rem;
    }
    
    .center-value {
      font-size: 1.5rem;
    }
    
    --label-size: 12px;
  }

  @container (min-width: 400px) {
    .center-label {
      font-size: 1.25rem;
    }
    
    .center-value {
      font-size: 3rem;
    }
    
    --label-size: 16px;
  }
`;
