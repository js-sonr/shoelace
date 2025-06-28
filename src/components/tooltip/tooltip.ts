import NuTooltip from './tooltip.component.js';

export * from './tooltip.component.js';
export default NuTooltip;

NuTooltip.define('nu-tooltip');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tooltip': NuTooltip;
  }
}
