import { property, state, query } from 'lit/decorators.js';
import { html, svg } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { LocalizeController } from '../../utilities/localize.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './line-chart.styles.js';
import type { CSSResultGroup } from 'lit';
import { scaleTime, scaleLinear, line as d3line, max as d3max, curveMonotoneX, curveLinear, curveCardinal, curveBasis, curveStep } from 'd3';

export interface LineChartDataPoint {
  date: string | Date;
  value: number;
}

export interface LineChartSeries {
  id: string;
  data: LineChartDataPoint[];
  color?: string;
  strokeWidth?: number;
  showDots?: boolean;
}

/**
 * @summary Line charts display data as connected points, ideal for showing trends over time.
 * @documentation https://nebulaui.org/components/line-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-data-point-hover - Emitted when hovering over a data point.
 * @event nu-data-point-click - Emitted when clicking a data point.
 * @event nu-line-hover - Emitted when hovering over a line.
 *
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart line - The line path elements.
 * @csspart dot - The data point dots.
 * @csspart grid - The grid lines.
 * @csspart axis - The axis elements.
 *
 * @cssproperty --line-stroke-1 - The stroke color of the first line.
 * @cssproperty --line-stroke-2 - The stroke color of the second line.
 * @cssproperty --line-stroke-3 - The stroke color of the third line.
 * @cssproperty --dot-fill-1 - The fill color of the first line's dots.
 * @cssproperty --dot-fill-2 - The fill color of the second line's dots.
 * @cssproperty --dot-fill-3 - The fill color of the third line's dots.
 * @cssproperty --grid-color - The color of the grid lines.
 * @cssproperty --axis-color - The color of the axis.
 * @cssproperty --axis-label-color - The color of axis labels.
 */
