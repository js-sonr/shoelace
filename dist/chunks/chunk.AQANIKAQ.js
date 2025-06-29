import {
  card_styles_default
} from "./chunk.ANXAQZ6G.js";
import {
  HasSlotController
} from "./chunk.NYIIDP5N.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";

// src/components/card/card.component.ts
var NuCard = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
NuCard.styles = [component_styles_default, card_styles_default];

export {
  NuCard
};
