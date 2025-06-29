import NebulaElement from '../../internal/nebula-element.js';
import NuCheckbox from '../checkbox/checkbox.component.js';
import NuIcon from '../icon/icon.component.js';
import NuSpinner from '../spinner/spinner.component.js';
import type { CSSResultGroup, PropertyValueMap } from 'lit';
/**
 * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
 * @documentation https://nebulaui.org/components/tree-item
 * @status stable
 * @since 2.0
 *
 * @dependency sl-checkbox
 * @dependency sl-icon
 * @dependency sl-spinner
 *
 * @event nu-expand - Emitted when the tree item expands.
 * @event nu-after-expand - Emitted after the tree item expands and all animations are complete.
 * @event nu-collapse - Emitted when the tree item collapses.
 * @event nu-after-collapse - Emitted after the tree item collapses and all animations are complete.
 * @event nu-lazy-change - Emitted when the tree item's lazy state changes.
 * @event nu-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
 *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
 *  state and update the tree.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded.
 * @slot collapse-icon - The icon to show when the tree item is collapsed.
 *
 * @csspart base - The component's base wrapper.
 * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
 * @csspart item--disabled - Applied when the tree item is disabled.
 * @csspart item--expanded - Applied when the tree item is expanded.
 * @csspart item--indeterminate - Applied when the selection is indeterminate.
 * @csspart item--selected - Applied when the tree item is selected.
 * @csspart indentation - The tree item's indentation container.
 * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
 * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart label - The tree item's label.
 * @csspart children - The container that wraps the tree item's nested children.
 * @csspart checkbox - The checkbox that shows when using multiselect.
 * @csspart checkbox__base - The checkbox's exported `base` part.
 * @csspart checkbox__control - The checkbox's exported `control` part.
 * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.
 * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.
 * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
 * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
 * @csspart checkbox__label - The checkbox's exported `label` part.
 */
export default class NuTreeItem extends NebulaElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'nu-checkbox': typeof NuCheckbox;
        'nu-icon': typeof NuIcon;
        'nu-spinner': typeof NuSpinner;
    };
    static isTreeItem(node: Node): boolean;
    private readonly localize;
    indeterminate: boolean;
    isLeaf: boolean;
    loading: boolean;
    selectable: boolean;
    /** Expands the tree item. */
    expanded: boolean;
    /** Draws the tree item in a selected state. */
    selected: boolean;
    /** Disables the tree item. */
    disabled: boolean;
    /** Enables lazy loading behavior. */
    lazy: boolean;
    defaultSlot: HTMLSlotElement;
    childrenSlot: HTMLSlotElement;
    itemElement: HTMLDivElement;
    childrenContainer: HTMLDivElement;
    expandButtonSlot: HTMLSlotElement;
    connectedCallback(): void;
    firstUpdated(): void;
    private animateCollapse;
    private isNestedItem;
    private handleChildrenSlotChange;
    protected willUpdate(changedProperties: PropertyValueMap<NuTreeItem> | Map<PropertyKey, unknown>): void;
    private animateExpand;
    handleLoadingChange(): void;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleExpandedChange(): void;
    handleExpandAnimation(): void;
    handleLazyChange(): void;
    /** Gets all the nested tree items in this node. */
    getChildrenItems({ includeDisabled }?: {
        includeDisabled?: boolean;
    }): NuTreeItem[];
    render(): import("lit-html").TemplateResult<1>;
}
