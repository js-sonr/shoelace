import {
  avatar_styles_default
} from "./chunk.JJQ7XL4O.js";
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

// src/components/avatar/avatar.component.ts
var NuAvatar = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  render() {
    const avatarWithImage = x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${() => this.hasError = true}"
      />
    `;
    let avatarWithoutImage = x``;
    if (this.initials) {
      avatarWithoutImage = x`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <nu-icon name="person-fill" library="system"></nu-icon>
          </slot>
        </div>
      `;
    }
    return x`
      <div
        part="base"
        class=${e({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
  }
};
NuAvatar.styles = [component_styles_default, avatar_styles_default];
NuAvatar.dependencies = {
  "nu-icon": NuIcon
};
__decorateClass([
  r()
], NuAvatar.prototype, "hasError", 2);
__decorateClass([
  n()
], NuAvatar.prototype, "image", 2);
__decorateClass([
  n()
], NuAvatar.prototype, "label", 2);
__decorateClass([
  n()
], NuAvatar.prototype, "initials", 2);
__decorateClass([
  n()
], NuAvatar.prototype, "loading", 2);
__decorateClass([
  n({ reflect: true })
], NuAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], NuAvatar.prototype, "handleImageChange", 1);

export {
  NuAvatar
};
