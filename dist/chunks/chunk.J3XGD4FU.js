import {
  NuCard
} from "./chunk.AQANIKAQ.js";

// src/react/card/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "nu-card";
NuCard.define("nu-card");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuCard,
  react: React,
  events: {},
  displayName: "NuCard"
});
var card_default = reactWrapper;

export {
  card_default
};
