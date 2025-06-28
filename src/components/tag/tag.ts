import NuTag from './tag.component.js';

export * from './tag.component.js';
export default NuTag;

NuTag.define('nu-tag');

declare global {
  interface HTMLElementTagNameMap {
    'nu-tag': NuTag;
  }
}
