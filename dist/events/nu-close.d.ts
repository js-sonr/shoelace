export type NuCloseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-close': NuCloseEvent;
    }
}
