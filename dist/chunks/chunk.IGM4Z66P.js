import {
  NuDrawer
} from "./chunk.XIL7PNRZ.js";

// src/react/drawer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-drawer";
NuDrawer.define("nu-drawer");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuDrawer,
  react: React,
  events: {
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide",
    onNuInitialFocus: "nu-initial-focus",
    onNuRequestClose: "nu-request-close"
  },
  displayName: "NuDrawer"
});
var drawer_default = reactWrapper;

export {
  drawer_default
};
