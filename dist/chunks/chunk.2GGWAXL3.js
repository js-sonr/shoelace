import {
  NuDropdown
} from "./chunk.PUP5YOSG.js";

// src/react/dropdown/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-dropdown";
NuDropdown.define("nu-dropdown");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuDropdown,
  react: React,
  events: {
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide"
  },
  displayName: "NuDropdown"
});
var dropdown_default = reactWrapper;

export {
  dropdown_default
};
