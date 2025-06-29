import {
  spinner_styles_default
} from "./chunk.AAVZUTUZ.js";
import {
  LocalizeController
} from "./chunk.YHO7N2FX.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";

// src/components/spinner/spinner.component.ts
var NuSpinner = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
NuSpinner.styles = [component_styles_default, spinner_styles_default];

export {
  NuSpinner
};
