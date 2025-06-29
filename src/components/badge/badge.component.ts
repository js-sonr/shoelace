import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './badge.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://nebulaui.org/components/badge
 * @status stable
 * @since 2.0
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's base wrapper.
 */
export default class NuBadge extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  /** The badge's theme variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          badge: true,
          'badge--primary': this.variant === 'primary',
          'badge--success': this.variant === 'success',
          'badge--neutral': this.variant === 'neutral',
          'badge--warning': this.variant === 'warning',
          'badge--danger': this.variant === 'danger',
          'badge--pill': this.pill,
          'badge--pulse': this.pulse
        })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
}
