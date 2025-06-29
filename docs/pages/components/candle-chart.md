---
meta:
  title: Candle Chart
  description: Candlestick charts display OHLC (Open, High, Low, Close) financial data with green/red theming, perfect for trading interfaces and market analysis.
layout: component
---

Candlestick charts are the standard visualization for financial markets, showing price action over time with traditional OHLC data. Built with D3.js for precision scaling and featuring green/red theming for bullish and bearish movements.

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 42000, "high": 43500, "low": 41800, "close": 43200},
    {"date": "2024-01-02", "open": 43200, "high": 44000, "low": 42500, "close": 42800},
    {"date": "2024-01-03", "open": 42800, "high": 43200, "low": 42000, "close": 43000},
    {"date": "2024-01-04", "open": 43000, "high": 44500, "low": 42800, "close": 44200},
    {"date": "2024-01-05", "open": 44200, "high": 45000, "low": 43800, "close": 44800}
  ]'
  width="500"
  height="300">
</nu-candle-chart>
```

## Examples

### Basic OHLC Chart

A simple candlestick chart showing price movements:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 100, "high": 110, "low": 95, "close": 105},
    {"date": "2024-01-02", "open": 105, "high": 115, "low": 100, "close": 98},
    {"date": "2024-01-03", "open": 98, "high": 102, "low": 90, "close": 108},
    {"date": "2024-01-04", "open": 108, "high": 120, "low": 105, "close": 118},
    {"date": "2024-01-05", "open": 118, "high": 125, "low": 115, "close": 122}
  ]'
  width="600"
  height="350">
</nu-candle-chart>
```

### Bitcoin Price Chart

Display cryptocurrency price action with volume:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 42000, "high": 43500, "low": 41800, "close": 43200, "volume": 1250000},
    {"date": "2024-01-02", "open": 43200, "high": 44000, "low": 42500, "close": 42800, "volume": 1100000},
    {"date": "2024-01-03", "open": 42800, "high": 43200, "low": 42000, "close": 43000, "volume": 980000},
    {"date": "2024-01-04", "open": 43000, "high": 44500, "low": 42800, "close": 44200, "volume": 1350000},
    {"date": "2024-01-05", "open": 44200, "high": 45000, "low": 43800, "close": 44800, "volume": 1420000}
  ]'
  width="700"
  height="400"
  show-volume="true">
</nu-candle-chart>
```

### Stock Market Data

Traditional stock price visualization:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 150.25, "high": 155.80, "low": 148.90, "close": 154.20},
    {"date": "2024-01-02", "open": 154.20, "high": 157.50, "low": 152.10, "close": 151.80},
    {"date": "2024-01-03", "open": 151.80, "high": 153.40, "low": 149.20, "close": 152.90},
    {"date": "2024-01-04", "open": 152.90, "high": 159.70, "low": 151.50, "close": 158.40},
    {"date": "2024-01-05", "open": 158.40, "high": 162.10, "low": 157.20, "close": 160.85}
  ]'
  width="600"
  height="300"
  style="
    --bullish-color: #16a34a;
    --bearish-color: #dc2626;
  ">
</nu-candle-chart>
```

### Custom Theming

Customize colors for different market themes:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 50, "high": 55, "low": 48, "close": 52},
    {"date": "2024-01-02", "open": 52, "high": 54, "low": 49, "close": 48},
    {"date": "2024-01-03", "open": 48, "high": 51, "low": 45, "close": 49},
    {"date": "2024-01-04", "open": 49, "high": 56, "low": 47, "close": 54}
  ]'
  width="400"
  height="250"
  style="
    --bullish-color: #059669;
    --bearish-color: #b91c1c;
    --grid-color: #f3f4f6;
  ">
</nu-candle-chart>
```

### Wider Candle Bodies

Adjust candle width for better visibility:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 200, "high": 220, "low": 190, "close": 210},
    {"date": "2024-01-02", "open": 210, "high": 225, "low": 205, "close": 195},
    {"date": "2024-01-03", "open": 195, "high": 200, "low": 180, "close": 215}
  ]'
  width="400"
  height="200"
  candle-width="0.9">
</nu-candle-chart>
```

### Compact View

Minimal chart for dashboard widgets:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 100, "high": 105, "low": 98, "close": 103},
    {"date": "2024-01-02", "open": 103, "high": 107, "low": 101, "close": 99},
    {"date": "2024-01-03", "open": 99, "high": 101, "low": 95, "close": 102}
  ]'
  width="300"
  height="150"
  show-grid="false">
