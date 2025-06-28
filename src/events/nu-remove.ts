export type NuRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-remove': NuRemoveEvent;
  }
}
