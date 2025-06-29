import {
  NuResizeObserver
} from "./chunk.JX7P3DY5.js";

// src/react/resize-observer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-resize-observer";
NuResizeObserver.define("nu-resize-observer");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuResizeObserver,
  react: React,
  events: {
    onNuResize: "nu-resize"
  },
  displayName: "NuResizeObserver"
});
var resize_observer_default = reactWrapper;

export {
  resize_observer_default
};
