import Component from '../../components/icon/icon.component.js';
import { type EventName } from '@lit/react';
import type { NuLoadEvent } from '../../events/events.js';
import type { NuErrorEvent } from '../../events/events.js';
export type { NuLoadEvent } from '../../events/events.js';
export type { NuErrorEvent } from '../../events/events.js';
/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://nebulaui.org/components/icon
 * @status stable
 * @since 2.0
 *
 * @event nu-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
 * @event nu-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
 *
 * @csspart svg - The internal SVG element.
 * @csspart use - The <use> element generated when using `spriteSheet: true`
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuLoad: EventName<NuLoadEvent>;
    onNuError: EventName<NuErrorEvent>;
}>;
export default reactWrapper;
