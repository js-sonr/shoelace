export type NuInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-initial-focus': NuInitialFocusEvent;
    }
}
