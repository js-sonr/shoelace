import type NuTreeItem from '../components/tree-item/tree-item.js';

export type NuSelectionChangeEvent = CustomEvent<{ selection: NuTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'nu-selection-change': NuSelectionChangeEvent;
  }
}
