import {
  NuRadio
} from "./chunk.WD32JKPG.js";

// src/react/radio/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-radio";
NuRadio.define("nu-radio");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuRadio,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuFocus: "nu-focus"
  },
  displayName: "NuRadio"
});
var radio_default = reactWrapper;

export {
  radio_default
};
