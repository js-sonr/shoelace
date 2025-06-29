import { property, state, query } from 'lit/decorators.js';
import { html, svg } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { LocalizeController } from '../../utilities/localize.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import NebulaElement from '../../internal/nebula-element.js';
import styles from './candle-chart.styles.js';
import type { CSSResultGroup } from 'lit';
import { scaleTime, scaleLinear, max as d3max, min as d3min } from 'd3';

export interface CandleChartDataPoint {
  date: string | Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

/**
 * @summary Candlestick charts display OHLC (Open, High, Low, Close) financial data with green/red theming.
 * @documentation https://nebulaui.org/components/candle-chart
 * @status experimental
 * @since 2.0
 *
 * @event nu-candle-hover - Emitted when hovering over a candlestick.
 * @event nu-candle-click - Emitted when clicking a candlestick.
 *
 * @slot - Optional content to display when no data is available.
 *
 * @csspart base - The component's base wrapper.
 * @csspart svg - The SVG container.
 * @csspart candle - The candlestick elements.
 * @csspart wick - The high-low wick elements.
 * @csspart body - The open-close body elements.
 * @csspart grid - The grid lines.
 * @csspart axis - The axis elements.
 *
 * @cssproperty --bullish-color - The color for bullish (green) candles.
 * @cssproperty --bearish-color - The color for bearish (red) candles.
 * @cssproperty --wick-color - The color of the candle wicks.
 * @cssproperty --grid-color - The color of the grid lines.
 * @cssproperty --axis-color - The color of the axis.
 * @cssproperty --axis-label-color - The color of axis labels.
 * @cssproperty --candle-width - The width of the candle bodies.
 */
export default class NuCandleChart extends NebulaElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  @query('svg') svg: SVGElement;

  /** The chart data as JSON string or array of OHLC data points. */
  @property({ type: String }) data = '[]';

  /** The width of the chart in pixels. */
  @property({ type: Number }) width = 600;

  /** The height of the chart in pixels. */
  @property({ type: Number }) height = 400;

  /** The margin around the chart area. */
  @property({ type: Object }) margin = { top: 20, right: 30, bottom: 40, left: 60 };

  /** Whether to show grid lines. */
  @property({ type: Boolean, attribute: 'show-grid' }) showGrid = true;

  /** Whether to show axis labels. */
  @property({ type: Boolean, attribute: 'show-axes' }) showAxes = true;

  /** Whether to show volume bars. */
  @property({ type: Boolean, attribute: 'show-volume' }) showVolume = false;

  /** The width of candle bodies as a percentage (0.1 to 0.9). */
  @property({ type: Number, attribute: 'candle-width' }) candleWidth = 0.7;

  /** Whether to animate the chart on load. */
  @property({ type: Boolean }) animate = true;

  @state() private parsedData: CandleChartDataPoint[] = [];

  @watch('data')
  handleDataChange() {
    this.parseData();
    this.requestUpdate();
  }

