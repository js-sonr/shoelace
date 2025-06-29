import {
  NuAnimatedImage
} from "./chunk.6TSZKBD7.js";

// src/react/animated-image/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-animated-image";
NuAnimatedImage.define("nu-animated-image");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuAnimatedImage,
  react: React,
  events: {
    onNuLoad: "nu-load",
    onNuError: "nu-error"
  },
  displayName: "NuAnimatedImage"
});
var animated_image_default = reactWrapper;

export {
  animated_image_default
};
