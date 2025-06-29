import {
  NuSplitPanel
} from "./chunk.TTYDFN64.js";

// src/react/split-panel/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-split-panel";
NuSplitPanel.define("nu-split-panel");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuSplitPanel,
  react: React,
  events: {
    onNuReposition: "nu-reposition"
  },
  displayName: "NuSplitPanel"
});
var split_panel_default = reactWrapper;

export {
  split_panel_default
};
