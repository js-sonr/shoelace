import Component from '../../components/animation/animation.component.js';
import { type EventName } from '@lit/react';
import type { NuCancelEvent } from '../../events/events.js';
import type { NuFinishEvent } from '../../events/events.js';
import type { NuStartEvent } from '../../events/events.js';
export type { NuCancelEvent } from '../../events/events.js';
export type { NuFinishEvent } from '../../events/events.js';
export type { NuStartEvent } from '../../events/events.js';
/**
 * @summary Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
 * @documentation https://nebulaui.org/components/animation
 * @status stable
 * @since 2.0
 *
 * @event nu-cancel - Emitted when the animation is canceled.
 * @event nu-finish - Emitted when the animation finishes.
 * @event nu-start - Emitted when the animation starts or restarts.
 *
 * @slot - The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To
 *  animate multiple elements, either wrap them in a single container or use multiple `<nu-animation>` elements.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuCancel: EventName<NuCancelEvent>;
    onNuFinish: EventName<NuFinishEvent>;
    onNuStart: EventName<NuStartEvent>;
}>;
export default reactWrapper;
