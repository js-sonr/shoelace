export type NuCandleHoverEvent = CustomEvent<{
    data: unknown;
    index: number;
    isBullish: boolean;
    priceChange: number;
    percentChange: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-candle-hover': NuCandleHoverEvent;
    }
}
