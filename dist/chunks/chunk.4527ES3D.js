import {
  NuTree
} from "./chunk.QTWL2HFH.js";

// src/react/tree/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-tree";
NuTree.define("nu-tree");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTree,
  react: React,
  events: {
    onNuSelectionChange: "nu-selection-change"
  },
  displayName: "NuTree"
});
var tree_default = reactWrapper;

export {
  tree_default
};
