import {
  menu_item_styles_default
} from "./chunk.B5BQBH2Z.js";
import {
  SubmenuController
} from "./chunk.PUI7KCDC.js";
import {
  NuPopup
} from "./chunk.VXIF44GV.js";
import {
  NuSpinner
} from "./chunk.DBF4QG6N.js";
import {
  HasSlotController,
  getTextContent
} from "./chunk.NYIIDP5N.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  NuIcon
} from "./chunk.I7KSEQQV.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  e as e2,
  n
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/menu-item/menu-item.component.ts
var NuMenuItem = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.loading = false;
    this.disabled = false;
    this.hasSlotController = new HasSlotController(this, "submenu");
    this.submenuController = new SubmenuController(this, this.hasSlotController);
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return x`
      <div
        id="anchor"
        part="base"
        class=${e({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <nu-icon name="check" library="system" aria-hidden="true"></nu-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <nu-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></nu-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? x` <nu-spinner part="spinner" exportparts="base:spinner__base"></nu-spinner> ` : ""}
      </div>
    `;
  }
};
NuMenuItem.styles = [component_styles_default, menu_item_styles_default];
NuMenuItem.dependencies = {
  "nu-icon": NuIcon,
  "nu-popup": NuPopup,
  "nu-spinner": NuSpinner
};
__decorateClass([
  e2("slot:not([name])")
], NuMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  e2(".menu-item")
], NuMenuItem.prototype, "menuItem", 2);
__decorateClass([
  n()
], NuMenuItem.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuMenuItem.prototype, "checked", 2);
__decorateClass([
  n()
], NuMenuItem.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuMenuItem.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], NuMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], NuMenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], NuMenuItem.prototype, "handleTypeChange", 1);

export {
  NuMenuItem
};
