---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<nu-divider></nu-divider>
```

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';

const App = () => <NuDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<nu-divider style="--width: 4px;"></nu-divider>
```

{% raw %}

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';

const App = () => <NuDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<nu-divider style="--color: tomato;"></nu-divider>
```

{% raw %}

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';

const App = () => <NuDivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <nu-divider style="--spacing: 2rem;"></nu-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';

const App = () => (
  <>
    Above
    <NuDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <nu-divider vertical></nu-divider>
  Middle
  <nu-divider vertical></nu-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <NuDivider vertical />
    Middle
    <NuDivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item value="1">Option 1</nu-menu-item>
  <nu-menu-item value="2">Option 2</nu-menu-item>
  <nu-menu-item value="3">Option 3</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item value="4">Option 4</nu-menu-item>
  <nu-menu-item value="5">Option 5</nu-menu-item>
  <nu-menu-item value="6">Option 6</nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';
import SlMenu from '@sonr.io/nebula/dist/react/menu';
import SlMenuItem from '@sonr.io/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem value="1">Option 1</NuMenuItem>
    <NuMenuItem value="2">Option 2</NuMenuItem>
    <NuMenuItem value="3">Option 3</NuMenuItem>
    <nu-divider />
    <NuMenuItem value="4">Option 4</NuMenuItem>
    <NuMenuItem value="5">Option 5</NuMenuItem>
    <NuMenuItem value="6">Option 6</NuMenuItem>
  </NuMenu>
);
```

{% endraw %}
