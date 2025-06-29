import NuAreaChart from './area-chart.component.js';

export * from './area-chart.component.js';
export default NuAreaChart;

NuAreaChart.define('nu-area-chart');

declare global {
  interface HTMLElementTagNameMap {
    'nu-area-chart': NuAreaChart;
  }
}
