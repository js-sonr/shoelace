import {
  NuTabGroup
} from "./chunk.UDIGYEOB.js";

// src/react/tab-group/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-tab-group";
NuTabGroup.define("nu-tab-group");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTabGroup,
  react: React,
  events: {
    onNuTabShow: "nu-tab-show",
    onNuTabHide: "nu-tab-hide"
  },
  displayName: "NuTabGroup"
});
var tab_group_default = reactWrapper;

export {
  tab_group_default
};
