export type NuCandleClickEvent = CustomEvent<{
  data: unknown;
  index: number;
  isBullish: boolean;
  priceChange: number;
  percentChange: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-candle-click': NuCandleClickEvent;
  }
}