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
import SlDivider from '@onsonr/nebula/dist/react/divider';

const App = () => <SlDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<nu-divider style="--width: 4px;"></nu-divider>
```

{% raw %}

```jsx:react
import SlDivider from '@onsonr/nebula/dist/react/divider';

const App = () => <SlDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<nu-divider style="--color: tomato;"></nu-divider>
```

{% raw %}

```jsx:react
import SlDivider from '@onsonr/nebula/dist/react/divider';

const App = () => <SlDivider style={{ '--color': 'tomato' }} />;
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
import SlDivider from '@onsonr/nebula/dist/react/divider';

const App = () => (
  <>
    Above
    <SlDivider style={{ '--spacing': '2rem' }} />
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
import SlDivider from '@onsonr/nebula/dist/react/divider';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <SlDivider vertical />
    Middle
    <SlDivider vertical />
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
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuItem value="1">Option 1</SlMenuItem>
    <SlMenuItem value="2">Option 2</SlMenuItem>
    <SlMenuItem value="3">Option 3</SlMenuItem>
    <nu-divider />
    <SlMenuItem value="4">Option 4</SlMenuItem>
    <SlMenuItem value="5">Option 5</SlMenuItem>
    <SlMenuItem value="6">Option 6</SlMenuItem>
  </SlMenu>
);
```

{% endraw %}
