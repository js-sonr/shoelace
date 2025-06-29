export type NuHideEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-hide': NuHideEvent;
    }
}
