import {
  NuSwitch
} from "./chunk.Y5F3AL5P.js";

// src/react/switch/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-switch";
NuSwitch.define("nu-switch");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuSwitch,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuChange: "nu-change",
    onNuInput: "nu-input",
    onNuFocus: "nu-focus",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuSwitch"
});
var switch_default = reactWrapper;

export {
  switch_default
};
