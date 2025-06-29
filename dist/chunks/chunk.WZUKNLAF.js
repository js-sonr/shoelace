import {
  tag_styles_default
} from "./chunk.VAQP4VQ3.js";
import {
  NuIconButton
} from "./chunk.LWTMS7J3.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/tag/tag.component.ts
var NuTag = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("nu-remove");
  }
  render() {
    return x`
      <span
        part="base"
        class=${e({
      tag: true,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? x`
              <nu-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></nu-icon-button>
            ` : ""}
      </span>
    `;
  }
};
NuTag.styles = [component_styles_default, tag_styles_default];
NuTag.dependencies = { "nu-icon-button": NuIconButton };
__decorateClass([
  n({ reflect: true })
], NuTag.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], NuTag.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuTag.prototype, "pill", 2);
__decorateClass([
  n({ type: Boolean })
], NuTag.prototype, "removable", 2);

export {
  NuTag
};
