export type NuCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-cancel': NuCancelEvent;
  }
}
