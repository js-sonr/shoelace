---
meta:
  title: Badge
  description: Badges are used to draw attention and display statuses or counts.
layout: component
---

```html:preview
<nu-badge>Badge</nu-badge>
```

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';

const App = () => <NuBadge>Badge</NuBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html:preview
<nu-badge variant="primary">Primary</nu-badge>
<nu-badge variant="success">Success</nu-badge>
<nu-badge variant="neutral">Neutral</nu-badge>
<nu-badge variant="warning">Warning</nu-badge>
<nu-badge variant="danger">Danger</nu-badge>
```

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';

const App = () => (
  <>
    <NuBadge variant="primary">Primary</NuBadge>
    <NuBadge variant="success">Success</NuBadge>
    <NuBadge variant="neutral">Neutral</NuBadge>
    <NuBadge variant="warning">Warning</NuBadge>
    <NuBadge variant="danger">Danger</NuBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html:preview
<nu-badge variant="primary" pill>Primary</nu-badge>
<nu-badge variant="success" pill>Success</nu-badge>
<nu-badge variant="neutral" pill>Neutral</nu-badge>
<nu-badge variant="warning" pill>Warning</nu-badge>
<nu-badge variant="danger" pill>Danger</nu-badge>
```

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';

const App = () => (
  <>
    <NuBadge variant="primary" pill>
      Primary
    </NuBadge>
    <NuBadge variant="success" pill>
      Success
    </NuBadge>
    <NuBadge variant="neutral" pill>
      Neutral
    </NuBadge>
    <NuBadge variant="warning" pill>
      Warning
    </NuBadge>
    <NuBadge variant="danger" pill>
      Danger
    </NuBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html:preview
<div class="badge-pulse">
  <nu-badge variant="primary" pill pulse>1</nu-badge>
  <nu-badge variant="success" pill pulse>1</nu-badge>
  <nu-badge variant="neutral" pill pulse>1</nu-badge>
  <nu-badge variant="warning" pill pulse>1</nu-badge>
  <nu-badge variant="danger" pill pulse>1</nu-badge>
</div>

<style>
  .badge-pulse sl-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';

const css = `
  .badge-pulse sl-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <NuBadge variant="primary" pill pulse>
        1
      </NuBadge>
      <NuBadge variant="success" pill pulse>
        1
      </NuBadge>
      <NuBadge variant="neutral" pill pulse>
        1
      </NuBadge>
      <NuBadge variant="warning" pill pulse>
        1
      </NuBadge>
      <NuBadge variant="danger" pill pulse>
        1
      </NuBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html:preview
<nu-button>
  Requests
  <nu-badge pill>30</nu-badge>
</nu-button>

<nu-button style="margin-inline-start: 1rem;">
  Warnings
  <nu-badge variant="warning" pill>8</nu-badge>
</nu-button>

<nu-button style="margin-inline-start: 1rem;">
  Errors
  <nu-badge variant="danger" pill>6</nu-badge>
</nu-button>
```

{% raw %}

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <NuButton>
      Requests
      <NuBadge pill>30</NuBadge>
    </NuButton>

    <NuButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <NuBadge variant="warning" pill>
        8
      </NuBadge>
    </NuButton>

    <NuButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <NuBadge variant="danger" pill>
        6
      </NuBadge>
    </NuButton>
  </>
);
```

{% endraw %}

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html:preview
<nu-menu style="max-width: 240px;">
  <nu-menu-label>Messages</nu-menu-label>
  <nu-menu-item>Comments <nu-badge slot="suffix" variant="neutral" pill>4</nu-badge></nu-menu-item>
  <nu-menu-item>Replies <nu-badge slot="suffix" variant="neutral" pill>12</nu-badge></nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';
import SlButton from '@onsonr/nebula/dist/react/button';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';
import SlMenuLabel from '@onsonr/nebula/dist/react/menu-label';

const App = () => (
  <NuMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--nu-panel-border-color)',
      borderRadius: 'var(--nu-border-radius-medium)'
    }}
  >
    <NuMenuLabel>Messages</NuMenuLabel>
    <NuMenuItem>
      Comments
      <NuBadge slot="suffix" variant="neutral" pill>
        4
      </NuBadge>
    </NuMenuItem>
    <NuMenuItem>
      Replies
      <NuBadge slot="suffix" variant="neutral" pill>
        12
      </NuBadge>
    </NuMenuItem>
  </NuMenu>
);
```

{% endraw %}
