import Component from '../../components/line-chart/line-chart.component.js';
import { type EventName } from '@lit/react';
import type { NuDataPointHoverEvent } from '../../events/events.js';
import type { NuDataPointClickEvent } from '../../events/events.js';
import type { NuLineHoverEvent } from '../../events/events.js';
export type { NuDataPointHoverEvent } from '../../events/events.js';
export type { NuDataPointClickEvent } from '../../events/events.js';
export type { NuLineHoverEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuDataPointHover: EventName<NuDataPointHoverEvent>;
    onNuDataPointClick: EventName<NuDataPointClickEvent>;
    onNuLineHover: EventName<NuLineHoverEvent>;
}>;
export default reactWrapper;
