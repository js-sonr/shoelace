import {
  include_styles_default
} from "./chunk.JUQXXKRR.js";
import {
  requestInclude
} from "./chunk.XNEONNEJ.js";
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

// src/components/include/include.component.ts
var NuInclude = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("nu-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("nu-load");
    } catch (e) {
      this.emit("nu-error", { detail: { status: -1 } });
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
NuInclude.styles = [component_styles_default, include_styles_default];
__decorateClass([
  n()
], NuInclude.prototype, "src", 2);
__decorateClass([
  n()
], NuInclude.prototype, "mode", 2);
__decorateClass([
  n({ attribute: "allow-scripts", type: Boolean })
], NuInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], NuInclude.prototype, "handleSrcChange", 1);

export {
  NuInclude
};
