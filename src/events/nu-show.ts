export type NuShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-show': NuShowEvent;
  }
}
