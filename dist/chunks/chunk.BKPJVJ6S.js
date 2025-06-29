import {
  NuAreaChart
} from "./chunk.NX4B65HE.js";

// src/react/area-chart/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-area-chart";
NuAreaChart.define("nu-area-chart");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuAreaChart,
  react: React,
  events: {
    onNuDataPointHover: "nu-data-point-hover",
    onNuDataPointClick: "nu-data-point-click"
  },
  displayName: "NuAreaChart"
});
var area_chart_default = reactWrapper;

export {
  area_chart_default
};
