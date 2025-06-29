export type NuFocusEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-focus': NuFocusEvent;
    }
}
