import {
  NuRating
} from "./chunk.5O72DUJP.js";

// src/react/rating/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-rating";
NuRating.define("nu-rating");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuRating,
  react: React,
  events: {
    onNuChange: "nu-change",
    onNuHover: "nu-hover"
  },
  displayName: "NuRating"
});
var rating_default = reactWrapper;

export {
  rating_default
};
