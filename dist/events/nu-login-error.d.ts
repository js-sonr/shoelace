export type NuLoginErrorEvent = CustomEvent<{
    error: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-login-error': NuLoginErrorEvent;
    }
}
