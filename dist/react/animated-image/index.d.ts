import Component from '../../components/animated-image/animated-image.component.js';
import { type EventName } from '@lit/react';
import type { NuLoadEvent } from '../../events/events.js';
import type { NuErrorEvent } from '../../events/events.js';
export type { NuLoadEvent } from '../../events/events.js';
export type { NuErrorEvent } from '../../events/events.js';
/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 * @documentation https://nebulaui.org/components/animated-image
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @event nu-load - Emitted when the image loads successfully.
 * @event nu-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<nu-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<nu-icon>`.
 *
 * @part control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuLoad: EventName<NuLoadEvent>;
    onNuError: EventName<NuErrorEvent>;
}>;
export default reactWrapper;
