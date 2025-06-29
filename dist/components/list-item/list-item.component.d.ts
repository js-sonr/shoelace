import NebulaElement from '../../internal/nebula-element.js';
import type { CSSResultGroup } from 'lit';
export type ActivityType = 'transaction' | 'balance' | 'event';
export type ActivityStatus = 'pending' | 'completed' | 'failed';
/**
 * @summary A list item component for displaying individual activities in activity feeds or balance lists.
 * @documentation https://nebulaui.org/components/list-item
 * @status experimental
 * @since 2.0
 *
 * @event nu-item-click - Emitted when the item is clicked.
 * @event nu-item-select - Emitted when the item selection state changes.
 *
 * @slot - The default slot for custom content.
 * @slot icon - Custom icon content.
 * @slot title - Custom title content.
 * @slot description - Custom description content.
 * @slot amount - Custom amount content.
 * @slot metadata - Custom metadata content.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The icon container.
 * @csspart content - The main content area.
 * @csspart header - The header containing title and amount.
 * @csspart title - The title text.
 * @csspart description - The description text.
 * @csspart amount - The amount text.
 * @csspart metadata - The metadata container.
 * @csspart status - The status indicator.
 * @csspart timestamp - The timestamp text.
 */
export default class NuListItem extends NebulaElement {
    static styles: CSSResultGroup;
    /** The type of activity */
    type: ActivityType;
    /** The title of the activity */
    title: string;
    /** The description of the activity */
    description: string;
    /** The amount associated with the activity */
    amount: string;
    /** The currency of the amount */
    currency: string;
    /** The icon to display */
    icon: string;
    /** The timestamp of the activity in ISO format */
    timestamp: string;
    /** The status of the activity */
    status: ActivityStatus;
    /** Whether the item is selected */
    selected: boolean;
    /** Whether the item is clickable */
    clickable: boolean;
    /** Whether to show the status indicator */
    showStatus: boolean;
    /** Whether to show the timestamp */
    showTimestamp: boolean;
    /** Additional metadata to display */
    metadata: Record<string, unknown>;
    private handleClick;
    private renderIcon;
    private renderStatus;
    private renderTimestamp;
    private renderAmount;
    private renderMetadata;
    render(): import("lit-html").TemplateResult<1>;
}
