import NebulaElement from '../../internal/nebula-element.js';
import NuIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 * @documentation https://nebulaui.org/components/breadcrumb
 * @status stable
 * @since 2.0
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with `<nu-icon>`.
 *
 * @dependency sl-icon
 *
 * @csspart base - The component's base wrapper.
 */
export default class NuBreadcrumb extends NebulaElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'nu-icon': typeof NuIcon;
    };
    private readonly localize;
    private separatorDir;
    defaultSlot: HTMLSlotElement;
    separatorSlot: HTMLSlotElement;
    /**
     * The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
     * screen readers and other assistive devices to provide more context for users.
     */
    label: string;
    private getSeparator;
    private handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
