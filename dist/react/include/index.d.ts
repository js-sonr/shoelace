import Component from '../../components/include/include.component.js';
import { type EventName } from '@lit/react';
import type { NuLoadEvent } from '../../events/events.js';
import type { NuErrorEvent } from '../../events/events.js';
export type { NuLoadEvent } from '../../events/events.js';
export type { NuErrorEvent } from '../../events/events.js';
/**
 * @summary Includes give you the power to embed external HTML files into the page.
 * @documentation https://nebulaui.org/components/include
 * @status stable
 * @since 2.0
 *
 * @event nu-load - Emitted when the included file is loaded.
 * @event nu-error - Emitted when the included file fails to load due to an error.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuLoad: EventName<NuLoadEvent>;
    onNuError: EventName<NuErrorEvent>;
}>;
export default reactWrapper;
