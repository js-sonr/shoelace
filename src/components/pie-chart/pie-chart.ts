import NuPieChart from './pie-chart.component.js';

export * from './pie-chart.component.js';
export default NuPieChart;

NuPieChart.define('nu-pie-chart');

declare global {
  interface HTMLElementTagNameMap {
    'nu-pie-chart': NuPieChart;
  }
}
