import {
  icon_button_styles_default
} from "./chunk.KIROSIKX.js";
import {
  n as n2,
  s
} from "./chunk.R2OXX7YI.js";
import {
  o
} from "./chunk.RAPJK3SC.js";
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
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/icon-button/icon-button.component.ts
var NuIconButton = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("nu-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("nu-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? s`a` : s`button`;
    return n2`
      <${tag}
        part="base"
        class=${e({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${o(isLink ? void 0 : this.disabled)}
        type=${o(isLink ? void 0 : "button")}
        href=${o(isLink ? this.href : void 0)}
        target=${o(isLink ? this.target : void 0)}
        download=${o(isLink ? this.download : void 0)}
        rel=${o(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <nu-icon
          class="icon-button__icon"
          name=${o(this.name)}
          library=${o(this.library)}
          src=${o(this.src)}
          aria-hidden="true"
        ></nu-icon>
      </${tag}>
    `;
  }
};
NuIconButton.styles = [component_styles_default, icon_button_styles_default];
NuIconButton.dependencies = { "nu-icon": NuIcon };
__decorateClass([
  e2(".icon-button")
], NuIconButton.prototype, "button", 2);
__decorateClass([
  r()
], NuIconButton.prototype, "hasFocus", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "name", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "library", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "src", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "href", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "target", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "download", 2);
__decorateClass([
  n()
], NuIconButton.prototype, "label", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuIconButton.prototype, "disabled", 2);

export {
  NuIconButton
};
