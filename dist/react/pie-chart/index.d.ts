import Component from '../../components/pie-chart/pie-chart.component.js';
import { type EventName } from '@lit/react';
import type { NuSliceHoverEvent } from '../../events/events.js';
import type { NuSliceClickEvent } from '../../events/events.js';
export type { NuSliceHoverEvent } from '../../events/events.js';
export type { NuSliceClickEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuSliceHover: EventName<NuSliceHoverEvent>;
    onNuSliceClick: EventName<NuSliceClickEvent>;
}>;
export default reactWrapper;
