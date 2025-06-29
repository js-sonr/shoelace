import {
  carousel_item_styles_default
} from "./chunk.GVYIQFAH.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";

// src/components/carousel-item/carousel-item.component.ts
var NuCarouselItem = class extends NebulaElement {
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return x` <slot></slot> `;
  }
};
NuCarouselItem.styles = [component_styles_default, carousel_item_styles_default];

export {
  NuCarouselItem
};
