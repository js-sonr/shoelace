---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item value="undo">Undo</nu-menu-item>
  <nu-menu-item value="redo">Redo</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item value="cut">Cut</nu-menu-item>
  <nu-menu-item value="copy">Copy</nu-menu-item>
  <nu-menu-item value="paste">Paste</nu-menu-item>
  <nu-menu-item value="delete">Delete</nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem value="undo">Undo</NuMenuItem>
    <NuMenuItem value="redo">Redo</NuMenuItem>
    <NuDivider />
    <NuMenuItem value="cut">Cut</NuMenuItem>
    <NuMenuItem value="copy">Copy</NuMenuItem>
    <NuMenuItem value="paste">Paste</NuMenuItem>
    <NuMenuItem value="delete">Delete</NuMenuItem>
  </NuMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::

## Examples

### In Dropdowns

Menus work really well when used inside [dropdowns](/components/dropdown).

```html:preview
<nu-dropdown>
  <nu-button slot="trigger" caret>Edit</nu-button>
  <nu-menu>
    <nu-menu-item value="cut">Cut</nu-menu-item>
    <nu-menu-item value="copy">Copy</nu-menu-item>
    <nu-menu-item value="paste">Paste</nu-menu-item>
  </nu-menu>
</nu-dropdown>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuDropdown>
    <NuButton slot="trigger" caret>Edit</NuButton>
    <NuMenu>
      <NuMenuItem value="cut">Cut</NuMenuItem>
      <NuMenuItem value="copy">Copy</NuMenuItem>
      <NuMenuItem value="paste">Paste</NuMenuItem>
    </NuMenu>
  </NuDropdown>
);
```

### Submenus

To create a submenu, nest an `<nu-menu slot="submenu">` in any [menu item](/components/menu-item).

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-item value="undo">Undo</nu-menu-item>
  <nu-menu-item value="redo">Redo</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item value="cut">Cut</nu-menu-item>
  <nu-menu-item value="copy">Copy</nu-menu-item>
  <nu-menu-item value="paste">Paste</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-item>
    Find
    <nu-menu slot="submenu">
      <nu-menu-item value="find">Find…</nu-menu-item>
      <nu-menu-item value="find-previous">Find Next</nu-menu-item>
      <nu-menu-item value="find-next">Find Previous</nu-menu-item>
    </nu-menu>
  </nu-menu-item>
  <nu-menu-item>
    Transformations
    <nu-menu slot="submenu">
      <nu-menu-item value="uppercase">Make uppercase</nu-menu-item>
      <nu-menu-item value="lowercase">Make lowercase</nu-menu-item>
      <nu-menu-item value="capitalize">Capitalize</nu-menu-item>
    </nu-menu>
  </nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuItem value="undo">Undo</NuMenuItem>
    <NuMenuItem value="redo">Redo</NuMenuItem>
    <NuDivider />
    <NuMenuItem value="cut">Cut</NuMenuItem>
    <NuMenuItem value="copy">Copy</NuMenuItem>
    <NuMenuItem value="paste">Paste</NuMenuItem>
    <NuDivider />
    <NuMenuItem>
      Find
      <NuMenu slot="submenu">
        <NuMenuItem value="find">Find…</NuMenuItem>
        <NuMenuItem value="find-previous">Find Next</NuMenuItem>
        <NuMenuItem value="find-next">Find Previous</NuMenuItem>
      </NuMenu>
    </NuMenuItem>
    <NuMenuItem>
      Transformations
      <NuMenu slot="submenu">
        <NuMenuItem value="uppercase">Make uppercase</NuMenuItem>
        <NuMenuItem value="lowercase">Make lowercase</NuMenuItem>
        <NuMenuItem value="capitalize">Capitalize</NuMenuItem>
      </NuMenu>
    </NuMenuItem>
  </NuMenu>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenus when possible.
:::

{% endraw %}
