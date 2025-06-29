import NuLineChart from './line-chart.component.js';

export * from './line-chart.component.js';
export default NuLineChart;

NuLineChart.define('nu-line-chart');

declare global {
  interface HTMLElementTagNameMap {
    'nu-line-chart': NuLineChart;
  }
}
