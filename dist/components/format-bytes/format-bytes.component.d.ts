import NebulaElement from '../../internal/nebula-element.js';
/**
 * @summary Formats a number as a human readable bytes value.
 * @documentation https://nebulaui.org/components/format-bytes
 * @status stable
 * @since 2.0
 */
export default class NuFormatBytes extends NebulaElement {
    private readonly localize;
    /** The number to format in bytes. */
    value: number;
    /** The type of unit to display. */
    unit: 'byte' | 'bit';
    /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
    display: 'long' | 'short' | 'narrow';
    render(): string;
}
