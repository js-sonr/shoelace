import {
  NuRadioGroup
} from "./chunk.CQIEM6UZ.js";

// src/react/radio-group/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-radio-group";
NuRadioGroup.define("nu-radio-group");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuRadioGroup,
  react: React,
  events: {
    onNuChange: "nu-change",
    onNuInput: "nu-input",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuRadioGroup"
});
var radio_group_default = reactWrapper;

export {
  radio_group_default
};
