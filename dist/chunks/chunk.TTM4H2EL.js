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
  e,
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  animated_image_styles_default
} from "./chunk.GF5QJUBP.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/animated-image/animated-image.component.ts
var NuAnimatedImage = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      this.emit("nu-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    this.emit("nu-error");
  }
  handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return x`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? x`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><nu-icon name="play-fill" library="system"></nu-icon></slot>
                <slot name="pause-icon"><nu-icon name="pause-fill" library="system"></nu-icon></slot>
              </div>
            ` : ""}
      </div>
    `;
  }
};
NuAnimatedImage.styles = [component_styles_default, animated_image_styles_default];
NuAnimatedImage.dependencies = { "nu-icon": NuIcon };
__decorateClass([
  e(".animated-image__animated")
], NuAnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  r()
], NuAnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  r()
], NuAnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  n()
], NuAnimatedImage.prototype, "src", 2);
__decorateClass([
  n()
], NuAnimatedImage.prototype, "alt", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuAnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play", { waitUntilFirstUpdate: true })
], NuAnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], NuAnimatedImage.prototype, "handleSrcChange", 1);

export {
  NuAnimatedImage
};
