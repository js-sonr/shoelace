export type NuCopyEvent = CustomEvent<{ value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-copy': NuCopyEvent;
  }
}