</nu-candle-chart>
```

## Theming and Customization

The Candle Chart component now leverages Nebula's comprehensive design token system for consistent theming and customization across light and dark modes.

### Consistent Design Tokens

All chart styling now uses standardized design tokens from the Nebula theme system:

```css
nu-candle-chart {
  /* Colors use theme tokens */
  --bullish-color: var(--nu-color-success-600);
  --bearish-color: var(--nu-color-danger-600);
  --grid-color: var(--nu-color-neutral-200);
  --axis-label-color: var(--nu-color-neutral-600);
  
  /* Typography tokens */
  --axis-label-size: var(--nu-font-size-small);
  --axis-label-weight: var(--nu-font-weight-normal);
  
  /* Spacing tokens */
  --chart-spacing: var(--nu-spacing-small);
  --chart-margin: var(--nu-spacing-medium);
  
  /* Border radius tokens */
  --chart-border-radius: var(--nu-border-radius-medium);
  
  /* Transition tokens */
  --chart-transition: var(--nu-transition-fast);
}
```

### Chart-Specific Variables

The component provides these chart-specific custom properties that map to design tokens:

- `--chart-spacing`: Internal padding using `--nu-spacing-small`
- `--chart-border-radius`: Container borders using `--nu-border-radius-medium`
- `--chart-margin`: Chart margins using `--nu-spacing-medium`

### Color Scheme Improvements

Candle charts now use success/danger colors by default for traditional bullish/bearish theming:

```css
nu-candle-chart {
  /* Traditional trading colors */
  --bullish-color: var(--nu-color-success-600);
  --bearish-color: var(--nu-color-danger-600);
  
  /* Alternative color schemes */
  --bullish-alt: var(--nu-color-success-500);
  --bearish-alt: var(--nu-color-danger-500);
  
  /* Volume colors */
  --volume-bullish: var(--nu-color-success-200);
  --volume-bearish: var(--nu-color-danger-200);
  
  /* Grid and labels */
  --grid-color: var(--nu-color-neutral-200);
  --axis-label-color: var(--nu-color-neutral-600);
}
```

### Light/Dark Theme Support

The charts automatically adapt to light and dark themes through CSS custom properties:

```css
/* Light theme (default) */
nu-candle-chart {
  --bullish-color: var(--nu-color-success-600);
  --bearish-color: var(--nu-color-danger-600);
  --grid-color: var(--nu-color-neutral-200);
  --axis-label-color: var(--nu-color-neutral-600);
  --background-color: var(--nu-color-neutral-0);
}

/* Dark theme */
[data-theme='dark'] nu-candle-chart {
  --bullish-color: var(--nu-color-success-400);
  --bearish-color: var(--nu-color-danger-400);
  --grid-color: var(--nu-color-neutral-700);
  --axis-label-color: var(--nu-color-neutral-400);
  --background-color: var(--nu-color-neutral-900);
  
  /* Adjusted volume colors for dark theme */
  --volume-bullish: var(--nu-color-success-800);
  --volume-bearish: var(--nu-color-danger-800);
}
```

### Advanced Customization Examples

Use theme tokens for consistent brand colors and alternative color schemes:

```html:preview
<nu-candle-chart 
  data='[
    {"date": "2024-01-01", "open": 100, "high": 110, "low": 95, "close": 105},
    {"date": "2024-01-02", "open": 105, "high": 108, "low": 100, "close": 98},
    {"date": "2024-01-03", "open": 98, "high": 102, "low": 90, "close": 108},
    {"date": "2024-01-04", "open": 108, "high": 120, "low": 105, "close": 118}
  ]'
  width="500"
  height="300"
  style="
    --bullish-color: var(--nu-color-primary-600);
    --bearish-color: var(--nu-color-warning-600);
    --grid-color: var(--nu-color-neutral-100);
    --axis-label-color: var(--nu-color-neutral-700);
  ">
</nu-candle-chart>
```

## Data Format

Candlestick charts expect OHLC data in the following format:

```typescript
interface CandleChartDataPoint {
  date: string | Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}
```

### JSON String

```html
<nu-candle-chart 
  data='[
    {
      "date": "2024-01-01",
      "open": 42000,
      "high": 43500, 
      "low": 41800,
      "close": 43200,
      "volume": 1250000
    }
  ]'>
