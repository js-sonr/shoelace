import {
  NuListItem
} from "./chunk.5GWA4EGG.js";

// src/react/list-item/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-list-item";
NuListItem.define("nu-list-item");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuListItem,
  react: React,
  events: {
    onNuItemClick: "nu-item-click",
    onNuItemSelect: "nu-item-select"
  },
  displayName: "NuListItem"
});
var list_item_default = reactWrapper;

export {
  list_item_default
};
