import {
  NuCandleChart
} from "./chunk.ZEOE7243.js";

// src/react/candle-chart/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-candle-chart";
NuCandleChart.define("nu-candle-chart");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuCandleChart,
  react: React,
  events: {
    onNuCandleHover: "nu-candle-hover",
    onNuCandleClick: "nu-candle-click"
  },
  displayName: "NuCandleChart"
});
var candle_chart_default = reactWrapper;

export {
  candle_chart_default
};
