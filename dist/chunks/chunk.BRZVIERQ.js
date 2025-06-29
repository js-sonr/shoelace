import {
  NuPopup
} from "./chunk.VXIF44GV.js";

// src/react/popup/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-popup";
NuPopup.define("nu-popup");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuPopup,
  react: React,
  events: {
    onNuReposition: "nu-reposition"
  },
  displayName: "NuPopup"
});
var popup_default = reactWrapper;

export {
  popup_default
};
