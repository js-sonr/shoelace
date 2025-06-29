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
  checkbox_styles_default
} from "./chunk.YODVAYNK.js";
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
  n,
  r
} from "./chunk.ZEQQFH7C.js";
import {
  x
} from "./chunk.3KZKYYLP.js";
import {
  __decorateClass
} from "./chunk.TGTXVMVL.js";

// src/components/checkbox/checkbox.component.ts
var NuCheckbox = class extends NebulaElement {
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
    this.indeterminate = false;
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("nu-change");
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
  handleFocus() {
    this.hasFocus = true;
    this.emit("nu-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
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
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
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
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o(this.value)}
            .indeterminate=${l(this.indeterminate)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? x`
                  <nu-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></nu-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? x`
                  <nu-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></nu-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
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
NuCheckbox.styles = [component_styles_default, form_control_styles_default, checkbox_styles_default];
NuCheckbox.dependencies = { "nu-icon": NuIcon };
__decorateClass([
  e2('input[type="checkbox"]')
], NuCheckbox.prototype, "input", 2);
__decorateClass([
  r()
], NuCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  n()
], NuCheckbox.prototype, "title", 2);
__decorateClass([
  n()
], NuCheckbox.prototype, "name", 2);
__decorateClass([
  n()
], NuCheckbox.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], NuCheckbox.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuCheckbox.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuCheckbox.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  defaultValue("checked")
], NuCheckbox.prototype, "defaultChecked", 2);
__decorateClass([
  n({ reflect: true })
], NuCheckbox.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], NuCheckbox.prototype, "required", 2);
__decorateClass([
  n({ attribute: "help-text" })
], NuCheckbox.prototype, "helpText", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], NuCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], NuCheckbox.prototype, "handleStateChange", 1);

export {
  NuCheckbox
};
