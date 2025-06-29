import {
  visually_hidden_styles_default
} from "./chunk.FJ4DW577.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";

// src/components/visually-hidden/visually-hidden.component.ts
var NuVisuallyHidden = class extends NebulaElement {
  render() {
    return x` <slot></slot> `;
  }
};
NuVisuallyHidden.styles = [component_styles_default, visually_hidden_styles_default];

export {
  NuVisuallyHidden
};
