import { property, state, query } from 'lit/decorators.js';
import { html, svg } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { LocalizeController } from '../../utilities/localize.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './pie-chart.styles.js';
import type { CSSResultGroup } from 'lit';
import { pie, arc, PieArcDatum } from 'd3';

export interface PieChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

/**
 * @summary Pie charts display proportional data as circular segments, ideal for showing portfolio allocations and market share.
 * @documentation https://nebulaui.org/components/pie-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-slice-hover - Emitted when hovering over a pie slice.
 * @event nu-slice-click - Emitted when clicking a pie slice.
 *
 * @slot center - Content to display in the center of a donut chart.
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart slice - The pie slice elements.
 * @csspart label - The slice labels.
 * @csspart center - The center content area for donut charts.
 *
 * @cssproperty --slice-color-1 - The color of the first slice.
 * @cssproperty --slice-color-2 - The color of the second slice.
 * @cssproperty --slice-color-3 - The color of the third slice.
 * @cssproperty --slice-color-4 - The color of the fourth slice.
 * @cssproperty --slice-color-5 - The color of the fifth slice.
 * @cssproperty --slice-color-6 - The color of the sixth slice.
 * @cssproperty --slice-stroke - The stroke color around slices.
 * @cssproperty --slice-stroke-width - The stroke width around slices.
 * @cssproperty --label-color - The color of slice labels.
 * @cssproperty --label-size - The font size of slice labels.
 * @cssproperty --center-text-color - The color of center text.
 */
