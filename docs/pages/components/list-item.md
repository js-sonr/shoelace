---
meta:
  title: List Item
  description: List items display individual activities in blockchain applications, such as transactions, balance updates, and events.
layout: component
---

List items are the building blocks for activity feeds and transaction lists. They display comprehensive information about blockchain activities including amounts, timestamps, status indicators, and custom metadata.

```html:preview
<nu-list-item
  type="transaction"
  title="Sent USDC"
  description="Payment to merchant wallet"
  amount="-250.00"
  currency="USDC"
  timestamp="2024-06-29T10:30:00Z"
  status="completed">
</nu-list-item>
```

```jsx:react
import { NuListItem } from '@onsonr/nebula/dist/react/list-item';

const App = () => (
  <NuListItem
    type="transaction"
    title="Sent USDC"
    description="Payment to merchant wallet"
    amount="-250.00"
    currency="USDC"
    timestamp="2024-06-29T10:30:00Z"
    status="completed"
  />
);
```

## Examples

### Activity Types

List items support different activity types that automatically apply appropriate styling and icons.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    type="transaction"
    title="Sent Bitcoin"
    description="Transfer to external wallet"
    amount="-0.025"
    currency="BTC"
    timestamp="2024-06-29T10:30:00Z"
    status="completed">
  </nu-list-item>
  
  <nu-list-item
    type="balance"
    title="Account Balance Updated"
    description="Automatic portfolio rebalancing"
    amount="+1,250.00"
    currency="USDC"
    timestamp="2024-06-29T09:15:00Z"
    status="completed">
  </nu-list-item>
  
  <nu-list-item
    type="event"
    title="Security Alert"
    description="New device login from San Francisco"
    timestamp="2024-06-29T08:45:00Z"
    status="completed">
  </nu-list-item>
</div>
```

### Status Indicators

Display different status indicators for pending, completed, and failed activities.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    type="transaction"
    title="Pending Transaction"
    description="Waiting for network confirmation"
    amount="-100.00"
    currency="ETH"
    timestamp="2024-06-29T10:30:00Z"
    status="pending">
  </nu-list-item>
  
  <nu-list-item
    type="transaction"
    title="Completed Transaction"
    description="Successfully processed"
    amount="+500.00"
    currency="USDC"
    timestamp="2024-06-29T09:15:00Z"
    status="completed">
  </nu-list-item>
  
  <nu-list-item
    type="transaction"
    title="Failed Transaction"
    description="Insufficient gas fees"
    amount="-25.00"
    currency="ETH"
    timestamp="2024-06-29T08:45:00Z"
    status="failed">
  </nu-list-item>
</div>
```

### Custom Icons

Override default icons using the `icon` attribute or custom icon slots.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    type="transaction"
    title="Ethereum Payment"
    description="Using custom ETH icon"
    amount="-2.5"
    currency="ETH"
    icon="ethereum"
    timestamp="2024-06-29T10:30:00Z"
    status="completed">
  </nu-list-item>
  
  <nu-list-item
    type="transaction"
    title="Bitcoin Transfer"
    description="Using custom BTC icon"
    amount="+0.15"
    currency="BTC"
    icon="bitcoin"
    timestamp="2024-06-29T09:15:00Z"
    status="completed">
  </nu-list-item>
  
  <nu-list-item
    type="transaction"
    title="Custom Icon Slot"
    description="Using slotted custom icon"
    amount="-1000.00"
    currency="USDC"
    timestamp="2024-06-29T08:45:00Z"
    status="completed">
    <nu-icon slot="icon" name="shield-check" style="color: var(--nu-color-success-600);"></nu-icon>
  </nu-list-item>
</div>
```

### Metadata Display

Show additional metadata information about activities.

```html:preview
<nu-list-item
  id="metadata-example"
  type="transaction"
  title="Complex Transaction"
  description="Multi-signature wallet transaction"
  amount="-5,000.00"
  currency="USDC"
  timestamp="2024-06-29T10:30:00Z"
  status="completed">
</nu-list-item>

<script>
  const metadataItem = document.getElementById('metadata-example');
  metadataItem.metadata = {
    'Gas Fee': '0.002 ETH',
    'Block Number': '19,845,273',
    'Confirmations': '24',
    'Transaction Hash': '0x1234...abcd'
  };
</script>
```

### Interactive Features

List items can be made clickable and selectable for user interactions.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    id="clickable-item"
    type="transaction"
    title="Clickable Transaction"
    description="Click to view details"
    amount="-150.00"
    currency="USDC"
    timestamp="2024-06-29T10:30:00Z"
    status="completed"
    clickable>
  </nu-list-item>
  
  <nu-list-item
    id="selectable-item"
    type="balance"
    title="Selectable Item"
    description="Can be selected for bulk actions"
    amount="+750.00"
    currency="ETH"
    timestamp="2024-06-29T09:15:00Z"
    status="completed"
    clickable>
  </nu-list-item>
</div>

<div id="interaction-log" style="margin-top: 1rem; padding: 1rem; background: var(--nu-color-neutral-50); border-radius: 4px; font-family: monospace; font-size: 0.875rem; max-height: 100px; overflow-y: auto;"></div>

<script>
  const clickableItem = document.getElementById('clickable-item');
  const selectableItem = document.getElementById('selectable-item');
  const interactionLog = document.getElementById('interaction-log');
  
  function logInteraction(message) {
    const timestamp = new Date().toLocaleTimeString();
    interactionLog.innerHTML = `[${timestamp}] ${message}<br>` + interactionLog.innerHTML;
  }
  
  clickableItem.addEventListener('nu-item-click', (event) => {
    logInteraction(`Clicked: ${event.detail.title}`);
  });
  
  selectableItem.addEventListener('nu-item-click', (event) => {
    logInteraction(`Selected: ${event.detail.title}`);
    selectableItem.selected = !selectableItem.selected;
  });
</script>
```

