export type NuInvalidEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-invalid': NuInvalidEvent;
    }
}
