import NebulaElement from '../../internal/nebula-element.js';
import NuButton from '../button/button.component.js';
import NuIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
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
export default class NuLoginButton extends NebulaElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'nu-button': typeof NuButton;
        'nu-icon': typeof NuIcon;
    };
    /** The button variant. */
    variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    /** The button size. */
    size: 'small' | 'medium' | 'large';
    /** Disables the button. */
    disabled: boolean;
    /** Shows a loading spinner and disables the button. */
    loading: boolean;
    /** The WebAuthn relying party ID. */
    rpId: string;
    /** The WebAuthn user handle for login. */
    userHandle?: string;
    /** Allowed credential IDs for login. */
    credentialIds: string[];
    /** Timeout for WebAuthn operation in milliseconds. */
    timeout: number;
    private authenticating;
    private handleLogin;
    private base64ToBuffer;
    private bufferToBase64;
    render(): import("lit-html").TemplateResult<1>;
}
