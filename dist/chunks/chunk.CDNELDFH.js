import {
  NuSelect
} from "./chunk.TVBMGKKO.js";

// src/react/select/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-select";
NuSelect.define("nu-select");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuSelect,
  react: React,
  events: {
    onNuChange: "nu-change",
    onNuClear: "nu-clear",
    onNuInput: "nu-input",
    onNuFocus: "nu-focus",
    onNuBlur: "nu-blur",
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide",
    onNuInvalid: "nu-invalid"
  },
  displayName: "NuSelect"
});
var select_default = reactWrapper;

export {
  select_default
};
