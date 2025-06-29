import {
  NuAnimation
} from "./chunk.QM4VJR63.js";

// src/react/animation/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-animation";
NuAnimation.define("nu-animation");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuAnimation,
  react: React,
  events: {
    onNuCancel: "nu-cancel",
    onNuFinish: "nu-finish",
    onNuStart: "nu-start"
  },
  displayName: "NuAnimation"
});
var animation_default = reactWrapper;

export {
  animation_default
};
