import type NuMenuItem from '../components/menu-item/menu-item.js';

export type NuSelectEvent = CustomEvent<{ item: NuMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-select': NuSelectEvent;
  }
}
