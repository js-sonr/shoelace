import {
  NuTooltip
} from "./chunk.77SON2CP.js";

// src/react/tooltip/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-tooltip";
NuTooltip.define("nu-tooltip");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTooltip,
  react: React,
  events: {
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide"
  },
  displayName: "NuTooltip"
});
var tooltip_default = reactWrapper;

export {
  tooltip_default
};
