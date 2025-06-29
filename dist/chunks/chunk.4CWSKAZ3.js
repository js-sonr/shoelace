import {
  NuRange
} from "./chunk.W2B6TPST.js";

// src/react/range/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-range";
NuRange.define("nu-range");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuRange,
  react: React,
  events: {
    onNuBlur: "nu-blur",
    onNuChange: "nu-change",
    onNuFocus: "nu-focus",
    onNuInput: "nu-input",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuRange"
});
var range_default = reactWrapper;

export {
  range_default
};
