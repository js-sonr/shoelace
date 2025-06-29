import {
  NuDetails
} from "./chunk.5S72EMUU.js";

// src/react/details/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-details";
NuDetails.define("nu-details");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuDetails,
  react: React,
  events: {
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide"
  },
  displayName: "NuDetails"
});
var details_default = reactWrapper;

export {
  details_default
};
