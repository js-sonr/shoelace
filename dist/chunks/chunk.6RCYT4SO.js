import {
  option_styles_default
} from "./chunk.4OXTKIJQ.js";
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
  watch
} from "./chunk.KYKJHNMB.js";
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

// src/components/option/option.component.ts
var NuOption = class extends NebulaElement {
  constructor() {
    super(...arguments);
    // @ts-expect-error - Controller is currently unused
    this.localize = new LocalizeController(this);
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.value = "";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleMouseEnter() {
    this.hasHover = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, "_");
    }
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const nodes = this.childNodes;
    let label = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!node.hasAttribute("slot")) {
          label += node.textContent;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        label += node.textContent;
      }
    });
    return label.trim();
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      option: true,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <nu-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></nu-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
NuOption.styles = [component_styles_default, option_styles_default];
NuOption.dependencies = { "nu-icon": NuIcon };
__decorateClass([
  e2(".option__label")
], NuOption.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], NuOption.prototype, "current", 2);
__decorateClass([
  r()
], NuOption.prototype, "selected", 2);
__decorateClass([
  r()
], NuOption.prototype, "hasHover", 2);
__decorateClass([
  n({ reflect: true })
], NuOption.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuOption.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], NuOption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], NuOption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], NuOption.prototype, "handleValueChange", 1);

export {
  NuOption
};
