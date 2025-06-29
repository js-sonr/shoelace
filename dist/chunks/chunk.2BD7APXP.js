import {
  NuAlert
} from "./chunk.EERKLWQ7.js";

// src/react/alert/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-alert";
NuAlert.define("nu-alert");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuAlert,
  react: React,
  events: {
    onNuShow: "nu-show",
    onNuAfterShow: "nu-after-show",
    onNuHide: "nu-hide",
    onNuAfterHide: "nu-after-hide"
  },
  displayName: "NuAlert"
});
var alert_default = reactWrapper;

export {
  alert_default
};
