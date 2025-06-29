export type NuTabShowEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-tab-show': NuTabShowEvent;
    }
}
