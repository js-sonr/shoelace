import {
  NuTag
} from "./chunk.WZUKNLAF.js";

// src/react/tag/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-tag";
NuTag.define("nu-tag");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuTag,
  react: React,
  events: {
    onNuRemove: "nu-remove"
  },
  displayName: "NuTag"
});
var tag_default = reactWrapper;

export {
  tag_default
};
