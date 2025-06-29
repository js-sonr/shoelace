import {
  NuRegisterButton
} from "./chunk.7FBF6NNT.js";

// src/react/register-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-register-button";
NuRegisterButton.define("nu-register-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuRegisterButton,
  react: React,
  events: {
    onNuRegisterStart: "nu-register-start",
    onNuRegisterSuccess: "nu-register-success",
    onNuRegisterError: "nu-register-error"
  },
  displayName: "NuRegisterButton"
});
var register_button_default = reactWrapper;

export {
  register_button_default
};