### Custom Content with Slots

Use slots to customize different parts of the list item.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    type="transaction"
    timestamp="2024-06-29T10:30:00Z"
    status="completed">
    <nu-icon slot="icon" name="award" style="color: var(--nu-color-warning-600);"></nu-icon>
    <div slot="title">
      <strong>Achievement Unlocked!</strong>
      <nu-badge variant="success" size="small" style="margin-left: 0.5rem;">New</nu-badge>
    </div>
    <div slot="description">
      You've completed your first transaction
    </div>
    <div slot="amount">
      <nu-icon name="trophy" style="color: var(--nu-color-warning-600);"></nu-icon>
    </div>
  </nu-list-item>
  
  <nu-list-item
    type="event"
    title="Staking Rewards"
    description="Weekly staking rewards received"
    amount="+15.75"
    currency="ETH"
    timestamp="2024-06-29T09:15:00Z"
    status="completed">
    <div slot="metadata">
      <nu-badge variant="primary" size="small">Validator #1247</nu-badge>
      <nu-badge variant="neutral" size="small">APY: 4.2%</nu-badge>
    </div>
  </nu-list-item>
</div>
```

### Responsive Design

List items automatically adapt to smaller screens with responsive layouts.

```html:preview
<div style="max-width: 320px; border: 1px dashed var(--nu-color-neutral-300); padding: 1rem;">
  <h4 style="margin: 0 0 1rem 0; font-size: 0.875rem; color: var(--nu-color-neutral-600);">Mobile View (320px)</h4>
  <nu-list-item
    type="transaction"
    title="Mobile Responsive Item"
    description="This item adapts to smaller screens automatically"
    amount="-1,234.56"
    currency="USDC"
    timestamp="2024-06-29T10:30:00Z"
    status="completed">
  </nu-list-item>
</div>
```

### Accessibility Features

List items include comprehensive accessibility support.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    type="transaction"
    title="Screen Reader Friendly"
    description="This item includes proper ARIA labels and roles"
    amount="-99.99"
    currency="USDC"
    timestamp="2024-06-29T10:30:00Z"
    status="completed"
    clickable>
  </nu-list-item>
  
  <nu-list-item
    type="event"
    title="Keyboard Navigation"
    description="Use Tab and Enter keys to interact"
    timestamp="2024-06-29T09:15:00Z"
    status="completed"
    clickable>
  </nu-list-item>
</div>
```

## Customization Options

### Hiding Information

Control which information is displayed using boolean attributes.

```html:preview
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <nu-list-item
    type="transaction"
    title="No Status Indicator"
    description="Status indicator is hidden"
    amount="-50.00"
    currency="USDC"
    timestamp="2024-06-29T10:30:00Z"
    status="completed"
    show-status="false">
  </nu-list-item>
  
  <nu-list-item
    type="transaction"
    title="No Timestamp"
    description="Timestamp is hidden"
    amount="+100.00"
    currency="ETH"
    timestamp="2024-06-29T09:15:00Z"
    status="completed"
    show-timestamp="false">
  </nu-list-item>
  
  <nu-list-item
    type="event"
    title="Minimal Display"
    description="Only essential information shown"
    timestamp="2024-06-29T08:45:00Z"
    status="completed"
    show-status="false"
    show-timestamp="false">
  </nu-list-item>
</div>
```

## Usage Guidelines

### When to Use List Items

- **Individual Activities**: Display single activities within activity feeds
- **Transaction Entries**: Show individual transactions with full details
- **Event Notifications**: Present system events and user actions
- **Standalone Displays**: Use outside of lists for featured activities

### Best Practices

1. **Information Hierarchy**: Use title for primary information, description for secondary details
2. **Status Clarity**: Always show status for pending or failed activities
3. **Amount Formatting**: Use consistent currency formatting and positive/negative indicators
4. **Icon Consistency**: Use consistent iconography for activity types
5. **Clickable Areas**: Make the entire item clickable when possible for better UX

### Accessibility

- Items use `role="listitem"` for proper screen reader support
- Keyboard navigation is supported with Tab and Enter keys
- Color is not the only indicator for status (icons are also used)
- Sufficient color contrast is maintained for all text elements
- Focus indicators are clearly visible

### Styling Guidelines

- **Transaction Items**: Use blue accent color with appropriate directional icons
- **Balance Items**: Use green accent color with wallet or balance icons  
- **Event Items**: Use yellow accent color with notification icons
- **Failed States**: Use red accent color to indicate errors
- **Pending States**: Reduce opacity to indicate incomplete status

[component-metadata:nu-list-item]
