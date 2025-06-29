import {
  NuMenu
} from "./chunk.PJ3OTSUU.js";

// src/react/menu/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-menu";
NuMenu.define("nu-menu");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuMenu,
  react: React,
  events: {
    onNuSelect: "nu-select"
  },
  displayName: "NuMenu"
});
var menu_default = reactWrapper;

export {
  menu_default
};
