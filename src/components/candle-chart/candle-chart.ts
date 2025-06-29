import NuCandleChart from './candle-chart.component.js';

export * from './candle-chart.component.js';
export default NuCandleChart;

NuCandleChart.define('nu-candle-chart');

declare global {
  interface HTMLElementTagNameMap {
    'nu-candle-chart': NuCandleChart;
  }
}
