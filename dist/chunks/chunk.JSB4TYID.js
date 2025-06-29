import {
  NuInput
} from "./chunk.PX54GBRW.js";

// src/react/input/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-input";
NuInput.define("nu-input");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuInput,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuChange: "nu-change",
    onNuClear: "nu-clear",
    onNuFocus: "nu-focus",
    onNuInput: "nu-input",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuInput"
});
var input_default = reactWrapper;

export {
  input_default
};
