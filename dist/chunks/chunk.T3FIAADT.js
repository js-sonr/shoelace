import {
  NuCarousel
} from "./chunk.6DSNLJB5.js";

// src/react/carousel/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-carousel";
NuCarousel.define("nu-carousel");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuCarousel,
  react: React,
  events: {
    onNuSlideChange: "nu-slide-change"
  },
  displayName: "NuCarousel"
});
var carousel_default = reactWrapper;

export {
  carousel_default
};
