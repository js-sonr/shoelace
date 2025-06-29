import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import NuButton from '../button/button.component.js';
import NuIcon from '../icon/icon.component.js';
import styles from './register-button.styles.js';
import type { CSSResultGroup } from 'lit';

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
export default class NuRegisterButton extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = {
    'nu-button': NuButton,
    'nu-icon': NuIcon
  };


  /** The button variant. */
  @property({ reflect: true }) variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' = 'success';

  /** The button size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Shows a loading spinner and disables the button. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** The WebAuthn relying party ID. */
  @property({ attribute: 'rp-id' }) rpId = window.location.hostname;

  /** The WebAuthn relying party name. */
  @property({ attribute: 'rp-name' }) rpName = 'Nebula App';

  /** The user ID for registration. */
  @property({ attribute: 'user-id' }) userId!: string;

  /** The user name for registration. */
  @property({ attribute: 'user-name' }) userName!: string;

  /** The user display name for registration. */
  @property({ attribute: 'user-display-name' }) userDisplayName!: string;

  /** Timeout for WebAuthn operation in milliseconds. */
  @property({ type: Number }) timeout = 60000;

  /** Require user verification (biometrics/PIN). */
  @property({ type: Boolean, attribute: 'user-verification' }) userVerification = true;

  @state() private registering = false;

  private async handleRegister() {
    if (this.disabled || this.registering) return;

    if (!this.userId || !this.userName || !this.userDisplayName) {
      this.emit('nu-register-error', {
        detail: {
          error: 'User ID, name, and display name are required for registration'
        }
      });
      return;
    }

    this.registering = true;
    this.emit('nu-register-start');

    try {
      // Check WebAuthn support
      if (!window.PublicKeyCredential) {
        throw new Error('WebAuthn is not supported in this browser');
      }

      // Prepare credential creation options
      const credentialCreationOptions: CredentialCreationOptions = {
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          rp: {
            id: this.rpId,
            name: this.rpName
          },
          user: {
            id: new TextEncoder().encode(this.userId),
            name: this.userName,
            displayName: this.userDisplayName
          },
          pubKeyCredParams: [
            { alg: -7, type: 'public-key' }, // ES256
            { alg: -257, type: 'public-key' } // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: 'platform',
            userVerification: this.userVerification ? 'required' : 'preferred',
            requireResidentKey: true
          },
          timeout: this.timeout,
          attestation: 'direct'
        }
      };

      // Create credential
      const credential = await navigator.credentials.create(credentialCreationOptions) as PublicKeyCredential;

      if (!credential) {
        throw new Error('No credential returned');
      }

      // Emit success event with credential data
      this.emit('nu-register-success', {
        detail: {
          credential: {
            id: credential.id,
            rawId: this.bufferToBase64(credential.rawId),
            response: {
              attestationObject: this.bufferToBase64((credential.response as AuthenticatorAttestationResponse).attestationObject),
              clientDataJSON: this.bufferToBase64(credential.response.clientDataJSON)
            },
            type: credential.type
          }
        }
      });
    } catch (error) {
      this.emit('nu-register-error', {
        detail: {
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
      });
    } finally {
      this.registering = false;
    }
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
      <div part="base" class="register-button">
        <nu-button
          part="button"
          variant=${this.variant}
          size=${this.size}
          ?disabled=${this.disabled}
          ?loading=${this.loading || this.registering}
          @click=${this.handleRegister}
        >
          <slot name="prefix" slot="prefix">
            <nu-icon name="person-plus" library="default"></nu-icon>
          </slot>
          <slot>Create Account</slot>
          <slot name="suffix" slot="suffix"></slot>
        </nu-button>
      </div>
    `;
  }
}
