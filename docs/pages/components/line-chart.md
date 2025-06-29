---
meta:
  title: Line Chart
  description: Line charts display data as connected points, ideal for showing trends over time. Supports both single and multiple data series with interactive elements.
layout: component
---

Line charts are perfect for visualizing trends and patterns in time-series data. Built with D3.js for mathematical precision and rendered using SVG with interactive hover effects and customizable styling.

```html:preview
<nu-line-chart 
  data='[
    {"date": "2024-01-01", "value": 100},
    {"date": "2024-01-02", "value": 120},
    {"date": "2024-01-03", "value": 95},
    {"date": "2024-01-04", "value": 140},
    {"date": "2024-01-05", "value": 130}
  ]'
  width="400"
  height="200">
</nu-line-chart>
```

## Examples

### Single Line Chart

The simplest line chart with time-series data:

```html:preview
<nu-line-chart 
  data='[
    {"date": "2024-01-01", "value": 50},
    {"date": "2024-01-02", "value": 75},
    {"date": "2024-01-03", "value": 60},
    {"date": "2024-01-04", "value": 90},
    {"date": "2024-01-05", "value": 85}
  ]'
  width="500"
  height="250">
</nu-line-chart>
```

### Multiple Lines Chart

Compare multiple data series on the same chart:

```html:preview
<nu-line-chart 
  data='[
    {
      "id": "BTC",
      "data": [
        {"date": "2024-01-01", "value": 42000},
        {"date": "2024-01-02", "value": 43500},
        {"date": "2024-01-03", "value": 41800},
        {"date": "2024-01-04", "value": 44200},
        {"date": "2024-01-05", "value": 46000}
      ]
    },
    {
      "id": "ETH", 
      "data": [
        {"date": "2024-01-01", "value": 2500},
        {"date": "2024-01-02", "value": 2600},
        {"date": "2024-01-03", "value": 2400},
        {"date": "2024-01-04", "value": 2700},
        {"date": "2024-01-05", "value": 2800}
      ]
    }
  ]'
  width="600"
  height="300"
  style="
    --line-stroke-1: #f97316;
    --line-stroke-2: #3b82f6;
    --dot-fill-1: #fb923c;
    --dot-fill-2: #60a5fa;
  ">
</nu-line-chart>
```

### Custom Styling and Colors

Customize line colors and appearance:

```html:preview
<nu-line-chart 
  data='[
    {"date": "2024-01-01", "value": 25},
    {"date": "2024-01-02", "value": 45},
    {"date": "2024-01-03", "value": 35},
    {"date": "2024-01-04", "value": 55},
    {"date": "2024-01-05", "value": 50}
  ]'
  width="400"
  height="200"
  curve="cardinal"
  style="
    --line-stroke-1: #ec4899;
    --dot-fill-1: #f0abfc;
    --grid-color: #fce7f3;
  ">
</nu-line-chart>
```

### Different Curve Types

Explore various line interpolations:

```html:preview
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div>
    <h4>Linear Curve</h4>
    <nu-line-chart 
      data='[
        {"date": "2024-01-01", "value": 10},
        {"date": "2024-01-02", "value": 30},
        {"date": "2024-01-03", "value": 20},
        {"date": "2024-01-04", "value": 40}
      ]'
      curve="linear"
      width="250"
      height="150">
    </nu-line-chart>
  </div>
  
  <div>
    <h4>Monotone Curve</h4>
    <nu-line-chart 
      data='[
        {"date": "2024-01-01", "value": 10},
        {"date": "2024-01-02", "value": 30},
        {"date": "2024-01-03", "value": 20},
        {"date": "2024-01-04", "value": 40}
      ]'
      curve="monotone"
      width="250"
      height="150"
      style="
        --line-stroke-1: #10b981;
        --dot-fill-1: #6ee7b7;
      ">
    </nu-line-chart>
  </div>
</div>
```

### Without Data Points

Hide the dots to show only the line:

```html:preview
<nu-line-chart 
  data='[
    {"date": "2024-01-01", "value": 30},
    {"date": "2024-01-02", "value": 45},
    {"date": "2024-01-03", "value": 35},
    {"date": "2024-01-04", "value": 55},
    {"date": "2024-01-05", "value": 50},
    {"date": "2024-01-06", "value": 40},
    {"date": "2024-01-07", "value": 60}
  ]'
  show-dots="false"
  width="500"
  height="200"
  style="
    --line-stroke-1: #8b5cf6;
  ">
</nu-line-chart>
```

## Data Formats

Line charts support both single and multiple series data formats:

### Single Series
```typescript
interface LineChartDataPoint {
  date: string | Date;
  value: number;
}
```

```html
<nu-line-chart 
  data='[
    {"date": "2024-01-01", "value": 100},
    {"date": "2024-01-02", "value": 120}
  ]'>
</nu-line-chart>
```

### Multiple Series
```typescript
interface LineChartSeries {
  id: string;
  data: LineChartDataPoint[];
  color?: string;
  strokeWidth?: number;
  showDots?: boolean;
}
```

```html
<nu-line-chart 
  data='[
    {
      "id": "series1",
      "data": [{"date": "2024-01-01", "value": 100}],
      "color": "#3b82f6"
    },
    {
      "id": "series2",
      "data": [{"date": "2024-01-01", "value": 80}],
      "color": "#ef4444"
    }
  ]'>
</nu-line-chart>
```

### JavaScript Usage

```javascript
const chartData = [
  { date: new Date('2024-01-01'), value: 100 },
  { date: new Date('2024-01-02'), value: 120 }
];

// Single series
document.querySelector('nu-line-chart').data = chartData;

// Multiple series
const multiSeries = [
  {
    id: 'revenue',
    data: chartData,
    color: '#22c55e'
  },
  {
    id: 'expenses', 
    data: expenseData,
    color: '#ef4444'
  }
];
document.querySelector('nu-line-chart').data = multiSeries;
```

## Customization

### CSS Custom Properties

```css
nu-line-chart {
  /* Line colors */
  --line-stroke-1: #a855f7;
  --line-stroke-2: #ec4899;
  --line-stroke-3: #06b6d4;
  
  /* Dot colors */
  --dot-fill-1: #c084fc;
  --dot-fill-2: #f0abfc;
  --dot-fill-3: #67e8f9;
  
  /* Chart styling */
  --grid-color: #e4e4e7;
  --axis-label-color: #71717a;
  --axis-label-size: 0.75rem;
}
```

### Curve Types

Available curve interpolations:
- `linear` - Straight lines between points
- `monotone` - Smooth curves that preserve monotonicity (default)
- `cardinal` - Smooth curves with tension
- `basis` - B-spline curves  
- `step` - Step function curves

### Properties

- `show-dots` - Show/hide data point dots
- `show-grid` - Show/hide grid lines
- `show-axes` - Show/hide axis labels
- `curve` - Line interpolation type
- `width` / `height` - Chart dimensions
- `margin` - Chart padding object

## Events

### nu-data-point-hover
Emitted when hovering over a data point dot.

### nu-data-point-click
Emitted when clicking a data point dot.

### nu-line-hover
Emitted when hovering over a line.

## Accessibility

Line charts include built-in accessibility features:
- Semantic SVG structure with proper ARIA labels
- High contrast mode support
- Reduced motion preferences respected
- Interactive elements with proper focus states

## Server-Side Rendering

Line charts are fully compatible with server-side rendering and React Server Components. The charts render completely on the server with no client-side JavaScript required for basic display.

[component-metadata:nu-line-chart]
