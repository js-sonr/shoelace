export type NuExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-expand': NuExpandEvent;
  }
}
