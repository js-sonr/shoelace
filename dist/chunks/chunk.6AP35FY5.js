import {
  NuMutationObserver
} from "./chunk.B2FFOSS2.js";

// src/react/mutation-observer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-mutation-observer";
NuMutationObserver.define("nu-mutation-observer");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuMutationObserver,
  react: React,
  events: {
    onNuMutation: "nu-mutation"
  },
  displayName: "NuMutationObserver"
});
var mutation_observer_default = reactWrapper;

export {
  mutation_observer_default
};
