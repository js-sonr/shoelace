import {
  NuCopyButton
} from "./chunk.E6RSPFQP.js";

// src/react/copy-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-copy-button";
NuCopyButton.define("nu-copy-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuCopyButton,
  react: React,
  events: {
    onNuCopy: "nu-copy",
    onNuError: "nu-error"
  },
  displayName: "NuCopyButton"
});
var copy_button_default = reactWrapper;

export {
  copy_button_default
};
