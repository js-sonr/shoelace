import {
  menu_label_styles_default
} from "./chunk.Z4S6B4NH.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";

// src/components/menu-label/menu-label.component.ts
var NuMenuLabel = class extends NebulaElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
};
NuMenuLabel.styles = [component_styles_default, menu_label_styles_default];

export {
  NuMenuLabel
};
