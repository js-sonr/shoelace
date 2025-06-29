import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
export interface AreaChartDataPoint {
    date: string | Date;
    value: number;
}
/**
 * @summary Area charts visualize data over time with filled areas below the line.
 * @documentation https://nebulaui.org/components/area-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-data-point-hover - Emitted when hovering over a data point.
 * @event nu-data-point-click - Emitted when clicking a data point.
 *
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart area - The area path element.
 * @csspart line - The line path element.
 * @csspart axis - The axis elements.
 * @csspart grid - The grid elements.
 *
 * @cssproperty --area-fill - The fill color of the area.
 * @cssproperty --line-stroke - The stroke color of the line.
 * @cssproperty --grid-color - The color of the grid lines.
 * @cssproperty --axis-color - The color of the axis lines.
 */
export default class NuAreaChart extends NebulaElement {
    static styles: CSSResultGroup;
    svg: SVGElement;
    /** The chart data as JSON string or array of data points. */
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
    /** The curve type for the area (linear, monotone, cardinal, etc.). */
    curve: string;
    /** Whether to animate the chart on load. */
    animateChart: boolean;
    private parsedData;
    handleDataChange(): void;
    private parseData;
    connectedCallback(): void;
    private getCurveFunction;
    private renderChart;
    render(): import("lit-html").TemplateResult<1>;
}
