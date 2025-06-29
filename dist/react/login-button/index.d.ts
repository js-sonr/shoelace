import Component from '../../components/login-button/login-button.component.js';
import { type EventName } from '@lit/react';
import type { NuLoginStartEvent } from '../../events/events.js';
import type { NuLoginSuccessEvent } from '../../events/events.js';
import type { NuLoginErrorEvent } from '../../events/events.js';
export type { NuLoginStartEvent } from '../../events/events.js';
export type { NuLoginSuccessEvent } from '../../events/events.js';
export type { NuLoginErrorEvent } from '../../events/events.js';
/**
 * @summary A button component for WebAuthn-based authentication login.
 * @documentation https://nebulaui.org/components/login-button
 * @status experimental
 * @since 2.0
 *
 * @dependency nu-button
 * @dependency nu-icon
 *
 * @event nu-login-start - Emitted when login process begins.
 * @event nu-login-success - Emitted when login succeeds with credential data.
 * @event nu-login-error - Emitted when login fails with error details.
 *
 * @slot - The button's label text.
 * @slot prefix - Icon or element before the label.
 * @slot suffix - Icon or element after the label.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The internal button element.
 *
 * @cssproperty --nu-login-button-color - The button text color.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onNuLoginStart: EventName<NuLoginStartEvent>;
    onNuLoginSuccess: EventName<NuLoginSuccessEvent>;
    onNuLoginError: EventName<NuLoginErrorEvent>;
}>;
export default reactWrapper;
