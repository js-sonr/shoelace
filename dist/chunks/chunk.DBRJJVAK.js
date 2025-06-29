import {
  NuButton
} from "./chunk.7DBFJEEQ.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-button";
NuButton.define("nu-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuButton,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuFocus: "nu-focus",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuButton"
});
var button_default = reactWrapper;

export {
  button_default
};
