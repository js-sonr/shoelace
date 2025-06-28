import NuRadioButton from './radio-button.component.js';

export * from './radio-button.component.js';
export default NuRadioButton;

NuRadioButton.define('nu-radio-button');

declare global {
  interface HTMLElementTagNameMap {
    'nu-radio-button': NuRadioButton;
  }
}
