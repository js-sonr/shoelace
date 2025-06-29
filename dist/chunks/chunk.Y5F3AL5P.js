import {
  switch_styles_default
} from "./chunk.5GJMIRGL.js";
import {
  l
} from "./chunk.PIWTDP6N.js";
import {
  defaultValue
} from "./chunk.JWAT57AA.js";
import {
  form_control_styles_default
} from "./chunk.INDXJCZU.js";
import {
  FormControlController
} from "./chunk.F5PEQEP2.js";
import {
  o
} from "./chunk.RAPJK3SC.js";
import {
  HasSlotController
} from "./chunk.NYIIDP5N.js";
import {
  e
} from "./chunk.Y2VDT5HG.js";
import {
  watch
} from "./chunk.KYKJHNMB.js";
import {
  component_styles_default
} from "./chunk.XTL2AE6H.js";
import {
  NebulaElement,
  e as e2,
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/switch/switch.component.ts
var NuSwitch = class extends NebulaElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new HasSlotController(this, "help-text");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
    this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("nu-blur");
  }
  handleInput() {
    this.emit("nu-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleClick() {
    this.checked = !this.checked;
    this.emit("nu-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("nu-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.emit("nu-change");
      this.emit("nu-input");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.emit("nu-change");
      this.emit("nu-input");
    }
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(true);
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
      <div
        class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${e({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o(this.value)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
NuSwitch.styles = [component_styles_default, form_control_styles_default, switch_styles_default];
__decorateClass([
  e2('input[type="checkbox"]')
], NuSwitch.prototype, "input", 2);
__decorateClass([
  r()
], NuSwitch.prototype, "hasFocus", 2);
__decorateClass([
  n()
], NuSwitch.prototype, "title", 2);
__decorateClass([
  n()
], NuSwitch.prototype, "name", 2);
__decorateClass([
  n()
], NuSwitch.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], NuSwitch.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuSwitch.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuSwitch.prototype, "checked", 2);
__decorateClass([
  defaultValue("checked")
], NuSwitch.prototype, "defaultChecked", 2);
__decorateClass([
  n({ reflect: true })
], NuSwitch.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuSwitch.prototype, "required", 2);
__decorateClass([
  n({ attribute: "help-text" })
], NuSwitch.prototype, "helpText", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], NuSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], NuSwitch.prototype, "handleDisabledChange", 1);

export {
  NuSwitch
};
