export type NuItemClickEvent = CustomEvent<{
    type: string;
    title: string;
    description?: string;
    amount?: string;
    currency?: string;
    timestamp: string;
    status?: string;
    metadata?: Record<string, unknown>;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-item-click': NuItemClickEvent;
    }
}
