import {
  radio_styles_default
} from "./chunk.JECYI4ZL.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  NuIcon
} from "./chunk.I7KSEQQV.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
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

// src/components/radio/radio.component.ts
var NuRadio = class extends NebulaElement {
  constructor() {
    super();
    this.checked = false;
    this.hasFocus = false;
    this.size = "medium";
    this.disabled = false;
    this.handleBlur = () => {
      this.hasFocus = false;
      this.emit("nu-blur");
    };
    this.handleClick = () => {
      if (!this.disabled) {
        this.checked = true;
      }
    };
    this.handleFocus = () => {
      this.hasFocus = true;
      this.emit("nu-focus");
    };
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return x`
      <span
        part="base"
        class=${e({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? x` <nu-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></nu-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
NuRadio.styles = [component_styles_default, radio_styles_default];
NuRadio.dependencies = { "nu-icon": NuIcon };
__decorateClass([
  r()
], NuRadio.prototype, "checked", 2);
__decorateClass([
  r()
], NuRadio.prototype, "hasFocus", 2);
__decorateClass([
  n()
], NuRadio.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], NuRadio.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuRadio.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], NuRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], NuRadio.prototype, "handleDisabledChange", 1);

export {
  NuRadio
};
