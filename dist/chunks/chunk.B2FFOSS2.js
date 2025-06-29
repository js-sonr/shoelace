import {
  mutation_observer_styles_default
} from "./chunk.JYHMI7KY.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/mutation-observer/mutation-observer.component.ts
var NuMutationObserver = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.handleMutation = (mutationList) => {
      this.emit("nu-mutation", {
        detail: { mutationList }
      });
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver = new MutationObserver(this.handleMutation);
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch (e) {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  render() {
    return x` <slot></slot> `;
  }
};
NuMutationObserver.styles = [component_styles_default, mutation_observer_styles_default];
__decorateClass([
  n({ reflect: true })
], NuMutationObserver.prototype, "attr", 2);
__decorateClass([
  n({ attribute: "attr-old-value", type: Boolean, reflect: true })
], NuMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  n({ attribute: "char-data", type: Boolean, reflect: true })
], NuMutationObserver.prototype, "charData", 2);
__decorateClass([
  n({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], NuMutationObserver.prototype, "charDataOldValue", 2);
__decorateClass([
  n({ attribute: "child-list", type: Boolean, reflect: true })
], NuMutationObserver.prototype, "childList", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuMutationObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], NuMutationObserver.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("attr", { waitUntilFirstUpdate: true }),
  watch("attr-old-value", { waitUntilFirstUpdate: true }),
  watch("char-data", { waitUntilFirstUpdate: true }),
  watch("char-data-old-value", { waitUntilFirstUpdate: true }),
  watch("childList", { waitUntilFirstUpdate: true })
], NuMutationObserver.prototype, "handleChange", 1);

export {
  NuMutationObserver
};
