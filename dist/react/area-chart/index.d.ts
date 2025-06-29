import Component from '../../components/area-chart/area-chart.component.js';
import { type EventName } from '@lit/react';
import type { NuDataPointHoverEvent } from '../../events/events.js';
import type { NuDataPointClickEvent } from '../../events/events.js';
export type { NuDataPointHoverEvent } from '../../events/events.js';
export type { NuDataPointClickEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuDataPointHover: EventName<NuDataPointHoverEvent>;
    onNuDataPointClick: EventName<NuDataPointClickEvent>;
}>;
export default reactWrapper;
