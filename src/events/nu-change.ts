export type NuChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-change': NuChangeEvent;
  }
}
