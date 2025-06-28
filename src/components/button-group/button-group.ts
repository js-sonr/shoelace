import NuButtonGroup from './button-group.component.js';

export * from './button-group.component.js';
export default NuButtonGroup;

NuButtonGroup.define('nu-button-group');

declare global {
  interface HTMLElementTagNameMap {
    'nu-button-group': NuButtonGroup;
  }
}
