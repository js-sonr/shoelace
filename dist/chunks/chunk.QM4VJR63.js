import {
  animation_styles_default
} from "./chunk.WW37EEDH.js";
import {
  dist_exports
} from "./chunk.IX3ENJIL.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  n,
  r2 as r
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/animation/animation.component.ts
var NuAnimation = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
    this.handleAnimationFinish = () => {
      this.play = false;
      this.hasStarted = false;
      this.emit("nu-finish");
    };
    this.handleAnimationCancel = () => {
      this.play = false;
      this.hasStarted = false;
      this.emit("nu-cancel");
    };
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    var _a, _b;
    return (_b = (_a = this.animation) == null ? void 0 : _a.currentTime) != null ? _b : 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    var _a, _b;
    const easing = (_a = dist_exports.easings[this.easing]) != null ? _a : this.easing;
    const keyframes = (_b = this.keyframes) != null ? _b : dist_exports[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      this.emit("nu-start");
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        this.emit("nu-start");
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.finish();
  }
  render() {
    return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
NuAnimation.styles = [component_styles_default, animation_styles_default];
__decorateClass([
  r("slot")
], NuAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  n()
], NuAnimation.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuAnimation.prototype, "play", 2);
__decorateClass([
  n({ type: Number })
], NuAnimation.prototype, "delay", 2);
__decorateClass([
  n()
], NuAnimation.prototype, "direction", 2);
__decorateClass([
  n({ type: Number })
], NuAnimation.prototype, "duration", 2);
__decorateClass([
  n()
], NuAnimation.prototype, "easing", 2);
__decorateClass([
  n({ attribute: "end-delay", type: Number })
], NuAnimation.prototype, "endDelay", 2);
__decorateClass([
  n()
], NuAnimation.prototype, "fill", 2);
__decorateClass([
  n({ type: Number })
], NuAnimation.prototype, "iterations", 2);
__decorateClass([
  n({ attribute: "iteration-start", type: Number })
], NuAnimation.prototype, "iterationStart", 2);
__decorateClass([
  n({ attribute: false })
], NuAnimation.prototype, "keyframes", 2);
__decorateClass([
  n({ attribute: "playback-rate", type: Number })
], NuAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], NuAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], NuAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], NuAnimation.prototype, "handlePlaybackRateChange", 1);

export {
  NuAnimation
};
