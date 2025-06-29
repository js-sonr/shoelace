import {
  NuTooltip
} from "./chunk.77SON2CP.js";
import {
  copy_button_styles_default
} from "./chunk.VVVFEMBN.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.TBW4B6M5.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  NuIcon
} from "./chunk.I7KSEQQV.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  e as e2,
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/copy-button/copy-button.component.ts
var NuCopyButton = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.isCopying = false;
    this.status = "rest";
    this.value = "";
    this.from = "";
    this.disabled = false;
    this.copyLabel = "";
    this.successLabel = "";
    this.errorLabel = "";
    this.feedbackDuration = 1e3;
    this.tooltipPlacement = "top";
    this.hoist = false;
  }
  async handleCopy() {
    if (this.disabled || this.isCopying) {
      return;
    }
    this.isCopying = true;
    let valueToCopy = this.value;
    if (this.from) {
      const root = this.getRootNode();
      const isProperty = this.from.includes(".");
      const isAttribute = this.from.includes("[") && this.from.includes("]");
      let id = this.from;
      let field = "";
      if (isProperty) {
        [id, field] = this.from.trim().split(".");
      } else if (isAttribute) {
        [id, field] = this.from.trim().replace(/\]$/, "").split("[");
      }
      const target = "getElementById" in root ? root.getElementById(id) : null;
      if (target) {
        if (isAttribute) {
          valueToCopy = target.getAttribute(field) || "";
        } else if (isProperty) {
          valueToCopy = target[field] || "";
        } else {
          valueToCopy = target.textContent || "";
        }
      } else {
        this.showStatus("error");
        this.emit("nu-error");
      }
    }
    if (!valueToCopy) {
      this.showStatus("error");
      this.emit("nu-error");
    } else {
      try {
        await navigator.clipboard.writeText(valueToCopy);
        this.showStatus("success");
        this.emit("nu-copy", {
          detail: {
            value: valueToCopy
          }
        });
      } catch (error) {
        this.showStatus("error");
        this.emit("nu-error");
      }
    }
  }
  async showStatus(status) {
    const copyLabel = this.copyLabel || this.localize.term("copy");
    const successLabel = this.successLabel || this.localize.term("copied");
    const errorLabel = this.errorLabel || this.localize.term("error");
    const iconToShow = status === "success" ? this.successIcon : this.errorIcon;
    const showAnimation = getAnimation(this, "copy.in", { dir: "ltr" });
    const hideAnimation = getAnimation(this, "copy.out", { dir: "ltr" });
    this.tooltip.content = status === "success" ? successLabel : errorLabel;
    await this.copyIcon.animate(hideAnimation.keyframes, hideAnimation.options).finished;
    this.copyIcon.hidden = true;
    this.status = status;
    iconToShow.hidden = false;
    await iconToShow.animate(showAnimation.keyframes, showAnimation.options).finished;
    setTimeout(async () => {
      await iconToShow.animate(hideAnimation.keyframes, hideAnimation.options).finished;
      iconToShow.hidden = true;
      this.status = "rest";
      this.copyIcon.hidden = false;
      await this.copyIcon.animate(showAnimation.keyframes, showAnimation.options).finished;
      this.tooltip.content = copyLabel;
      this.isCopying = false;
    }, this.feedbackDuration);
  }
  render() {
    const copyLabel = this.copyLabel || this.localize.term("copy");
    return x`
      <nu-tooltip
        class=${e({
      "copy-button": true,
      "copy-button--success": this.status === "success",
      "copy-button--error": this.status === "error"
    })}
        content=${copyLabel}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <nu-icon library="system" name="copy"></nu-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <nu-icon library="system" name="check"></nu-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <nu-icon library="system" name="x-lg"></nu-icon>
          </slot>
        </button>
      </nu-tooltip>
    `;
  }
};
NuCopyButton.styles = [component_styles_default, copy_button_styles_default];
NuCopyButton.dependencies = {
  "nu-icon": NuIcon,
  "nu-tooltip": NuTooltip
};
__decorateClass([
  e2('slot[name="copy-icon"]')
], NuCopyButton.prototype, "copyIcon", 2);
__decorateClass([
  e2('slot[name="success-icon"]')
], NuCopyButton.prototype, "successIcon", 2);
__decorateClass([
  e2('slot[name="error-icon"]')
], NuCopyButton.prototype, "errorIcon", 2);
__decorateClass([
  e2("sl-tooltip")
], NuCopyButton.prototype, "tooltip", 2);
__decorateClass([
  r()
], NuCopyButton.prototype, "isCopying", 2);
__decorateClass([
  r()
], NuCopyButton.prototype, "status", 2);
__decorateClass([
  n()
], NuCopyButton.prototype, "value", 2);
__decorateClass([
  n()
], NuCopyButton.prototype, "from", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuCopyButton.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "copy-label" })
], NuCopyButton.prototype, "copyLabel", 2);
__decorateClass([
  n({ attribute: "success-label" })
], NuCopyButton.prototype, "successLabel", 2);
__decorateClass([
  n({ attribute: "error-label" })
], NuCopyButton.prototype, "errorLabel", 2);
__decorateClass([
  n({ attribute: "feedback-duration", type: Number })
], NuCopyButton.prototype, "feedbackDuration", 2);
__decorateClass([
  n({ attribute: "tooltip-placement" })
], NuCopyButton.prototype, "tooltipPlacement", 2);
__decorateClass([
  n({ type: Boolean })
], NuCopyButton.prototype, "hoist", 2);
setDefaultAnimation("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" }
  ],
  options: { duration: 100 }
});
setDefaultAnimation("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" }
  ],
  options: { duration: 100 }
});

export {
  NuCopyButton
};
