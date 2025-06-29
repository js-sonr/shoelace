---
meta:
  title: Area Chart
  description: Area charts visualize data over time with filled areas below the line, perfect for showing trends and patterns in blockchain and financial data.
layout: component
---

Area charts are ideal for displaying time-series data with filled areas that emphasize volume and trends. Built with D3.js for mathematical calculations and rendered using SVG for maximum customization.

```html:preview
<nu-area-chart 
  data='[
    {"date": "2024-01-01", "value": 100},
    {"date": "2024-01-02", "value": 120},
    {"date": "2024-01-03", "value": 95},
    {"date": "2024-01-04", "value": 140},
    {"date": "2024-01-05", "value": 130}
  ]'
  width="400"
  height="200">
</nu-area-chart>
```

## Examples

### Basic Usage

The simplest area chart with time-series data:

```html:preview
<nu-area-chart 
  data='[
    {"date": "2024-01-01", "value": 50},
    {"date": "2024-01-02", "value": 75},
    {"date": "2024-01-03", "value": 60},
    {"date": "2024-01-04", "value": 90},
    {"date": "2024-01-05", "value": 85}
  ]'
  width="500"
  height="250">
</nu-area-chart>
```

### Cryptocurrency Price Data

Display crypto price movements with custom styling:

```html:preview
<nu-area-chart 
  data='[
    {"date": "2024-01-01", "value": 42000},
    {"date": "2024-01-02", "value": 43500},
    {"date": "2024-01-03", "value": 41800},
    {"date": "2024-01-04", "value": 44200},
    {"date": "2024-01-05", "value": 46000}
  ]'
  width="600"
  height="300"
  curve="monotone"
  style="
    --area-gradient-start: rgba(249, 115, 22, 0.3);
    --area-gradient-end: rgba(249, 115, 22, 0.05);
    --line-stroke: #f97316;
  ">
</nu-area-chart>
```

### Different Curve Types

Explore various curve interpolations:

```html:preview
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <div>
    <h4>Linear Curve</h4>
    <nu-area-chart 
      data='[
        {"date": "2024-01-01", "value": 10},
        {"date": "2024-01-02", "value": 30},
        {"date": "2024-01-03", "value": 20},
        {"date": "2024-01-04", "value": 40},
        {"date": "2024-01-05", "value": 35}
      ]'
      curve="linear"
      width="250"
      height="150">
    </nu-area-chart>
  </div>
  
  <div>
    <h4>Cardinal Curve</h4>
    <nu-area-chart 
      data='[
        {"date": "2024-01-01", "value": 10},
        {"date": "2024-01-02", "value": 30},
        {"date": "2024-01-03", "value": 20},
        {"date": "2024-01-04", "value": 40},
        {"date": "2024-01-05", "value": 35}
      ]'
      curve="cardinal"
      width="250"
      height="150"
      style="
        --area-gradient-start: rgba(59, 130, 246, 0.3);
        --area-gradient-end: rgba(59, 130, 246, 0.05);
        --line-stroke: #3b82f6;
      ">
    </nu-area-chart>
  </div>
</div>
```

### Custom Dimensions

Area charts adapt to any size:

```html:preview
<nu-area-chart 
  data='[
    {"date": "2024-01-01", "value": 25},
    {"date": "2024-01-02", "value": 45},
    {"date": "2024-01-03", "value": 35},
    {"date": "2024-01-04", "value": 55},
    {"date": "2024-01-05", "value": 50},
    {"date": "2024-01-06", "value": 40},
    {"date": "2024-01-07", "value": 60}
  ]'
  width="800"
  height="200"
  style="
    --area-gradient-start: rgba(168, 85, 247, 0.3);
    --area-gradient-end: rgba(168, 85, 247, 0.05);
    --line-stroke: #a855f7;
  ">
</nu-area-chart>
```

## Theming and Customization

The Area Chart component now leverages Nebula's comprehensive design token system for consistent theming and customization across light and dark modes.

### Consistent Design Tokens

All chart styling now uses standardized design tokens from the Nebula theme system:

```css
nu-area-chart {
  /* Colors use theme tokens */
  --area-gradient-start: var(--nu-color-warning-200);
  --area-gradient-end: var(--nu-color-warning-50);
  --line-stroke: var(--nu-color-warning-600);
  
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

Area charts now use the warning color palette by default for consistent theming:

```css
nu-area-chart {
  /* Primary area colors */
  --area-gradient-start: var(--nu-color-warning-200);
  --area-gradient-end: var(--nu-color-warning-100);
  --line-stroke: var(--nu-color-warning-600);
  
  /* Alternative color schemes */
  --area-gradient-start: var(--nu-color-primary-200);
  --area-gradient-end: var(--nu-color-primary-100);
  --line-stroke: var(--nu-color-primary-600);
}
```

### Light/Dark Theme Support

The charts automatically adapt to light and dark themes through CSS custom properties:

```css
/* Light theme (default) */
nu-area-chart {
  --grid-color: var(--nu-color-neutral-200);
  --axis-label-color: var(--nu-color-neutral-600);
  --background-color: var(--nu-color-neutral-0);
}

/* Dark theme */
[data-theme='dark'] nu-area-chart {
  --grid-color: var(--nu-color-neutral-700);
  --axis-label-color: var(--nu-color-neutral-400);
  --background-color: var(--nu-color-neutral-900);
}
```

### Advanced Customization Examples

Use theme tokens for consistent brand colors:

```html:preview
<nu-area-chart 
  data='[
    {"date": "2024-01-01", "value": 30},
    {"date": "2024-01-02", "value": 50},
    {"date": "2024-01-03", "value": 40},
    {"date": "2024-01-04", "value": 70},
    {"date": "2024-01-05", "value": 60}
  ]'
  width="500"
  height="250"
  style="
    --area-gradient-start: var(--nu-color-success-200);
    --area-gradient-end: var(--nu-color-success-100);
    --line-stroke: var(--nu-color-success-600);
    --grid-color: var(--nu-color-success-100);
  ">
</nu-area-chart>
```

## Data Format

Area charts expect data in the following format:

```typescript
interface AreaChartDataPoint {
  date: string | Date;
  value: number;
}
```

### JSON String

```html
<nu-area-chart 
  data='[
    {"date": "2024-01-01", "value": 100},
    {"date": "2024-01-02", "value": 120}
  ]'>
</nu-area-chart>
```

### JavaScript Array

```javascript
const chartData = [
  { date: new Date('2024-01-01'), value: 100 },
  { date: new Date('2024-01-02'), value: 120 }
];

document.querySelector('nu-area-chart').data = chartData;
```

## Customization

### CSS Custom Properties

```css
nu-area-chart {
  --area-gradient-start: rgba(34, 197, 94, 0.3);
  --area-gradient-end: rgba(34, 197, 94, 0.05);
  --line-stroke: #22c55e;
  --axis-label-color: #6b7280;
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

## Accessibility

Area charts include built-in accessibility features:
- Semantic SVG structure with proper ARIA labels
- High contrast mode support
- Reduced motion preferences respected
- Keyboard navigation support (coming soon)

## Server-Side Rendering

Area charts are fully compatible with server-side rendering and React Server Components. No client-side JavaScript is required for basic rendering.

[component-metadata:nu-area-chart]
