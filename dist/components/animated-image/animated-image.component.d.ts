import NebulaElement from '../../internal/nebula-element.js';
import NuIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 * @documentation https://nebulaui.org/components/animated-image
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @event nu-load - Emitted when the image loads successfully.
 * @event nu-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<nu-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<nu-icon>`.
 *
 * @part control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
export default class NuAnimatedImage extends NebulaElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'nu-icon': typeof NuIcon;
    };
    animatedImage: HTMLImageElement;
    frozenFrame: string;
    isLoaded: boolean;
    /** The path to the image to load. */
    src: string;
    /** A description of the image used by assistive devices. */
    alt: string;
    /** Plays the animation. When this attribute is remove, the animation will pause. */
    play: boolean;
    private handleClick;
    private handleLoad;
    private handleError;
    handlePlayChange(): void;
    handleSrcChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
