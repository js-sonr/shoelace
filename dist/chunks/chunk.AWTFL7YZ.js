import {
  NuTab
} from "./chunk.7VIEIUTZ.js";

// src/react/tab/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-tab";
NuTab.define("nu-tab");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTab,
  react: React,
  events: {
    onNuClose: "nu-close"
  },
  displayName: "NuTab"
});
var tab_default = reactWrapper;

export {
  tab_default
};
