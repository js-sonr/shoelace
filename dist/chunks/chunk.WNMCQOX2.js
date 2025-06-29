import {
  NuLineChart
} from "./chunk.MYR4KDIF.js";

// src/react/line-chart/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-line-chart";
NuLineChart.define("nu-line-chart");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuLineChart,
  react: React,
  events: {
    onNuDataPointHover: "nu-data-point-hover",
    onNuDataPointClick: "nu-data-point-click",
    onNuLineHover: "nu-line-hover"
  },
  displayName: "NuLineChart"
});
var line_chart_default = reactWrapper;

export {
  line_chart_default
};
