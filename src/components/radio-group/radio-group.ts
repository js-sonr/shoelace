import NuRadioGroup from './radio-group.component.js';

export * from './radio-group.component.js';
export default NuRadioGroup;

NuRadioGroup.define('nu-radio-group');

declare global {
  interface HTMLElementTagNameMap {
    'nu-radio-group': NuRadioGroup;
  }
}
