import {
  login_button_styles_default
} from "./chunk.V7YKUGUA.js";
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

// src/components/login-button/login-button.component.ts
var NuLoginButton = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.size = "medium";
    this.disabled = false;
    this.loading = false;
    this.rpId = window.location.hostname;
    this.credentialIds = [];
    this.timeout = 6e4;
    this.authenticating = false;
  }
  async handleLogin() {
    if (this.disabled || this.authenticating) return;
    this.authenticating = true;
    this.emit("nu-login-start");
    try {
      if (!window.PublicKeyCredential) {
        throw new Error("WebAuthn is not supported in this browser");
      }
      const credentialRequestOptions = {
        publicKey: {
          challenge: crypto.getRandomValues(new Uint8Array(32)),
          timeout: this.timeout,
          rpId: this.rpId,
          userVerification: "preferred",
          allowCredentials: this.credentialIds.map((id) => ({
            type: "public-key",
            id: this.base64ToBuffer(id)
          }))
        }
      };
      const credential = await navigator.credentials.get(credentialRequestOptions);
      if (!credential) {
        throw new Error("No credential returned");
      }
      this.emit("nu-login-success", {
        detail: {
          credential: {
            id: credential.id,
            rawId: this.bufferToBase64(credential.rawId),
            response: {
              authenticatorData: this.bufferToBase64(
                credential.response.authenticatorData
              ),
              clientDataJSON: this.bufferToBase64(credential.response.clientDataJSON),
              signature: this.bufferToBase64(credential.response.signature),
              userHandle: credential.response.userHandle ? this.bufferToBase64(credential.response.userHandle) : null
            },
            type: credential.type
          }
        }
      });
    } catch (error) {
      this.emit("nu-login-error", {
        detail: {
          error: error instanceof Error ? error.message : "Unknown error occurred"
        }
      });
    } finally {
      this.authenticating = false;
    }
  }
  base64ToBuffer(base64) {
    const binary = atob(base64.replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
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
};
NuLoginButton.styles = [component_styles_default, login_button_styles_default];
NuLoginButton.dependencies = {
  "nu-button": NuButton,
  "nu-icon": NuIcon
};
__decorateClass([
  n({ reflect: true })
], NuLoginButton.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], NuLoginButton.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuLoginButton.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuLoginButton.prototype, "loading", 2);
__decorateClass([
  n({ attribute: "rp-id" })
], NuLoginButton.prototype, "rpId", 2);
__decorateClass([
  n({ attribute: "user-handle" })
], NuLoginButton.prototype, "userHandle", 2);
__decorateClass([
  n({ type: Array, attribute: "credential-ids" })
], NuLoginButton.prototype, "credentialIds", 2);
__decorateClass([
  n({ type: Number })
], NuLoginButton.prototype, "timeout", 2);
__decorateClass([
  r()
], NuLoginButton.prototype, "authenticating", 2);

export {
  NuLoginButton
};
