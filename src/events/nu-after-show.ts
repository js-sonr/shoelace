export type NuAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-after-show': NuAfterShowEvent;
  }
}
