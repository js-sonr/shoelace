import {
  NuCheckbox
} from "./chunk.25V2B2PL.js";

// src/react/checkbox/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-checkbox";
NuCheckbox.define("nu-checkbox");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuCheckbox,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuChange: "nu-change",
    onNuFocus: "nu-focus",
    onNuInput: "nu-input",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuCheckbox"
});
var checkbox_default = reactWrapper;

export {
  checkbox_default
};
