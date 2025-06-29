export type NuSliceHoverEvent = CustomEvent<{
    data: unknown;
    index: number;
    value: number;
    startAngle: number;
    endAngle: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-slice-hover': NuSliceHoverEvent;
    }
}
