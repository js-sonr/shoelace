export type NuSortChangeEvent = CustomEvent<{
    sortBy: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-sort-change': NuSortChangeEvent;
    }
}