export default class NuPieChart extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  @query('svg') svg: SVGElement;

  /** The chart data as JSON string or array of data points. */
  @property({ type: String }) data = '[]';

  /** The size of the chart in pixels (width and height). */
  @property({ type: Number }) size = 300;

  /** The inner radius for donut charts (0 for full pie, 0.5-0.8 for donut). */
  @property({ type: Number, attribute: 'inner-radius' }) innerRadius = 0;

  /** The gap between slices in radians. */
  @property({ type: Number }) gap = 0.01;

  /** The corner radius for rounded slice corners. */
  @property({ type: Number, attribute: 'corner-radius' }) cornerRadius = 12;

  /** Whether to show slice labels. */
  @property({ type: Boolean, attribute: 'show-labels' }) showLabels = true;

  /** Whether to show values in labels. */
  @property({ type: Boolean, attribute: 'show-values' }) showValues = true;

  /** The minimum angle (in degrees) required to show labels. */
  @property({ type: Number, attribute: 'min-label-angle' }) minLabelAngle = 20;

  /** Custom center text for donut charts. */
  @property({ attribute: 'center-text' }) centerText = '';

  /** Custom center value for donut charts. */
  @property({ attribute: 'center-value' }) centerValue = '';

  /** Whether to animate the chart on load. */
  @property({ type: Boolean }) animate = true;

  @state() private parsedData: PieChartDataPoint[] = [];

  @watch('data')
  handleDataChange() {
    this.parseData();
    this.requestUpdate();
  }

  private parseData() {
    try {
      const rawData = typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
      this.parsedData = rawData.map((d: any) => ({
        name: String(d.name || d.key || d.label),
        value: Number(d.value),
        color: d.color
      }));
    } catch (error) {
      console.error('Failed to parse chart data:', error);
      this.parsedData = [];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.parseData();
  }

  private getDefaultColors(): string[] {
    return [
      'var(--slice-color-1, #7e4cfe)',
      'var(--slice-color-2, #895cfc)', 
      'var(--slice-color-3, #956bff)',
      'var(--slice-color-4, #a37fff)',
      'var(--slice-color-5, #b291fd)',
      'var(--slice-color-6, #b597ff)'
    ];
  }

  private computeAngle(d: PieArcDatum<PieChartDataPoint>): number {
    return ((d.endAngle - d.startAngle) * 180) / Math.PI;
  }

  private renderChart() {
    if (!this.parsedData.length) {
      return html`<div class="no-data"><slot>No data available</slot></div>`;
    }

    const radius = this.size / 2 - 20; // Account for padding
    const actualInnerRadius = this.innerRadius ? radius * this.innerRadius : 0;
    const lightStrokeEffect = 10;

    // Pie layout and arc generators
    const pieLayout = pie<PieChartDataPoint>()
      .value(d => d.value)
      .padAngle(this.gap);

    const arcGenerator = arc<PieArcDatum<PieChartDataPoint>>()
      .innerRadius(actualInnerRadius)
      .outerRadius(radius)
      .cornerRadius(this.cornerRadius);

    const arcClip = arc<PieArcDatum<PieChartDataPoint>>()
      .innerRadius(actualInnerRadius + lightStrokeEffect / 2)
      .outerRadius(radius)
      .cornerRadius(this.cornerRadius);

    const labelRadius = radius * 0.825;
    const arcLabel = arc<PieArcDatum<PieChartDataPoint>>()
      .innerRadius(labelRadius)
      .outerRadius(labelRadius);

    const arcs = pieLayout(this.parsedData);
    const colors = this.getDefaultColors();

    // Calculate total for percentage
    const total = this.parsedData.reduce((sum, d) => sum + d.value, 0);

    return svg`
      <defs>
        ${arcs.map((d, i) => svg`
          <clipPath id="pie-clip-${this.id || 'default'}-${i}">
            <path d="${arcClip(d) || ''}" />
          </clipPath>
          <linearGradient id="pie-gradient-${this.id || 'default'}-${i}">
            <stop offset="55%" stop-color="${d.data.color || colors[i % colors.length]}" stop-opacity="0.95" />
          </linearGradient>
        `)}
      </defs>

      <!-- Slices -->
      ${arcs.map((d, i) => {
        const angle = this.computeAngle(d);
        let centroid = arcLabel.centroid(d);
        
        // Adjust label position based on slice location
        if (d.endAngle > Math.PI) {
          centroid[0] += 10;
        } else {
          centroid[0] -= 20;
        }

        return svg`
          <g>
            <g clip-path="url(#pie-clip-${this.id || 'default'}-${i})">
              <path
                part="slice"
                class="slice"
                fill="url(#pie-gradient-${this.id || 'default'}-${i})"
                stroke="var(--slice-stroke, rgba(255, 255, 255, 0.2))"
                stroke-width="${lightStrokeEffect}"
                d="${arcGenerator(d) || ''}"
                @click=${() => this.handleSliceClick(d, i)}
                @mouseenter=${() => this.handleSliceHover(d, i)}
              />
            </g>

            ${this.showLabels ? svg`
              <g opacity="${angle > this.minLabelAngle ? 1 : 0}">
                <text 
                  part="label"
                  class="label"
                  transform="translate(${centroid})" 
                  text-anchor="middle" 
                  font-size="var(--label-size, 14)"
                  fill="var(--label-color, #eee)"
                >
                  <tspan y="-0.4em" font-weight="600">
                    ${d.data.name}
                  </tspan>
                  ${this.showValues && angle > this.minLabelAngle ? svg`
                    <tspan x="0" y="0.7em" fill-opacity="0.7">
                      ${((d.data.value / total) * 100).toFixed(1)}%
                    </tspan>
                  ` : ''}
                </text>
              </g>
            ` : ''}
          </g>
        `;
      })}
    `;
  }

  private handleSliceClick(d: PieArcDatum<PieChartDataPoint>, index: number) {
    this.emit('nu-slice-click', {
      detail: {
        data: d.data,
        index,
        value: d.value,
        startAngle: d.startAngle,
        endAngle: d.endAngle
      }
    });
  }

  private handleSliceHover(d: PieArcDatum<PieChartDataPoint>, index: number) {
    this.emit('nu-slice-hover', {
      detail: {
        data: d.data,
        index,
        value: d.value,
        startAngle: d.startAngle,
        endAngle: d.endAngle
      }
    });
  }

  render() {
    const containerStyles = {
      width: `${this.size}px`,
      height: `${this.size}px`
    };

    const isDonut = this.innerRadius > 0;
    const centerContent = this.centerText || this.centerValue || this.querySelector('[slot="center"]');

    return html`
      <div part="base" class="pie-chart" style=${styleMap(containerStyles)}>
        <div class="chart-container">
          ${isDonut && centerContent ? html`
            <div part="center" class="center-content">
              ${this.centerText ? html`
                <div class="center-label">${this.centerText}</div>
              ` : ''}
              ${this.centerValue ? html`
                <div class="center-value">${this.centerValue}</div>
              ` : ''}
              <slot name="center"></slot>
            </div>
          ` : ''}
          
          <svg
            part="svg"
            viewBox="${-this.size/2} ${-this.size/2} ${this.size} ${this.size}"
            class="chart-svg"
          >
            ${this.renderChart()}
          </svg>
        </div>
      </div>
    `;
  }
}
