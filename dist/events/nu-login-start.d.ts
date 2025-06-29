export type NuLoginStartEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-login-start': NuLoginStartEvent;
    }
}
