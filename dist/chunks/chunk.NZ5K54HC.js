import {
  NuInclude
} from "./chunk.OH2AT2GS.js";

// src/react/include/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-include";
NuInclude.define("nu-include");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuInclude,
  react: React,
  events: {
    onNuLoad: "nu-load",
    onNuError: "nu-error"
  },
  displayName: "NuInclude"
});
var include_default = reactWrapper;

export {
  include_default
};
