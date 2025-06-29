export type NuDataPointClickEvent = CustomEvent<{
    data: unknown;
    index: number;
    [key: string]: unknown;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-data-point-click': NuDataPointClickEvent;
    }
}
