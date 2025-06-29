import { curveBasis, curveCardinal, curveLinear, curveMonotoneX, curveStep, area as d3area, line as d3line, max as d3max, scaleLinear, scaleTime } from 'd3';
import { html } from 'lit';
// import { LocalizeController } from '../../utilities/localize.js';
import { property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './area-chart.styles.js';
import type { Area, Line, ScaleLinear, ScaleTime } from 'd3';
import type { CSSResultGroup } from 'lit';

export interface AreaChartDataPoint {
  date: string | Date;
  value: number;
}

/**
 * @summary Area charts visualize data over time with filled areas below the line.
 * @documentation https://nebulaui.org/components/area-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-data-point-hover - Emitted when hovering over a data point.
 * @event nu-data-point-click - Emitted when clicking a data point.
 *
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart area - The area path element.
 * @csspart line - The line path element.
 * @csspart axis - The axis elements.
 * @csspart grid - The grid elements.
 *
 * @cssproperty --area-fill - The fill color of the area.
 * @cssproperty --line-stroke - The stroke color of the line.
 * @cssproperty --grid-color - The color of the grid lines.
 * @cssproperty --axis-color - The color of the axis lines.
 */
export default class NuAreaChart extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  // private readonly localize = new LocalizeController(this);

  @query('svg') svg: SVGElement;

  /** The chart data as JSON string or array of data points. */
  @property({ type: String }) data = '[]';

  /** The width of the chart in pixels. */
  @property({ type: Number }) width = 400;

  /** The height of the chart in pixels. */
  @property({ type: Number }) height = 300;

  /** The margin around the chart area. */
  @property({ type: Object }) margin = { top: 20, right: 30, bottom: 30, left: 40 };

  /** Whether to show grid lines. */
  @property({ type: Boolean, attribute: 'show-grid' }) showGrid = true;

  /** Whether to show axis labels. */
  @property({ type: Boolean, attribute: 'show-axes' }) showAxes = true;

  /** The curve type for the area (linear, monotone, cardinal, etc.). */
  @property({ type: String }) curve = 'monotone';

  /** Whether to animate the chart on load. */
  @property({ type: Boolean, attribute: 'animate-chart' }) animateChart = true;

  @state() private parsedData: AreaChartDataPoint[] = [];

  @watch('data')
  handleDataChange() {
    this.parseData();
    this.requestUpdate();
  }

  private parseData() {
    try {
      const rawData: unknown = typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
      if (!Array.isArray(rawData)) {
        this.parsedData = [];
        return;
      }
      this.parsedData = rawData.map((d: unknown) => {
        const item = d as Record<string, unknown>;
        return {
          date: typeof item.date === 'string' ? new Date(item.date) : (item.date instanceof Date ? item.date : new Date(String(item.key || ''))),
          value: Number(item.value || 0)
        };
      });
    } catch (error) {
      console.error('Failed to parse chart data:', error);
      this.parsedData = [];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.parseData();
  }

  private getCurveFunction(): typeof curveMonotoneX {
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
    if (!this.parsedData.length) {
      return html`<div class="no-data"><slot>No data available</slot></div>`;
    }

    // Create scales using percentage-based approach like RosenCharts
    const xScale: ScaleTime<number, number> = scaleTime()
      .domain([this.parsedData[0].date as Date, this.parsedData[this.parsedData.length - 1].date as Date])
      .range([0, 100]);

    const yScale: ScaleLinear<number, number> = scaleLinear()
      .domain([0, d3max(this.parsedData, d => d.value) ?? 0])
      .range([100, 0]);

    // Line and area generators
    const line: Line<AreaChartDataPoint> = d3line<AreaChartDataPoint>()
      .x(d => xScale(d.date as Date) as number)
      .y(d => yScale(d.value) as number)
      .curve(this.getCurveFunction());

    const area: Area<AreaChartDataPoint> = d3area<AreaChartDataPoint>()
      .x(d => xScale(d.date as Date) as number)
      .y0(yScale(0) as number)
      .y1(d => yScale(d.value) as number)
      .curve(this.getCurveFunction());

    const areaPath = area(this.parsedData) ?? undefined;
    const linePath = line(this.parsedData);

    if (!linePath) {
      return html`<div class="no-data"><slot>No data available</slot></div>`;
    }

    // Generate axis labels
    const xAxisLabels = this.parsedData
      .map((day, i) => {
        // Show 1 every 6 labels, skip first and last few
        if (i % 6 !== 0 || i === 0 || i >= this.parsedData.length - 3) return null;
        return { 
          value: (day.date as Date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          position: xScale(day.date as Date) as number
        };
      })
      .filter(Boolean) as { value: string; position: number }[];

    const yAxisLabels = yScale
      .ticks(8)
      .map(yScale.tickFormat(8, 'd'))
      .map((value, i) => {
        if (i < 1) return null;
        return {
          value,
          position: yScale(+value) as number
        };
      })
      .filter(Boolean) as { value: string; position: number }[];

    return html`
      <div class="chart-container">
        <!-- Chart area -->
        <svg
          part="svg"
          viewBox="0 0 100 100"
          class="chart-svg"
          preserveAspectRatio="none"
        >
          <!-- Gradient definition -->
          <defs>
            <linearGradient id="area-gradient-${this.id || 'default'}" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stop-color="var(--area-gradient-start, rgba(234, 179, 8, 0.2))"
              />
              <stop
                offset="100%"
                stop-color="var(--area-gradient-end, rgba(234, 179, 8, 0.02))"
              />
            </linearGradient>
          </defs>

          <!-- Area -->
          <path 
            part="area"
            class="area"
            d="${areaPath}" 
            fill="url(#area-gradient-${this.id || 'default'})" 
          />

          <!-- Line -->
          <path
            part="line"
            class="line"
            d="${linePath}"
            fill="none"
            stroke="var(--line-stroke, #eab308)"
            stroke-width="1.5"
            vector-effect="non-scaling-stroke"
          />
        </svg>

        <!-- X axis labels -->
        ${xAxisLabels.map(label => 
          label ? html`
            <div
              class="x-axis-label"
              style="left: ${label.position}%; top: 90%;"
            >
              ${label.value}
            </div>
          ` : ''
        )}

        <!-- Y axis labels -->
        ${yAxisLabels.map(label =>
          label ? html`
            <div
              class="y-axis-label"
              style="top: ${label.position}%; right: 3%;"
            >
              ${label.value}
            </div>
          ` : ''
        )}
      </div>
    `;
  }

  render() {
    const containerStyles = {
      width: `${this.width}px`,
      height: `${this.height}px`
    };

    return html`
      <div part="base" class="area-chart" style=${styleMap(containerStyles)}>
        ${this.renderChart()}
      </div>
    `;
  }
}
