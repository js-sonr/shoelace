export type NuLoadEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-load': NuLoadEvent;
    }
}
