export type NuCollapseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-collapse': NuCollapseEvent;
    }
}
