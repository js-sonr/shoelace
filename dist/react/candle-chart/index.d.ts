import Component from '../../components/candle-chart/candle-chart.component.js';
import { type EventName } from '@lit/react';
import type { NuCandleHoverEvent } from '../../events/events.js';
import type { NuCandleClickEvent } from '../../events/events.js';
export type { NuCandleHoverEvent } from '../../events/events.js';
export type { NuCandleClickEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuCandleHover: EventName<NuCandleHoverEvent>;
    onNuCandleClick: EventName<NuCandleClickEvent>;
}>;
export default reactWrapper;