export default class NuLineChart extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  @query('svg') svg: SVGElement;

  /** The chart data as JSON string or array of data points/series. */
  @property({ type: String }) data = '[]';

  /** The width of the chart in pixels. */
  @property({ type: Number }) width = 400;

  /** The height of the chart in pixels. */
  @property({ type: Number }) height = 300;

  /** The margin around the chart area. */
  @property({ type: Object }) margin = { top: 0, right: 8, bottom: 25, left: 25 };

  /** Whether to show grid lines. */
  @property({ type: Boolean, attribute: 'show-grid' }) showGrid = true;

  /** Whether to show axis labels. */
  @property({ type: Boolean, attribute: 'show-axes' }) showAxes = true;

  /** Whether to show dots on data points. */
  @property({ type: Boolean, attribute: 'show-dots' }) showDots = true;

  /** The curve type for the lines (linear, monotone, cardinal, etc.). */
  @property({ type: String }) curve = 'monotone';

  /** Whether to animate the chart on load. */
  @property({ type: Boolean }) animate = true;

  @state() private parsedData: LineChartSeries[] = [];
  @state() private isSingleSeries = true;

  @watch('data')
  handleDataChange() {
    this.parseData();
    this.requestUpdate();
  }

  private parseData() {
    try {
      const rawData = typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
      
      // Check if it's a single series (array of data points) or multiple series
      if (Array.isArray(rawData) && rawData.length > 0) {
        if ('id' in rawData[0] || 'data' in rawData[0]) {
          // Multiple series format
          this.isSingleSeries = false;
          this.parsedData = rawData.map((series: any, index: number) => ({
            id: series.id || `series-${index}`,
            data: series.data.map((d: any) => ({
              date: typeof d.date === 'string' ? new Date(d.date) : d.date,
              value: Number(d.value)
            })),
            color: series.color,
            strokeWidth: series.strokeWidth || 2,
            showDots: series.showDots !== undefined ? series.showDots : this.showDots
          }));
        } else {
          // Single series format
          this.isSingleSeries = true;
          this.parsedData = [{
            id: 'default',
            data: rawData.map((d: any) => ({
              date: typeof d.date === 'string' ? new Date(d.date) : (d.date || new Date(d.key)),
              value: Number(d.value)
            })),
            showDots: this.showDots
          }];
        }
      }
    } catch (error) {
      console.error('Failed to parse chart data:', error);
      this.parsedData = [];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.parseData();
  }

  private getCurveFunction() {
    switch (this.curve) {
      case 'linear': return curveLinear;
      case 'monotone': return curveMonotoneX;
      case 'cardinal': return curveCardinal;
      case 'basis': return curveBasis;
      case 'step': return curveStep;
      default: return curveMonotoneX;
    }
  }

  private renderChart() {
    if (!this.parsedData.length || !this.parsedData[0].data.length) {
      return html`<div class="no-data"><slot>No data available</slot></div>`;
    }

    // Get all data points to determine domains
    const allData = this.parsedData.flatMap(series => series.data);
    const allDates = allData.map(d => d.date as Date);
    const allValues = allData.map(d => d.value);

    // Create scales
    const xScale = scaleTime()
      .domain([Math.min(...allDates.map(d => d.getTime())), Math.max(...allDates.map(d => d.getTime()))])
      .range([0, 100]);

    const yScale = scaleLinear()
      .domain([0, d3max(allValues) ?? 0])
      .range([100, 0]);

    // Line generator
    const line = d3line<LineChartDataPoint>()
      .x(d => xScale(d.date as Date))
      .y(d => yScale(d.value))
      .curve(this.getCurveFunction());

    // Generate grid lines
    const yTicks = yScale.ticks(8);
    const tickFormatter = yScale.tickFormat(8, 'd');

    // Generate axis labels - show first, last, and max value points
    const referenceData = this.parsedData[0].data;
    const maxValue = Math.max(...referenceData.map(d => d.value));
    const xAxisLabels = referenceData
      .map((day, i) => {
        const isFirst = i === 0;
        const isLast = i === referenceData.length - 1;
        const isMax = day.value === maxValue;
        if (!isFirst && !isLast && !isMax) return null;
        
        let transform = 'translateX(-50%)';
        if (isFirst) transform = 'translateX(0%)';
        if (isLast) transform = 'translateX(-100%)';
        
        return {
          value: (day.date as Date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
          position: xScale(day.date as Date),
          transform
        };
      })
      .filter(Boolean);

    return html`
      <div class="chart-container">
        <!-- Y axis -->
        <div class="y-axis">
          ${yTicks.map((tick, i) => html`
            <div
              class="y-axis-label"
              style="top: ${yScale(tick)}%;"
            >
              ${tickFormatter(tick)}
            </div>
          `)}
        </div>

        <!-- Chart area -->
        <div class="chart-area">
          <svg
            part="svg"
            viewBox="0 0 100 100"
            class="chart-svg"
            preserveAspectRatio="none"
          >
            ${this.showGrid ? svg`
              <!-- Grid lines -->
              ${yTicks.map(tick => svg`
                <g transform="translate(0,${yScale(tick)})" class="grid-line">
                  <line
                    part="grid"
                    x1="0"
                    x2="100"
                    stroke="var(--grid-color, #e4e4e7)"
                    stroke-dasharray="6,5"
                    stroke-width="0.5"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              `)}
            ` : ''}

            <!-- Lines -->
            ${this.parsedData.map((series, seriesIndex) => {
              const linePath = line(series.data);
              if (!linePath) return '';
              
              const lineColor = series.color || `var(--line-stroke-${seriesIndex + 1}, ${this.getDefaultColor(seriesIndex)})`;
              const dotColor = `var(--dot-fill-${seriesIndex + 1}, ${this.getDefaultDotColor(seriesIndex)})`;
              
              return svg`
                <!-- Line -->
                <path
                  part="line"
                  class="line line-${seriesIndex}"
                  d="${linePath}"
                  fill="none"
                  stroke="${lineColor}"
                  stroke-width="${series.strokeWidth || 2}"
                  vector-effect="non-scaling-stroke"
                />

                <!-- Dots -->
                ${series.showDots !== false ? series.data.map((point, pointIndex) => svg`
                  <path
                    part="dot"
                    class="dot dot-${seriesIndex}"
                    d="M ${xScale(point.date as Date)} ${yScale(point.value)} l 0.0001 0"
                    vector-effect="non-scaling-stroke"
                    stroke-width="7"
                    stroke-linecap="round"
                    fill="none"
                    stroke="${dotColor}"
                  />
                `) : ''}
              `;
            })}
          </svg>

          <!-- X axis labels -->
          <div class="x-axis">
            ${xAxisLabels.map(label => 
              label ? html`
                <div
                  class="x-axis-label"
                  style="left: ${label.position}%; transform: ${label.transform};"
                >
                  ${label.value}
                </div>
              ` : ''
            )}
          </div>
        </div>
      </div>
    `;
  }

  private getDefaultColor(index: number): string {
    const colors = ['#a855f7', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    return colors[index % colors.length];
  }

  private getDefaultDotColor(index: number): string {
    const colors = ['#c084fc', '#f0abfc', '#67e8f9', '#6ee7b7', '#fbbf24', '#f87171'];
    return colors[index % colors.length];
  }

  render() {
    const containerStyles = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      '--margin-top': `${this.margin.top}px`,
      '--margin-right': `${this.margin.right}px`,
      '--margin-bottom': `${this.margin.bottom}px`,
      '--margin-left': `${this.margin.left}px`
    };

    return html`
      <div part="base" class="line-chart" style=${styleMap(containerStyles)}>
        ${this.renderChart()}
      </div>
    `;
  }
}
