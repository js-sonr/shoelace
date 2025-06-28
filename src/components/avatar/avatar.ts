import NuAvatar from './avatar.component.js';

export * from './avatar.component.js';
export default NuAvatar;

NuAvatar.define('nu-avatar');

declare global {
  interface HTMLElementTagNameMap {
    'nu-avatar': NuAvatar;
  }
}
