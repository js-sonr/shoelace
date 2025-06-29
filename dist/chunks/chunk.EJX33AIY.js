import {
  NuColorPicker
} from "./chunk.7CPBSVVZ.js";

// src/react/color-picker/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-color-picker";
NuColorPicker.define("nu-color-picker");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuColorPicker,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuChange: "nu-change",
    onNuFocus: "nu-focus",
    onNuInput: "nu-input",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuColorPicker"
});
var color_picker_default = reactWrapper;

export {
  color_picker_default
};
