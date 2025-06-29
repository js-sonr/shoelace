import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import NebulaElement from '../../internal/nebula-element.js';

/**
 * @summary Formats a number as a human readable bytes value.
 * @documentation https://nebulaui.org/components/format-bytes
 * @status stable
 * @since 2.0
 */
export default class NuFormatBytes extends NebulaElement {
  private readonly localize = new LocalizeController(this);

  /** The number to format in bytes. */
  @property({ type: Number }) value = 0;

  /** The type of unit to display. */
  @property() unit: 'byte' | 'bit' = 'byte';

  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  @property() display: 'long' | 'short' | 'narrow' = 'short';

  render() {
    if (isNaN(this.value)) {
      return '';
    }

    const bitPrefixes = ['', 'kilo', 'mega', 'giga', 'tera']; // petabit isn't a supported unit
    const bytePrefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
    const prefix = this.unit === 'bit' ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

    return this.localize.number(valueToFormat, {
      style: 'unit',
      unit,
      unitDisplay: this.display
    });
  }
}
