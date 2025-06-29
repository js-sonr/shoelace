import {
  NuDialog
} from "./chunk.4Q66OVF4.js";

// src/react/dialog/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-dialog";
NuDialog.define("nu-dialog");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuDialog,
  react: React,
  events: {
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide",
    onNuInitialFocus: "nu-initial-focus",
    onNuRequestClose: "nu-request-close"
  },
  displayName: "NuDialog"
});
var dialog_default = reactWrapper;

export {
  dialog_default
};
