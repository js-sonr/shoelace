export type NuAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-after-hide': NuAfterHideEvent;
  }
}
