import {
  register_button_styles_default
} from "./chunk.NDD7A5JT.js";
import {
  NuButton
} from "./chunk.7DBFJEEQ.js";
import {
  NuIcon
} from "./chunk.I7KSEQQV.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/register-button/register-button.component.ts
var NuRegisterButton = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.size = "medium";
    this.disabled = false;
    this.loading = false;
    this.rpId = window.location.hostname;
    this.rpName = "Nebula App";
    this.timeout = 6e4;
    this.userVerification = true;
    this.registering = false;
  }
  async handleRegister() {
    if (this.disabled || this.registering) return;
    if (!this.userId || !this.userName || !this.userDisplayName) {
      this.emit("nu-register-error", {
        detail: {
          error: "User ID, name, and display name are required for registration"
        }
      });
      return;
    }
    this.registering = true;
    this.emit("nu-register-start");
    try {
      if (!window.PublicKeyCredential) {
        throw new Error("WebAuthn is not supported in this browser");
      }
      const credentialCreationOptions = {
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
            { alg: -7, type: "public-key" },
            // ES256
            { alg: -257, type: "public-key" }
            // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            userVerification: this.userVerification ? "required" : "preferred",
            requireResidentKey: true
          },
          timeout: this.timeout,
          attestation: "direct"
        }
      };
      const credential = await navigator.credentials.create(credentialCreationOptions);
      if (!credential) {
        throw new Error("No credential returned");
      }
      this.emit("nu-register-success", {
        detail: {
          credential: {
            id: credential.id,
            rawId: this.bufferToBase64(credential.rawId),
            response: {
              attestationObject: this.bufferToBase64(credential.response.attestationObject),
              clientDataJSON: this.bufferToBase64(credential.response.clientDataJSON)
            },
            type: credential.type
          }
        }
      });
    } catch (error) {
      this.emit("nu-register-error", {
        detail: {
          error: error instanceof Error ? error.message : "Unknown error occurred"
        }
      });
    } finally {
      this.registering = false;
    }
  }
  bufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  render() {
    return x`
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
            <nu-icon name="passkey" library="sonr"></nu-icon>
          </slot>
          <slot>Create Account</slot>
          <slot name="suffix" slot="suffix"></slot>
        </nu-button>
      </div>
    `;
  }
};
NuRegisterButton.styles = [component_styles_default, register_button_styles_default];
NuRegisterButton.dependencies = {
  "nu-button": NuButton,
  "nu-icon": NuIcon
};
__decorateClass([
  n({ reflect: true })
], NuRegisterButton.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], NuRegisterButton.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuRegisterButton.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuRegisterButton.prototype, "loading", 2);
__decorateClass([
  n({ attribute: "rp-id" })
], NuRegisterButton.prototype, "rpId", 2);
__decorateClass([
  n({ attribute: "rp-name" })
], NuRegisterButton.prototype, "rpName", 2);
__decorateClass([
  n({ attribute: "user-id" })
], NuRegisterButton.prototype, "userId", 2);
__decorateClass([
  n({ attribute: "user-name" })
], NuRegisterButton.prototype, "userName", 2);
__decorateClass([
  n({ attribute: "user-display-name" })
], NuRegisterButton.prototype, "userDisplayName", 2);
__decorateClass([
  n({ type: Number })
], NuRegisterButton.prototype, "timeout", 2);
__decorateClass([
  n({ type: Boolean, attribute: "user-verification" })
], NuRegisterButton.prototype, "userVerification", 2);
__decorateClass([
  r()
], NuRegisterButton.prototype, "registering", 2);

export {
  NuRegisterButton
};