  private parseData() {
    try {
      const rawData = typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
      this.parsedData = rawData.map((d: any) => ({
        date: typeof d.date === 'string' ? new Date(d.date) : d.date,
        open: Number(d.open),
        high: Number(d.high),
        low: Number(d.low),
        close: Number(d.close),
        volume: d.volume ? Number(d.volume) : undefined
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

  private renderChart() {
    if (!this.parsedData.length) {
      return html`<div class="no-data"><slot>No data available</slot></div>`;
    }

    const innerWidth = this.width - this.margin.left - this.margin.right;
    const innerHeight = this.height - this.margin.top - this.margin.bottom;
    const volumeHeight = this.showVolume ? innerHeight * 0.2 : 0;
    const priceHeight = innerHeight - volumeHeight;

    // Get price range
    const allPrices = this.parsedData.flatMap(d => [d.open, d.high, d.low, d.close]);
    const minPrice = d3min(allPrices) || 0;
    const maxPrice = d3max(allPrices) || 0;
    const priceRange = maxPrice - minPrice;
    const pricePadding = priceRange * 0.1;

    // Create scales
    const xScale = scaleTime()
      .domain([
        this.parsedData[0].date as Date,
        this.parsedData[this.parsedData.length - 1].date as Date
      ])
      .range([0, innerWidth]);

    const yScale = scaleLinear()
      .domain([minPrice - pricePadding, maxPrice + pricePadding])
      .range([priceHeight, 0]);

    const volumeScale = this.showVolume ? scaleLinear()
      .domain([0, d3max(this.parsedData.map(d => d.volume || 0)) || 0])
      .range([innerHeight, priceHeight + 10]) : null;

    // Calculate candle width
    const candlePixelWidth = Math.max(2, (innerWidth / this.parsedData.length) * this.candleWidth);

    // Grid lines
    const yTicks = yScale.ticks(8);
    const xTicks = xScale.ticks(Math.min(this.parsedData.length, 10));

    // X-axis labels (dates)
    const xAxisLabels = xTicks.map(tick => ({
      value: (tick as Date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      position: (xScale(tick) / innerWidth) * 100
    }));

    // Y-axis labels (prices)
    const yAxisLabels = yTicks.map(tick => ({
      value: tick.toFixed(2),
      position: (yScale(tick) / priceHeight) * 100
    }));

    return html`
      <div class="chart-container">
        <!-- Y axis -->
        <div class="y-axis">
          ${yAxisLabels.map(label => html`
            <div
              class="y-axis-label"
              style="top: ${label.position}%;"
            >
              $${label.value}
            </div>
          `)}
        </div>

        <!-- Chart area -->
        <div class="chart-area">
          <svg
            part="svg"
            viewBox="0 0 ${innerWidth} ${innerHeight}"
            class="chart-svg"
            preserveAspectRatio="none"
          >
            ${this.showGrid ? svg`
              <!-- Horizontal grid lines -->
              ${yTicks.map(tick => svg`
                <line
                  part="grid"
                  class="grid-line"
                  x1="0"
                  y1="${yScale(tick)}"
                  x2="${innerWidth}"
                  y2="${yScale(tick)}"
                  stroke="var(--grid-color, #e4e4e7)"
                  stroke-width="1"
                  opacity="0.3"
                />
              `)}
              <!-- Vertical grid lines -->
              ${xTicks.map(tick => svg`
                <line
                  part="grid"
                  class="grid-line"
                  x1="${xScale(tick)}"
                  y1="0"
                  x2="${xScale(tick)}"
                  y2="${priceHeight}"
                  stroke="var(--grid-color, #e4e4e7)"
                  stroke-width="1"
                  opacity="0.3"
                />
              `)}
            ` : ''}

            <!-- Volume bars -->
            ${this.showVolume && volumeScale ? this.parsedData.map((d, i) => {
              if (!d.volume) return '';
              const x = xScale(d.date as Date);
              const isBullish = d.close >= d.open;
              return svg`
                <rect
                  part="volume"
                  class="volume-bar ${isBullish ? 'bullish' : 'bearish'}"
                  x="${x - candlePixelWidth / 2}"
                  y="${volumeScale(d.volume)}"
                  width="${candlePixelWidth}"
                  height="${innerHeight - volumeScale(d.volume)}"
                  fill="${isBullish ? 'var(--bullish-color, #22c55e)' : 'var(--bearish-color, #ef4444)'}"
                  opacity="0.3"
                />
              `;
            }) : ''}

            <!-- Candlesticks -->
            ${this.parsedData.map((d, i) => {
              const x = xScale(d.date as Date);
              const isBullish = d.close >= d.open;
              const bodyTop = yScale(Math.max(d.open, d.close));
              const bodyBottom = yScale(Math.min(d.open, d.close));
              const bodyHeight = bodyBottom - bodyTop;
              
              const color = isBullish ? 'var(--bullish-color, #22c55e)' : 'var(--bearish-color, #ef4444)';
              
              return svg`
                <g 
                  class="candle ${isBullish ? 'bullish' : 'bearish'}"
                  @click=${() => this.handleCandleClick(d, i)}
                  @mouseenter=${() => this.handleCandleHover(d, i)}
                >
                  <!-- High-Low wick -->
                  <line
                    part="wick"
                    class="wick"
                    x1="${x}"
                    y1="${yScale(d.high)}"
                    x2="${x}"
                    y2="${yScale(d.low)}"
                    stroke="${color}"
                    stroke-width="2"
                  />
                  
                  <!-- Open-Close body -->
                  <rect
                    part="body"
                    class="body"
                    x="${x - candlePixelWidth / 2}"
                    y="${bodyTop}"
                    width="${candlePixelWidth}"
                    height="${Math.max(1, bodyHeight)}"
                    fill="${isBullish ? color : color}"
                    stroke="${color}"
                    stroke-width="1"
                    opacity="${isBullish ? 0.8 : 1}"
                  />
                </g>
              `;
            })}
          </svg>

          <!-- X axis labels -->
          <div class="x-axis">
            ${xAxisLabels.map(label => html`
              <div
                class="x-axis-label"
                style="left: ${label.position}%; transform: translateX(-50%);"
              >
                ${label.value}
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  private handleCandleClick(d: CandleChartDataPoint, index: number) {
    this.emit('nu-candle-click', {
      detail: {
        data: d,
        index,
        isBullish: d.close >= d.open,
        priceChange: d.close - d.open,
        percentChange: ((d.close - d.open) / d.open) * 100
      }
    });
  }

  private handleCandleHover(d: CandleChartDataPoint, index: number) {
    this.emit('nu-candle-hover', {
      detail: {
        data: d,
        index,
        isBullish: d.close >= d.open,
        priceChange: d.close - d.open,
        percentChange: ((d.close - d.open) / d.open) * 100
      }
    });
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
      <div part="base" class="candle-chart" style=${styleMap(containerStyles)}>
        ${this.renderChart()}
      </div>
    `;
  }
}
