import NebulaElement from '../../internal/nebula-element.js';
import NuIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Avatars are used to represent a person or object.
 * @documentation https://nebulaui.org/components/avatar
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot icon - The default icon to use when no image or initials are present. Works best with `<nu-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the avatar's icon.
 * @csspart initials - The container that wraps the avatar's initials.
 * @csspart image - The avatar image. Only shown when the `image` attribute is set.
 *
 * @cssproperty --size - The size of the avatar.
 */
export default class NuAvatar extends NebulaElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'nu-icon': typeof NuIcon;
    };
    private hasError;
    /** The image source to use for the avatar. */
    image: string;
    /** A label to use to describe the avatar to assistive devices. */
    label: string;
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    initials: string;
    /** Indicates how the browser should load the image. */
    loading: 'eager' | 'lazy';
    /** The shape of the avatar. */
    shape: 'circle' | 'square' | 'rounded';
    handleImageChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
