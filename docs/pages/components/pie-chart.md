---
meta:
  title: Pie Chart
  description: Pie charts display proportional data as circular segments, ideal for showing portfolio allocations, market share, and categorical breakdowns.
layout: component
---

Pie charts are perfect for visualizing proportional data and part-to-whole relationships. Built with D3.js for mathematical precision and featuring gradient fills, rounded corners, and interactive hover effects.

```html:preview
<nu-pie-chart 
  data='[
    {"name": "AAPL", "value": 30},
    {"name": "BTC", "value": 22}, 
    {"name": "GOLD", "value": 11},
    {"name": "PLTR", "value": 9},
    {"name": "ADA", "value": 7},
    {"name": "MSFT", "value": 3}
  ]'
  size="300">
</nu-pie-chart>
```

## Examples

### Basic Pie Chart

A simple pie chart showing categorical data:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "Bitcoin", "value": 45},
    {"name": "Ethereum", "value": 30},
    {"name": "Cardano", "value": 15},
    {"name": "Solana", "value": 10}
  ]'
  size="250">
</nu-pie-chart>
```

### Donut Chart with Center Text

Create a donut chart by setting the inner radius and adding center content:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "AAPL", "value": 30},
    {"name": "MSFT", "value": 25},
    {"name": "GOOGL", "value": 20},
    {"name": "AMZN", "value": 15},
    {"name": "TSLA", "value": 10}
  ]'
  size="300"
  inner-radius="0.6"
  center-text="Portfolio"
  center-value="$184K">
</nu-pie-chart>
```

### Custom Colors

Customize slice colors with CSS custom properties:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "Revenue", "value": 60},
    {"name": "Costs", "value": 25},
    {"name": "Profit", "value": 15}
  ]'
  size="250"
  inner-radius="0.5"
  style="
    --slice-color-1: #22c55e;
    --slice-color-2: #ef4444;
    --slice-color-3: #3b82f6;
  ">
</nu-pie-chart>
```

### Cryptocurrency Portfolio

Perfect for displaying crypto allocations:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "BTC", "value": 45000},
    {"name": "ETH", "value": 22000},
    {"name": "ADA", "value": 8000},
    {"name": "SOL", "value": 5000},
    {"name": "DOT", "value": 3000}
  ]'
  size="350"
  inner-radius="0.55"
  center-text="Total"
  center-value="$83K"
  style="
    --slice-color-1: #f97316;
    --slice-color-2: #3b82f6;
    --slice-color-3: #06b6d4;
    --slice-color-4: #8b5cf6;
    --slice-color-5: #ec4899;
  ">
</nu-pie-chart>
```

### Donut Chart with Slot Content

Use the center slot for custom content:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "Stocks", "value": 50},
    {"name": "Bonds", "value": 30},
    {"name": "Cash", "value": 20}
  ]'
  size="280"
  inner-radius="0.65">
  <div slot="center" style="text-align: center;">
    <div style="color: #71717a; font-size: 1rem;">Assets</div>
    <div style="color: #000; font-size: 2rem; font-weight: bold;">$125K</div>
    <div style="color: #22c55e; font-size: 0.875rem;">+12.5%</div>
  </div>
</nu-pie-chart>
```

### Small Pie Chart

Compact size for dashboard widgets:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "Yes", "value": 65},
    {"name": "No", "value": 35}
  ]'
  size="150"
  style="
    --slice-color-1: #22c55e;
    --slice-color-2: #ef4444;
    --label-size: 12px;
  ">
</nu-pie-chart>
```

### Without Labels

Hide slice labels for a cleaner look:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "Category A", "value": 40},
    {"name": "Category B", "value": 30},
    {"name": "Category C", "value": 20},
    {"name": "Category D", "value": 10}
  ]'
  size="200"
  show-labels="false">
