export type NuRegisterErrorEvent = CustomEvent<{
    error: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-register-error': NuRegisterErrorEvent;
    }
}