</nu-candle-chart>
```

### JavaScript Array

```javascript
const ohlcData = [
  {
    date: new Date('2024-01-01'),
    open: 42000,
    high: 43500,
    low: 41800,
    close: 43200,
    volume: 1250000
  },
  {
    date: new Date('2024-01-02'), 
    open: 43200,
    high: 44000,
    low: 42500,
    close: 42800,
    volume: 1100000
  }
];

document.querySelector('nu-candle-chart').data = ohlcData;
```

### Real Market Data Integration

```javascript
// Example with API data
async function loadBitcoinData() {
  const response = await fetch('/api/bitcoin/ohlc');
  const data = await response.json();
  
  document.querySelector('nu-candle-chart').data = data.map(d => ({
    date: new Date(d.timestamp),
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    volume: d.volume
  }));
}
```

## Understanding Candlesticks

### Bullish (Green) Candles
- **Condition**: Close price ≥ Open price
- **Body**: Semi-transparent green rectangle
- **Meaning**: Price increased during the period

### Bearish (Red) Candles  
- **Condition**: Close price < Open price
- **Body**: Solid red rectangle
- **Meaning**: Price decreased during the period

### Anatomy
- **Wick (Shadow)**: Thin lines showing high and low prices
- **Body**: Rectangle showing open and close prices
- **Upper Wick**: Distance from body top to high price
- **Lower Wick**: Distance from body bottom to low price

## Customization

### CSS Custom Properties

```css
nu-candle-chart {
  /* Colors */
  --bullish-color: #22c55e;
  --bearish-color: #ef4444;
  --grid-color: #e4e4e7;
  --axis-label-color: #71717a;
  
  /* Sizing */
  --candle-width: 0.7;
  --axis-label-size: 0.75rem;
}
```

### Properties

- `width` / `height` - Chart dimensions
- `margin` - Chart padding object
- `show-grid` - Show/hide grid lines
- `show-axes` - Show/hide axis labels
- `show-volume` - Show/hide volume bars
- `candle-width` - Width of candle bodies (0.1-0.9)

### Dark Theme

```css
nu-candle-chart[data-theme='dark'] {
  --bullish-color: #16a34a;
  --bearish-color: #dc2626;
  --grid-color: #3f3f46;
  --axis-label-color: #a1a1aa;
}
```

## Events

### nu-candle-hover
Emitted when hovering over a candlestick.

```javascript
chart.addEventListener('nu-candle-hover', (event) => {
  const { data, isBullish, priceChange, percentChange } = event.detail;
  console.log(`${isBullish ? 'Bullish' : 'Bearish'} candle`);
  console.log(`Price change: $${priceChange.toFixed(2)} (${percentChange.toFixed(2)}%)`);
});
```

### nu-candle-click
Emitted when clicking a candlestick.

```javascript
chart.addEventListener('nu-candle-click', (event) => {
  const { data, index } = event.detail;
  console.log('OHLC Data:', data);
  console.log('Candle index:', index);
});
```

## Volume Analysis

When `show-volume` is enabled, volume bars appear at the bottom:

- **Green bars**: Volume during bullish periods
- **Red bars**: Volume during bearish periods
- **Height**: Proportional to trading volume
- **Positioning**: Bottom 20% of chart area

## Performance

### Large Datasets
- Optimized for up to 1000+ candles
- Automatic width calculation
- Efficient SVG rendering
- Smart grid line generation

### Real-time Updates
```javascript
// Update with new candle data
const newCandle = {
  date: new Date(),
  open: lastClose,
  high: currentHigh,
  low: currentLow, 
  close: currentPrice
};

const currentData = chart.data;
chart.data = [...currentData, newCandle];
```

## Accessibility

Candlestick charts include built-in accessibility features:
- Semantic SVG structure with proper ARIA labels
- High contrast mode support for color blind users
- Reduced motion preferences respected
- Screen reader friendly price data
- Keyboard navigation support (coming soon)

## Best Practices

- **Time Periods**: Use consistent time intervals (1m, 5m, 1h, 1d)
- **Price Formatting**: Include currency symbols and appropriate decimal places
- **Volume Context**: Always show volume for complete market picture
- **Responsive Design**: Adjust candle width based on available space
- **Color Consistency**: Use standard green/red or blue/red color schemes

[component-metadata:nu-candle-chart]
