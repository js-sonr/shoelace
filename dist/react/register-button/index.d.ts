import Component from '../../components/register-button/register-button.component.js';
import { type EventName } from '@lit/react';
import type { NuRegisterStartEvent } from '../../events/events.js';
import type { NuRegisterSuccessEvent } from '../../events/events.js';
import type { NuRegisterErrorEvent } from '../../events/events.js';
export type { NuRegisterStartEvent } from '../../events/events.js';
export type { NuRegisterSuccessEvent } from '../../events/events.js';
export type { NuRegisterErrorEvent } from '../../events/events.js';
/**
 * @summary A button component for WebAuthn-based user registration.
 * @documentation https://nebulaui.org/components/register-button
 * @status experimental
 * @since 2.0
 *
 * @dependency nu-button
 * @dependency nu-icon
 *
 * @event nu-register-start - Emitted when registration process begins.
 * @event nu-register-success - Emitted when registration succeeds with credential data.
 * @event nu-register-error - Emitted when registration fails with error details.
 *
 * @slot - The button's label text.
 * @slot prefix - Icon or element before the label.
 * @slot suffix - Icon or element after the label.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal button element.
 *
 * @cssproperty --nu-register-button-color - The button text color.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuRegisterStart: EventName<NuRegisterStartEvent>;
    onNuRegisterSuccess: EventName<NuRegisterSuccessEvent>;
    onNuRegisterError: EventName<NuRegisterErrorEvent>;
}>;
export default reactWrapper;
