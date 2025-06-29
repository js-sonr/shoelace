import {
  NuTextarea
} from "./chunk.3Z2RUB5Y.js";

// src/react/textarea/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-textarea";
NuTextarea.define("nu-textarea");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTextarea,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuChange: "nu-change",
    onNuFocus: "nu-focus",
    onNuInput: "nu-input",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuTextarea"
});
var textarea_default = reactWrapper;

export {
  textarea_default
};
