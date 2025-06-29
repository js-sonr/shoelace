export type NuLoadMoreEvent = CustomEvent<{
    page: number;
    pageSize: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-load-more': NuLoadMoreEvent;
    }
}
