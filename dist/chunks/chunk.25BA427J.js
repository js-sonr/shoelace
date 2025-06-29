import {
  NuPieChart
} from "./chunk.3FQRFYDL.js";

// src/react/pie-chart/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "nu-pie-chart";
NuPieChart.define("nu-pie-chart");
var reactWrapper = createComponent({
  tagName,
  elementClass: NuPieChart,
  react: React,
  events: {
    onNuSliceHover: "nu-slice-hover",
    onNuSliceClick: "nu-slice-click"
  },
  displayName: "NuPieChart"
});
var pie_chart_default = reactWrapper;

export {
  pie_chart_default
};
