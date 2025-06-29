import Component from '../../components/tree/tree.component.js';
import { type EventName } from '@lit/react';
import type { NuSelectionChangeEvent } from '../../events/events.js';
export type { NuSelectionChangeEvent } from '../../events/events.js';
/**
 * @summary Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
 * @documentation https://nebulaui.org/components/tree
 * @status stable
 * @since 2.0
 *
 * @event nu-selection-change - Emitted when a tree item is selected or deselected.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded. Works best with `<nu-icon>`.
 * @slot collapse-icon - The icon to show when the tree item is collapsed. Works best with `<nu-icon>`.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty [--indent-size=var(--nu-spacing-medium)] - The size of the indentation for nested items.
 * @cssproperty [--indent-guide-color=var(--nu-color-neutral-200)] - The color of the indentation line.
 * @cssproperty [--indent-guide-offset=0] - The amount of vertical spacing to leave between the top and bottom of the
 *  indentation line's starting position.
 * @cssproperty [--indent-guide-style=solid] - The style of the indentation line, e.g. solid, dotted, dashed.
 * @cssproperty [--indent-guide-width=0] - The width of the indentation line.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuSelectionChange: EventName<NuSelectionChangeEvent>;
}>;
export default reactWrapper;
