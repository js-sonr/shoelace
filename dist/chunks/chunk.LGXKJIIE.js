import {
  NuLoginButton
} from "./chunk.SRXFEEID.js";

// src/react/login-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-login-button";
NuLoginButton.define("nu-login-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuLoginButton,
  react: React,
  events: {
    onNuLoginStart: "nu-login-start",
    onNuLoginSuccess: "nu-login-success",
    onNuLoginError: "nu-login-error"
  },
  displayName: "NuLoginButton"
});
var login_button_default = reactWrapper;

export {
  login_button_default
};
