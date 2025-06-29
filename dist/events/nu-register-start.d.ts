export type NuRegisterStartEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-register-start': NuRegisterStartEvent;
    }
}
