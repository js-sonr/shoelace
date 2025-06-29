import {
  NuIcon
} from "./chunk.I7KSEQQV.js";

// src/react/icon/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-icon";
NuIcon.define("nu-icon");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuIcon,
  react: React,
  events: {
    onNuLoad: "nu-load",
    onNuError: "nu-error"
  },
  displayName: "NuIcon"
});
var icon_default = reactWrapper;

export {
  icon_default
};
