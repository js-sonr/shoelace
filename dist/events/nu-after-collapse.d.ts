export type NuAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-after-collapse': NuAfterCollapseEvent;
    }
}
