export type NuItemSelectEvent = CustomEvent<{
    itemId?: string;
    selectedItems?: string[];
    selected?: boolean;
    type?: string;
    title?: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-item-select': NuItemSelectEvent;
    }
}
