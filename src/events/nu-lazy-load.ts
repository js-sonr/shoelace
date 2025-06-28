export type NuLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-lazy-load': NuLazyLoadEvent;
  }
}
