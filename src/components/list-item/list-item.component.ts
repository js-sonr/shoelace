import { classMap } from 'lit/directives/class-map.js';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './list-item.styles.js';
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
  static styles: CSSResultGroup = [componentStyles, styles];

  /** The type of activity */
  @property() type: ActivityType = 'transaction';

  /** The title of the activity */
  @property() title = '';

  /** The description of the activity */
  @property() description = '';

  /** The amount associated with the activity */
  @property() amount = '';

  /** The currency of the amount */
  @property() currency = '';

  /** The icon to display */
  @property() icon = '';

  /** The timestamp of the activity in ISO format */
  @property() timestamp = '';

  /** The status of the activity */
  @property() status: ActivityStatus = 'completed';

  /** Whether the item is selected */
  @property({ type: Boolean }) selected = false;

  /** Whether the item is clickable */
  @property({ type: Boolean }) clickable = true;

  /** Whether to show the status indicator */
  @property({ type: Boolean, attribute: 'show-status' }) showStatus = true;

  /** Whether to show the timestamp */
  @property({ type: Boolean, attribute: 'show-timestamp' }) showTimestamp = true;

  /** Additional metadata to display */
  @property({ type: Object }) metadata: Record<string, unknown> = {};

  private handleClick() {
    if (!this.clickable) return;

    this.dispatchEvent(
      new CustomEvent('nu-item-click', {
        detail: {
          type: this.type,
          title: this.title,
          description: this.description,
          amount: this.amount,
          currency: this.currency,
          timestamp: this.timestamp,
          status: this.status,
          metadata: this.metadata
        },
        bubbles: true
      })
    );
  }

  private renderIcon() {
    if (this.icon) {
      return html`
        <nu-icon
          part="icon"
          class="list-item__icon"
          name=${this.icon}
          library=${this.type === 'transaction' ? 'crypto' : 'default'}
        ></nu-icon>
      `;
    }

    // Default icons based on type
    let defaultIcon = 'circle';
    const library = 'default';

    switch (this.type) {
      case 'transaction':
        defaultIcon = this.amount?.startsWith('-') ? 'arrow-up-right' : 'arrow-down-left';
        break;
      case 'balance':
        defaultIcon = 'wallet2';
        break;
      case 'event':
        defaultIcon = 'bell';
        break;
    }

    return html` <nu-icon part="icon" class="list-item__icon" name=${defaultIcon} library=${library}></nu-icon> `;
  }

  private renderStatus() {
    if (!this.showStatus) return nothing;

    const statusClasses = {
      'list-item__status': true,
      'list-item__status--pending': this.status === 'pending',
      'list-item__status--completed': this.status === 'completed',
      'list-item__status--failed': this.status === 'failed'
    };

    return html`
      <div part="status" class=${classMap(statusClasses)}>
        <nu-icon
          name=${this.status === 'pending' ? 'clock' : this.status === 'completed' ? 'check-circle' : 'x-circle'}
          library="default"
        ></nu-icon>
      </div>
    `;
  }

  private renderTimestamp() {
    if (!this.showTimestamp || !this.timestamp) return nothing;

    const date = new Date(this.timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    let timeString = '';
    if (diffMins < 1) {
      timeString = 'Just now';
    } else if (diffMins < 60) {
      timeString = `${diffMins}m ago`;
    } else if (diffHours < 24) {
      timeString = `${diffHours}h ago`;
    } else if (diffDays < 7) {
      timeString = `${diffDays}d ago`;
    } else {
      timeString = date.toLocaleDateString();
    }

    return html` <span part="timestamp" class="list-item__timestamp"> ${timeString} </span> `;
  }

  private renderAmount() {
    if (!this.amount) return nothing;

    const isNegative = this.amount.startsWith('-');
    const amountClasses = {
      'list-item__amount': true,
      'list-item__amount--negative': isNegative,
      'list-item__amount--positive': !isNegative && this.amount !== '0'
    };

    return html`
      <div part="amount" class=${classMap(amountClasses)}>
        <span class="amount-value">${this.amount}</span>
        ${this.currency ? html`<span class="amount-currency">${this.currency}</span>` : nothing}
      </div>
    `;
  }

  private renderMetadata() {
    const metadataEntries = Object.entries(this.metadata);
    if (metadataEntries.length === 0) return nothing;

    return html`
      <div part="metadata" class="list-item__metadata">
        ${metadataEntries.map(
          ([key, value]) => html`
            <span class="metadata-item">
              <span class="metadata-key">${key}:</span>
              <span class="metadata-value">${value}</span>
            </span>
          `
        )}
      </div>
    `;
  }

  render() {
    const classes = {
      'list-item': true,
      'list-item--selected': this.selected,
      'list-item--clickable': this.clickable,
      [`list-item--${this.type}`]: true,
      [`list-item--${this.status}`]: true
    };

    return html`
      <div
        part="base"
        class=${classMap(classes)}
        @click=${this.handleClick}
        role="listitem"
        tabindex=${this.clickable ? '0' : '-1'}
      >
        <div class="list-item__icon-container">
          <slot name="icon"> ${this.renderIcon()} </slot>
        </div>

        <div part="content" class="list-item__content">
          <div part="header" class="list-item__header">
            <div class="list-item__title-group">
              <slot name="title">
                <span part="title" class="list-item__title">${this.title}</span>
              </slot>
              ${this.renderStatus()}
            </div>

            <div class="list-item__amount-group">
              <slot name="amount"> ${this.renderAmount()} </slot>
              ${this.renderTimestamp()}
            </div>
          </div>

          ${this.description
            ? html`
                <slot name="description">
                  <div part="description" class="list-item__description">${this.description}</div>
                </slot>
              `
            : nothing}

          <slot name="metadata"> ${this.renderMetadata()} </slot>
        </div>

        <slot></slot>
      </div>
    `;
  }
}
