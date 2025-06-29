import {
  NuRadioButton
} from "./chunk.USLSELRC.js";

// src/react/radio-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-radio-button";
NuRadioButton.define("nu-radio-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuRadioButton,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuFocus: "nu-focus"
  },
  displayName: "NuRadioButton"
});
var radio_button_default = reactWrapper;

export {
  radio_button_default
};
