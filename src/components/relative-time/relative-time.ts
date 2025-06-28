import NuRelativeTime from './relative-time.component.js';

export * from './relative-time.component.js';
export default NuRelativeTime;

NuRelativeTime.define('nu-relative-time');

declare global {
  interface HTMLElementTagNameMap {
    'nu-relative-time': NuRelativeTime;
  }
}
