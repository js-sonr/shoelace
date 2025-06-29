export type NuBlurEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-blur': NuBlurEvent;
    }
}
