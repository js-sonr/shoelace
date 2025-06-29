export type NuDataPointHoverEvent = CustomEvent<{
  data: unknown;
  index: number;
  [key: string]: unknown;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-data-point-hover': NuDataPointHoverEvent;
  }
}