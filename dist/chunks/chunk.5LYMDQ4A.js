import {
  NuImageComparer
} from "./chunk.4MRQ4IRR.js";

// src/react/image-comparer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-image-comparer";
NuImageComparer.define("nu-image-comparer");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuImageComparer,
  react: React,
  events: {
    onNuChange: "nu-change"
  },
  displayName: "NuImageComparer"
});
var image_comparer_default = reactWrapper;

export {
  image_comparer_default
};