</nu-pie-chart>
```

## Theming and Customization

The Pie Chart component now leverages Nebula's comprehensive design token system for consistent theming and customization across light and dark modes.

### Consistent Design Tokens

All chart styling now uses standardized design tokens from the Nebula theme system:

```css
nu-pie-chart {
  /* Colors use theme tokens */
  --slice-color-1: var(--nu-color-purple-600);
  --slice-color-2: var(--nu-color-blue-600);
  --slice-color-3: var(--nu-color-cyan-600);
  --slice-color-4: var(--nu-color-purple-400);
  --slice-color-5: var(--nu-color-blue-400);
  --slice-color-6: var(--nu-color-cyan-400);
  
  /* Typography tokens */
  --label-size: var(--nu-font-size-small);
  --label-weight: var(--nu-font-weight-normal);
  --center-text-size: var(--nu-font-size-medium);
  --center-value-size: var(--nu-font-size-large);
  
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

Pie charts now use a purple/blue/cyan gradient color scheme by default for consistent theming:

```css
nu-pie-chart {
  /* Primary gradient palette */
  --slice-color-1: var(--nu-color-purple-600);
  --slice-color-2: var(--nu-color-purple-500);
  --slice-color-3: var(--nu-color-blue-600);
  --slice-color-4: var(--nu-color-blue-500);
  --slice-color-5: var(--nu-color-cyan-600);
  --slice-color-6: var(--nu-color-cyan-500);
  
  /* Stroke and labels */
  --slice-stroke: var(--nu-color-neutral-0);
  --label-color: var(--nu-color-neutral-700);
  --center-text-color: var(--nu-color-neutral-600);
  --center-value-color: var(--nu-color-neutral-900);
}
```

### Light/Dark Theme Support

The charts automatically adapt to light and dark themes through CSS custom properties:

```css
/* Light theme (default) */
nu-pie-chart {
  --slice-stroke: var(--nu-color-neutral-0);
  --label-color: var(--nu-color-neutral-700);
  --center-text-color: var(--nu-color-neutral-600);
  --center-value-color: var(--nu-color-neutral-900);
  --background-color: var(--nu-color-neutral-0);
}

/* Dark theme */
[data-theme='dark'] nu-pie-chart {
  --slice-stroke: var(--nu-color-neutral-800);
  --label-color: var(--nu-color-neutral-300);
  --center-text-color: var(--nu-color-neutral-400);
  --center-value-color: var(--nu-color-neutral-0);
  --background-color: var(--nu-color-neutral-900);
  
  /* Adjusted slice colors for dark theme */
  --slice-color-1: var(--nu-color-purple-400);
  --slice-color-2: var(--nu-color-purple-300);
  --slice-color-3: var(--nu-color-blue-400);
  --slice-color-4: var(--nu-color-blue-300);
  --slice-color-5: var(--nu-color-cyan-400);
  --slice-color-6: var(--nu-color-cyan-300);
}
```

### Advanced Customization Examples

Use theme tokens for consistent brand colors:

```html:preview
<nu-pie-chart 
  data='[
    {"name": "Revenue", "value": 45},
    {"name": "Costs", "value": 30},
    {"name": "Profit", "value": 25}
  ]'
  size="280"
  inner-radius="0.5"
  center-text="Business"
  center-value="$125K"
  style="
    --slice-color-1: var(--nu-color-success-600);
    --slice-color-2: var(--nu-color-warning-600);
    --slice-color-3: var(--nu-color-primary-600);
    --center-text-color: var(--nu-color-neutral-600);
    --center-value-color: var(--nu-color-success-700);
  ">
</nu-pie-chart>
```

## Data Format

Pie charts expect data in the following format:

```typescript
interface PieChartDataPoint {
  name: string;
  value: number;
  color?: string;
}
```

### JSON String

```html
<nu-pie-chart 
  data='[
    {"name": "Bitcoin", "value": 45000},
    {"name": "Ethereum", "value": 22000}
  ]'>
</nu-pie-chart>
```

### JavaScript Array

```javascript
const portfolioData = [
  { name: 'Bitcoin', value: 45000 },
  { name: 'Ethereum', value: 22000 },
  { name: 'Cardano', value: 8000 }
];

document.querySelector('nu-pie-chart').data = portfolioData;
```

### With Custom Colors

```javascript
const customData = [
  { name: 'Bitcoin', value: 45000, color: '#f97316' },
  { name: 'Ethereum', value: 22000, color: '#3b82f6' }
];
```

## Customization

### CSS Custom Properties

```css
nu-pie-chart {
  /* Slice colors */
  --slice-color-1: #7e4cfe;
  --slice-color-2: #895cfc;
  --slice-color-3: #956bff;
  --slice-color-4: #a37fff;
  --slice-color-5: #b291fd;
  --slice-color-6: #b597ff;
  
  /* Styling */
  --slice-stroke: rgba(255, 255, 255, 0.2);
  --label-color: #eee;
  --label-size: 14px;
  --center-text-color: #71717a;
  --center-value-color: #000;
}
```

### Properties

- `size` - Chart diameter in pixels
- `inner-radius` - Inner radius for donut charts (0-1)
- `gap` - Gap between slices in radians
- `corner-radius` - Rounded corner radius
- `show-labels` - Show/hide slice labels
- `show-values` - Show/hide percentage values
- `min-label-angle` - Minimum angle to show labels
- `center-text` - Text for donut center
- `center-value` - Value for donut center

### Creating Donut Charts

Set the `inner-radius` property to create donut charts:

- `inner-radius="0"` - Full pie chart (default)
- `inner-radius="0.5"` - Moderate donut
- `inner-radius="0.7"` - Thin donut ring

## Events

### nu-slice-hover
Emitted when hovering over a pie slice.

```javascript
chart.addEventListener('nu-slice-hover', (event) => {
  console.log('Hovered slice:', event.detail.data);
});
```

### nu-slice-click
Emitted when clicking a pie slice.

```javascript
chart.addEventListener('nu-slice-click', (event) => {
  console.log('Clicked slice:', event.detail.data);
  console.log('Percentage:', ((event.detail.value / totalValue) * 100).toFixed(1) + '%');
});
```

## Accessibility

Pie charts include built-in accessibility features:
- Semantic SVG structure with proper ARIA labels
- High contrast mode support
- Reduced motion preferences respected
- Interactive elements with proper focus states
- Screen reader friendly data representation

## Server-Side Rendering

Pie charts are fully compatible with server-side rendering and React Server Components. The charts render completely on the server with gradients and interactive elements.

## Best Practices

- **Limit slices**: Use 6 or fewer slices for optimal readability
- **Sort data**: Order slices by value for better visual hierarchy  
- **Use donut charts**: For center content or when comparing multiple pies
- **Consistent colors**: Use brand colors or semantic color schemes
- **Meaningful labels**: Keep slice labels short and descriptive

[component-metadata:nu-pie-chart]
