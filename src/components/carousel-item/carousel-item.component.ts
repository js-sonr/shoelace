import { html } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './carousel-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 *
 * @since 2.0
 * @status experimental
 *
 * @slot - The carousel item's content..
 *
 * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
 *
 */
export default class NuCarouselItem extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <slot></slot> `;
  }
}
