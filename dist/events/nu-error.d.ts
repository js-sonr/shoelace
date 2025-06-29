export type NuErrorEvent = CustomEvent<{
    status?: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-error': NuErrorEvent;
    }
}
