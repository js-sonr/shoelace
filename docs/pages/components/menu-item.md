---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
---

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item>Option 1</nu-menu-item>
  <nu-menu-item>Option 2</nu-menu-item>
  <nu-menu-item>Option 3</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item type="checkbox" checked>Checkbox</nu-menu-item>
  <nu-menu-item disabled>Disabled</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item>
    Prefix Icon
    <nu-icon slot="prefix" name="gift"></nu-icon>
  </nu-menu-item>
  <nu-menu-item>
    Suffix Icon
    <nu-icon slot="suffix" name="heart"></nu-icon>
  </nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem>Option 1</NuMenuItem>
    <NuMenuItem>Option 2</NuMenuItem>
    <NuMenuItem>Option 3</NuMenuItem>
    <NuDivider />
    <NuMenuItem type="checkbox" checked>
      Checkbox
    </NuMenuItem>
    <NuMenuItem disabled>Disabled</NuMenuItem>
    <NuDivider />
    <NuMenuItem>
      Prefix Icon
      <NuIcon slot="prefix" name="gift" />
    </NuMenuItem>
    <NuMenuItem>
      Suffix Icon
      <NuIcon slot="suffix" name="heart" />
    </NuMenuItem>
  </NuMenu>
);
```

{% endraw %}

## Examples

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item>
    <nu-icon slot="prefix" name="house"></nu-icon>
    Home
  </nu-menu-item>

  <nu-menu-item>
    <nu-icon slot="prefix" name="envelope"></nu-icon>
    Messages
    <nu-badge slot="suffix" variant="primary" pill>12</nu-badge>
  </nu-menu-item>

  <nu-divider></nu-divider>

  <nu-menu-item>
    <nu-icon slot="prefix" name="gear"></nu-icon>
    Settings
  </nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlBadge from '@onsonr/nebula/dist/react/badge';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem>
      <NuIcon slot="prefix" name="house" />
      Home
    </NuMenuItem>

    <NuMenuItem>
      <NuIcon slot="prefix" name="envelope" />
      Messages
      <NuBadge slot="suffix" variant="primary" pill>
        12
      </NuBadge>
    </NuMenuItem>

    <NuDivider />

    <NuMenuItem>
      <NuIcon slot="prefix" name="gear" />
      Settings
    </NuMenuItem>
  </NuMenu>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item>Option 1</nu-menu-item>
  <nu-menu-item disabled>Option 2</nu-menu-item>
  <nu-menu-item>Option 3</nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem>Option 1</NuMenuItem>
    <NuMenuItem disabled>Option 2</NuMenuItem>
    <NuMenuItem>Option 3</NuMenuItem>
  </NuMenu>
);
```

{% endraw %}

### Loading

Use the `loading` attribute to indicate that a menu item is busy. Like a disabled menu item, clicks will be suppressed until the loading state is removed.

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item>Option 1</nu-menu-item>
  <nu-menu-item loading>Option 2</nu-menu-item>
  <nu-menu-item>Option 3</nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem>Option 1</NuMenuItem>
    <NuMenuItem loading>Option 2</NuMenuItem>
    <NuMenuItem>Option 3</NuMenuItem>
  </NuMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item type="checkbox">Autosave</nu-menu-item>
  <nu-menu-item type="checkbox" checked>Check Spelling</nu-menu-item>
  <nu-menu-item type="checkbox">Word Wrap</nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem type="checkbox">Autosave</NuMenuItem>
    <NuMenuItem type="checkbox" checked>
      Check Spelling
    </NuMenuItem>
    <NuMenuItem type="checkbox">Word Wrap</NuMenuItem>
  </NuMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `sl-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
<nu-menu class="menu-value" style="max-width: 200px;">
  <nu-menu-item value="opt-1">Option 1</nu-menu-item>
  <nu-menu-item value="opt-2">Option 2</nu-menu-item>
  <nu-menu-item value="opt-3">Option 3</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item type="checkbox" value="opt-4">Checkbox 4</nu-menu-item>
  <nu-menu-item type="checkbox" value="opt-5">Checkbox 5</nu-menu-item>
  <nu-menu-item type="checkbox" value="opt-6">Checkbox 6</nu-menu-item>
</nu-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('sl-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

{% raw %}

```jsx:react
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <NuMenu style={{ maxWidth: '200px' }} onSlSelect={handleSelect}>
      <NuMenuItem value="opt-1">Option 1</NuMenuItem>
      <NuMenuItem value="opt-2">Option 2</NuMenuItem>
      <NuMenuItem value="opt-3">Option 3</NuMenuItem>
    </NuMenu>
  );
};
```

{% endraw %}
