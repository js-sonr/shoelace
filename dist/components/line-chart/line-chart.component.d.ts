import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
export interface LineChartDataPoint {
    date: string | Date;
    value: number;
}
export interface LineChartSeries {
    id: string;
    data: LineChartDataPoint[];
    color?: string;
    strokeWidth?: number;
    showDots?: boolean;
}
/**
 * @summary Line charts display data as connected points, ideal for showing trends over time.
 * @documentation https://nebulaui.org/components/line-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-data-point-hover - Emitted when hovering over a data point.
 * @event nu-data-point-click - Emitted when clicking a data point.
 * @event nu-line-hover - Emitted when hovering over a line.
 *
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart line - The line path elements.
 * @csspart dot - The data point dots.
 * @csspart grid - The grid lines.
 * @csspart axis - The axis elements.
 *
 * @cssproperty --line-stroke-1 - The stroke color of the first line.
 * @cssproperty --line-stroke-2 - The stroke color of the second line.
 * @cssproperty --line-stroke-3 - The stroke color of the third line.
 * @cssproperty --dot-fill-1 - The fill color of the first line's dots.
 * @cssproperty --dot-fill-2 - The fill color of the second line's dots.
 * @cssproperty --dot-fill-3 - The fill color of the third line's dots.
 * @cssproperty --grid-color - The color of the grid lines.
 * @cssproperty --axis-color - The color of the axis.
 * @cssproperty --axis-label-color - The color of axis labels.
 */
export default class NuLineChart extends NebulaElement {
    static styles: CSSResultGroup;
    svg: SVGElement;
    /** The chart data as JSON string or array of data points/series. */
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
    /** Whether to show dots on data points. */
    showDots: boolean;
    /** The curve type for the lines (linear, monotone, cardinal, etc.). */
    curve: string;
    /** Whether to animate the chart on load. */
    animateChart: boolean;
    private parsedData;
    handleDataChange(): void;
    private parseData;
    connectedCallback(): void;
    private getCurveFunction;
    private renderChart;
    private getDefaultColor;
    private getDefaultDotColor;
    render(): import("lit-html").TemplateResult<1>;
}
