import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import NuButton from '../button/button.component.js';
import NuIcon from '../icon/icon.component.js';
import styles from './login-button.styles.js';
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
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = {
    'nu-button': NuButton,
    'nu-icon': NuIcon
  };

  /** The button variant. */
  @property({ reflect: true }) variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' =
    'primary';

  /** The button size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Shows a loading spinner and disables the button. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** The WebAuthn relying party ID. */
  @property({ attribute: 'rp-id' }) rpId = window.location.hostname;

  /** The WebAuthn user handle for login. */
  @property({ attribute: 'user-handle' }) userHandle?: string;

  /** Allowed credential IDs for login. */
  @property({ type: Array, attribute: 'credential-ids' }) credentialIds: string[] = [];

  /** Timeout for WebAuthn operation in milliseconds. */
  @property({ type: Number }) timeout = 60000;

  @state() private authenticating = false;

  private async handleLogin() {
    if (this.disabled || this.authenticating) return;

    this.authenticating = true;
    this.emit('nu-login-start');

    try {
      // Check WebAuthn support
      if (!window.PublicKeyCredential) {
        throw new Error('WebAuthn is not supported in this browser');
      }

      // Prepare credential request options
      const credentialRequestOptions: CredentialRequestOptions = {
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          timeout: this.timeout,
          rpId: this.rpId,
          userVerification: 'preferred',
          allowCredentials: this.credentialIds.map(id => ({
            type: 'public-key',
            id: this.base64ToBuffer(id)
          }))
        }
      };

      // Request credential
      const credential = (await navigator.credentials.get(credentialRequestOptions)) as PublicKeyCredential;

      if (!credential) {
        throw new Error('No credential returned');
      }

      // Emit success event with credential data
      this.emit('nu-login-success', {
        detail: {
          credential: {
            id: credential.id,
            rawId: this.bufferToBase64(credential.rawId),
            response: {
              authenticatorData: this.bufferToBase64(
                (credential.response as AuthenticatorAssertionResponse).authenticatorData
              ),
              clientDataJSON: this.bufferToBase64(credential.response.clientDataJSON),
              signature: this.bufferToBase64((credential.response as AuthenticatorAssertionResponse).signature),
              userHandle: (credential.response as AuthenticatorAssertionResponse).userHandle
                ? this.bufferToBase64((credential.response as AuthenticatorAssertionResponse).userHandle!)
                : null
            },
            type: credential.type
          }
        }
      });
    } catch (error) {
      this.emit('nu-login-error', {
        detail: {
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
      });
    } finally {
      this.authenticating = false;
    }
  }

  private base64ToBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64.replace(/-/g, '+').replace(/_/g, '/'));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  private bufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  render() {
    return html`
      <div part="base" class="login-button">
        <nu-button
          part="button"
          variant=${this.variant}
          size=${this.size}
          ?disabled=${this.disabled}
          ?loading=${this.loading || this.authenticating}
          @click=${this.handleLogin}
        >
          <slot name="prefix" slot="prefix">
            <nu-icon name="shield-check" library="default"></nu-icon>
          </slot>
          <slot>Sign In</slot>
          <slot name="suffix" slot="suffix"></slot>
        </nu-button>
      </div>
    `;
  }
}
