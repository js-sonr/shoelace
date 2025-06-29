import {
  NuListView
} from "./chunk.RT3ZM73H.js";

// src/react/list-view/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-list-view";
NuListView.define("nu-list-view");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuListView,
  react: React,
  events: {
    onNuSortChange: "nu-sort-change",
    onNuItemSelect: "nu-item-select",
    onNuLoadMore: "nu-load-more"
  },
  displayName: "NuListView"
});
var list_view_default = reactWrapper;

export {
  list_view_default
};
