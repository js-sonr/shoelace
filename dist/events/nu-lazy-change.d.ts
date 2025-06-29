export type NuLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-lazy-change': NuLazyChangeEvent;
    }
}
