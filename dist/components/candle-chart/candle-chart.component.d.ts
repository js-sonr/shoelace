import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
export interface CandleChartDataPoint {
    date: string | Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
}
/**
 * @summary Candlestick charts display OHLC (Open, High, Low, Close) financial data with green/red theming.
 * @documentation https://nebulaui.org/components/candle-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-candle-hover - Emitted when hovering over a candlestick.
 * @event nu-candle-click - Emitted when clicking a candlestick.
 *
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart candle - The candlestick elements.
 * @csspart wick - The high-low wick elements.
 * @csspart body - The open-close body elements.
 * @csspart grid - The grid lines.
 * @csspart axis - The axis elements.
 *
 * @cssproperty --bullish-color - The color for bullish (green) candles.
 * @cssproperty --bearish-color - The color for bearish (red) candles.
 * @cssproperty --wick-color - The color of the candle wicks.
 * @cssproperty --grid-color - The color of the grid lines.
 * @cssproperty --axis-color - The color of the axis.
 * @cssproperty --axis-label-color - The color of axis labels.
 * @cssproperty --candle-width - The width of the candle bodies.
 */
export default class NuCandleChart extends NebulaElement {
    static styles: CSSResultGroup;
    svg: SVGElement;
    /** The chart data as JSON string or array of OHLC data points. */
    data: string;
    /** The width of the chart in pixels. */
    width: number;
    /** The height of the chart in pixels. */
    height: number;
    /** The margin around the chart area. */
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /** Whether to show grid lines. */
    showGrid: boolean;
    /** Whether to show axis labels. */
    showAxes: boolean;
    /** Whether to show volume bars. */
    showVolume: boolean;
    /** The width of candle bodies as a percentage (0.1 to 0.9). */
    candleWidth: number;
    /** Whether to animate the chart on load. */
    animateChart: boolean;
    private parsedData;
    handleDataChange(): void;
    private parseData;
    connectedCallback(): void;
    private renderChart;
    private handleCandleClick;
    private handleCandleHover;
    render(): import("lit-html").TemplateResult<1>;
}
