import { clamp } from '../../internal/math.js';
import { classMap } from 'lit/directives/class-map.js';
import { drag } from '../../internal/drag.js';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import NuIcon from '../icon/icon.component.js';
import styles from './image-comparer.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Compare visual differences between similar photos with a sliding panel.
 * @documentation https://nebulaui.org/components/image-comparer
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot before - The before image, an `<img>` or `<svg>` element.
 * @slot after - The after image, an `<img>` or `<svg>` element.
 * @slot handle - The icon used inside the handle.
 *
 * @event nu-change - Emitted when the position changes.
 *
 * @csspart base - The component's base wrapper.
 * @csspart before - The container that wraps the before image.
 * @csspart after - The container that wraps the after image.
 * @csspart divider - The divider that separates the images.
 * @csspart handle - The handle that the user drags to expose the after image.
 *
 * @cssproperty --divider-width - The width of the dividing line.
 * @cssproperty --handle-size - The size of the compare handle.
 */
export default class NuImageComparer extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static scopedElement = { 'sl-icon': NuIcon };

  @query('.image-comparer') base: HTMLElement;
  @query('.image-comparer__handle') handle: HTMLElement;

  /** The position of the divider as a percentage. */
  @property({ type: Number, reflect: true }) position = 50;

  private handleDrag(event: PointerEvent) {
    const { width } = this.base.getBoundingClientRect();
    const isRtl = this.matches(':dir(rtl)');

    event.preventDefault();

    drag(this.base, {
      onMove: x => {
        this.position = parseFloat(clamp((x / width) * 100, 0, 100).toFixed(2));
        if (isRtl) this.position = 100 - this.position;
      },
      initialEvent: event
    });
  }

  private handleKeyDown(event: KeyboardEvent) {
    const isLtr = this.matches(':dir(ltr)');
    const isRtl = this.matches(':dir(rtl)');

    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;

      event.preventDefault();

      if ((isLtr && event.key === 'ArrowLeft') || (isRtl && event.key === 'ArrowRight')) {
        newPosition -= incr;
      }
      if ((isLtr && event.key === 'ArrowRight') || (isRtl && event.key === 'ArrowLeft')) {
        newPosition += incr;
      }
      if (event.key === 'Home') {
        newPosition = 0;
      }
      if (event.key === 'End') {
        newPosition = 100;
      }
      newPosition = clamp(newPosition, 0, 100);

      this.position = newPosition;
    }
  }

  @watch('position', { waitUntilFirstUpdate: true })
  handlePositionChange() {
    this.emit('nu-change');
  }

  render() {
    const isRtl = this.matches(':dir(rtl)');

    return html`
      <div
        part="base"
        id="image-comparer"
        class=${classMap({
          'image-comparer': true,
          'image-comparer--rtl': isRtl
        })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${styleMap({
              clipPath: isRtl ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)`
            })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${styleMap({
            left: isRtl ? `${100 - this.position}%` : `${this.position}%`
          })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <nu-icon library="system" name="grip-vertical"></nu-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
}
