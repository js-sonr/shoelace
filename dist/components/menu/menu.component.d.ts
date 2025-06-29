import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
import type NuMenuItem from '../menu-item/menu-item.component.js';
export interface MenuSelectEventDetail {
    item: NuMenuItem;
}
/**
 * @summary Menus provide a list of options for the user to choose from.
 * @documentation https://nebulaui.org/components/menu
 * @status stable
 * @since 2.0
 *
 * @slot - The menu's content, including menu items, menu labels, and dividers.
 *
 * @event nu-select - Emitted when a menu item is selected.
 */
export default class NuMenu extends NebulaElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    connectedCallback(): void;
    private handleClick;
    private handleKeyDown;
    private handleMouseDown;
    private handleSlotChange;
    private isMenuItem;
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems(): NuMenuItem[];
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem(): NuMenuItem | undefined;
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item: NuMenuItem): void;
    render(): import("lit-html").TemplateResult<1>;
}
