import {
  NuTreeItem
} from "./chunk.FOJRJDRP.js";

// src/react/tree-item/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-tree-item";
NuTreeItem.define("nu-tree-item");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTreeItem,
  react: React,
  events: {
    onNuExpand: "nu-expand",
    onNuAfterExpand: "nu-after-expand",
    onNuCollapse: "nu-collapse",
    onNuAfterCollapse: "nu-after-collapse",
    onNuLazyChange: "nu-lazy-change",
    onNuLazyLoad: "nu-lazy-load"
  },
  displayName: "NuTreeItem"
});
var tree_item_default = reactWrapper;

export {
  tree_item_default
};
