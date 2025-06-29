export type NuLineHoverEvent = CustomEvent<{
  seriesId: string;
  index: number;
  [key: string]: unknown;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-line-hover': NuLineHoverEvent;
  }
}