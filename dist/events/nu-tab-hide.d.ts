export type NuTabHideEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-tab-hide': NuTabHideEvent;
    }
}
