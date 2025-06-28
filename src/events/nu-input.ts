export type NuInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-input': NuInputEvent;
  }
}
