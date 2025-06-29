import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
export interface PieChartDataPoint {
    name: string;
    value: number;
    color?: string;
}
/**
 * @summary Pie charts display proportional data as circular segments, ideal for showing portfolio allocations and market share.
 * @documentation https://nebulaui.org/components/pie-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-slice-hover - Emitted when hovering over a pie slice.
 * @event nu-slice-click - Emitted when clicking a pie slice.
 *
 * @slot center - Content to display in the center of a donut chart.
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart slice - The pie slice elements.
 * @csspart label - The slice labels.
 * @csspart center - The center content area for donut charts.
 *
 * @cssproperty --slice-color-1 - The color of the first slice.
 * @cssproperty --slice-color-2 - The color of the second slice.
 * @cssproperty --slice-color-3 - The color of the third slice.
 * @cssproperty --slice-color-4 - The color of the fourth slice.
 * @cssproperty --slice-color-5 - The color of the fifth slice.
 * @cssproperty --slice-color-6 - The color of the sixth slice.
 * @cssproperty --slice-stroke - The stroke color around slices.
 * @cssproperty --slice-stroke-width - The stroke width around slices.
 * @cssproperty --label-color - The color of slice labels.
 * @cssproperty --label-size - The font size of slice labels.
 * @cssproperty --center-text-color - The color of center text.
 */
export default class NuPieChart extends NebulaElement {
    static styles: CSSResultGroup;
    svg: SVGElement;
    /** The chart data as JSON string or array of data points. */
    data: string;
    /** The size of the chart in pixels (width and height). */
    size: number;
    /** The inner radius for donut charts (0 for full pie, 0.5-0.8 for donut). */
    innerRadius: number;
    /** The gap between slices in radians. */
    gap: number;
    /** The corner radius for rounded slice corners. */
    cornerRadius: number;
    /** Whether to show slice labels. */
    showLabels: boolean;
    /** Whether to show values in labels. */
    showValues: boolean;
    /** The minimum angle (in degrees) required to show labels. */
    minLabelAngle: number;
    /** Custom center text for donut charts. */
    centerText: string;
    /** Custom center value for donut charts. */
    centerValue: string;
    /** Whether to animate the chart on load. */
    animateChart: boolean;
    private parsedData;
    handleDataChange(): void;
    private parseData;
    connectedCallback(): void;
    private getDefaultColors;
    private computeAngle;
    private renderChart;
    private handleSliceClick;
    private handleSliceHover;
    render(): import("lit-html").TemplateResult<1>;
}
