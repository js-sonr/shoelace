export type NuAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-after-expand': NuAfterExpandEvent;
    }
}
