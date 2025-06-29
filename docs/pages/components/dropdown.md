---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<nu-dropdown>
  <nu-button slot="trigger" caret>Dropdown</nu-button>
  <nu-menu>
    <nu-menu-item>Dropdown Item 1</nu-menu-item>
    <nu-menu-item>Dropdown Item 2</nu-menu-item>
    <nu-menu-item>Dropdown Item 3</nu-menu-item>
    <nu-divider></nu-divider>
    <nu-menu-item type="checkbox" checked>Checkbox</nu-menu-item>
    <nu-menu-item disabled>Disabled</nu-menu-item>
    <nu-divider></nu-divider>
    <nu-menu-item>
      Prefix
      <nu-icon slot="prefix" name="gift"></nu-icon>
    </nu-menu-item>
    <nu-menu-item>
      Suffix Icon
      <nu-icon slot="suffix" name="heart"></nu-icon>
    </nu-menu-item>
  </nu-menu>
</nu-dropdown>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <SlDropdown>
    <SlButton slot="trigger" caret>
      Dropdown
    </SlButton>
    <SlMenu>
      <SlMenuItem>Dropdown Item 1</SlMenuItem>
      <SlMenuItem>Dropdown Item 2</SlMenuItem>
      <SlMenuItem>Dropdown Item 3</SlMenuItem>
      <SlDivider />
      <SlMenuItem type="checkbox" checked>
        Checkbox
      </SlMenuItem>
      <SlMenuItem disabled>Disabled</SlMenuItem>
      <SlDivider />
      <SlMenuItem>
        Prefix
        <SlIcon slot="prefix" name="gift" />
      </SlMenuItem>
      <SlMenuItem>
        Suffix Icon
        <SlIcon slot="suffix" name="heart" />
      </SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`sl-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <nu-dropdown>
    <nu-button slot="trigger" caret>Edit</nu-button>
    <nu-menu>
      <nu-menu-item value="cut">Cut</nu-menu-item>
      <nu-menu-item value="copy">Copy</nu-menu-item>
      <nu-menu-item value="paste">Paste</nu-menu-item>
    </nu-menu>
  </nu-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('sl-dropdown');

  dropdown.addEventListener('sl-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <SlDropdown>
      <SlButton slot="trigger" caret>
        Edit
      </SlButton>
      <SlMenu onSlSelect={handleSelect}>
        <SlMenuItem value="cut">Cut</SlMenuItem>
        <SlMenuItem value="copy">Copy</SlMenuItem>
        <SlMenuItem value="paste">Paste</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <nu-dropdown>
    <nu-button slot="trigger" caret>Edit</nu-button>
    <nu-menu>
      <nu-menu-item value="cut">Cut</nu-menu-item>
      <nu-menu-item value="copy">Copy</nu-menu-item>
      <nu-menu-item value="paste">Paste</nu-menu-item>
    </nu-menu>
  </nu-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('sl-menu-item[value="cut"]');
  const copy = container.querySelector('sl-menu-item[value="copy"]');
  const paste = container.querySelector('sl-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <SlDropdown>
      <SlButton slot="trigger" caret>
        Edit
      </SlButton>
      <SlMenu>
        <SlMenuItem onClick={handleCut}>Cut</SlMenuItem>
        <SlMenuItem onClick={handleCopy}>Copy</SlMenuItem>
        <SlMenuItem onClick={handlePaste}>Paste</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<nu-dropdown placement="top-start">
  <nu-button slot="trigger" caret>Edit</nu-button>
  <nu-menu>
    <nu-menu-item>Cut</nu-menu-item>
    <nu-menu-item>Copy</nu-menu-item>
    <nu-menu-item>Paste</nu-menu-item>
    <nu-divider></nu-divider>
    <nu-menu-item>Find</nu-menu-item>
    <nu-menu-item>Replace</nu-menu-item>
  </nu-menu>
</nu-dropdown>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <SlDropdown placement="top-start">
    <SlButton slot="trigger" caret>
      Edit
    </SlButton>
    <SlMenu>
      <SlMenuItem>Cut</SlMenuItem>
      <SlMenuItem>Copy</SlMenuItem>
      <SlMenuItem>Paste</SlMenuItem>
      <SlDivider />
      <SlMenuItem>Find</SlMenuItem>
      <SlMenuItem>Replace</SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<nu-dropdown distance="30">
  <nu-button slot="trigger" caret>Edit</nu-button>
  <nu-menu>
    <nu-menu-item>Cut</nu-menu-item>
    <nu-menu-item>Copy</nu-menu-item>
    <nu-menu-item>Paste</nu-menu-item>
    <nu-divider></nu-divider>
    <nu-menu-item>Find</nu-menu-item>
    <nu-menu-item>Replace</nu-menu-item>
  </nu-menu>
</nu-dropdown>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <SlDropdown distance={30}>
    <SlButton slot="trigger" caret>
      Edit
    </SlButton>
    <SlMenu>
      <SlMenuItem>Cut</SlMenuItem>
      <SlMenuItem>Copy</SlMenuItem>
      <SlMenuItem>Paste</SlMenuItem>
      <SlDivider />
      <SlMenuItem>Find</SlMenuItem>
      <SlMenuItem>Replace</SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<nu-dropdown skidding="30">
  <nu-button slot="trigger" caret>Edit</nu-button>
  <nu-menu>
    <nu-menu-item>Cut</nu-menu-item>
    <nu-menu-item>Copy</nu-menu-item>
    <nu-menu-item>Paste</nu-menu-item>
    <nu-divider></nu-divider>
    <nu-menu-item>Find</nu-menu-item>
    <nu-menu-item>Replace</nu-menu-item>
  </nu-menu>
</nu-dropdown>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <SlDropdown skidding={30}>
    <SlButton slot="trigger" caret>
      Edit
    </SlButton>
    <SlMenu>
      <SlMenuItem>Cut</SlMenuItem>
      <SlMenuItem>Copy</SlMenuItem>
      <SlMenuItem>Paste</SlMenuItem>
      <SlDivider />
      <SlMenuItem>Find</SlMenuItem>
      <SlMenuItem>Replace</SlMenuItem>
    </SlMenu>
  </SlDropdown>
);
```

### Submenus

To create a submenu, nest an `<nu-menu slot="submenu">` element in a [menu item](/components/menu-item).

```html:preview
<nu-dropdown>
  <nu-button slot="trigger" caret>Edit</nu-button>

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
</nu-dropdown>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--nu-panel-border-color);
    padding: var(--nu-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <SlDropdown>
      <SlButton slot="trigger" caret>Edit</SlButton>

      <SlMenu style="max-width: 200px;">
        <SlMenuItem value="undo">Undo</SlMenuItem>
        <SlMenuItem value="redo">Redo</SlMenuItem>
        <SlDivider />
        <SlMenuItem value="cut">Cut</SlMenuItem>
        <SlMenuItem value="copy">Copy</SlMenuItem>
        <SlMenuItem value="paste">Paste</SlMenuItem>
        <SlDivider />
        <SlMenuItem>
          Find
          <SlMenu slot="submenu">
            <SlMenuItem value="find">Find…</SlMenuItem>
            <SlMenuItem value="find-previous">Find Next</SlMenuItem>
            <SlMenuItem value="find-next">Find Previous</SlMenuItem>
          </SlMenu>
        </SlMenuItem>
        <SlMenuItem>
          Transformations
          <SlMenu slot="submenu">
            <SlMenuItem value="uppercase">Make uppercase</SlMenuItem>
            <SlMenuItem value="lowercase">Make lowercase</SlMenuItem>
            <SlMenuItem value="capitalize">Capitalize</SlMenuItem>
          </SlMenu>
        </SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenu when possible.
:::

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <nu-dropdown>
    <nu-button slot="trigger" caret>No Hoist</nu-button>
    <nu-menu>
      <nu-menu-item>Item 1</nu-menu-item>
      <nu-menu-item>Item 2</nu-menu-item>
      <nu-menu-item>Item 3</nu-menu-item>
    </nu-menu>
  </nu-dropdown>

  <nu-dropdown hoist>
    <nu-button slot="trigger" caret>Hoist</nu-button>
    <nu-menu>
      <nu-menu-item>Item 1</nu-menu-item>
      <nu-menu-item>Item 2</nu-menu-item>
      <nu-menu-item>Item 3</nu-menu-item>
    </nu-menu>
  </nu-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--nu-panel-border-color);
    padding: var(--nu-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--nu-panel-border-color);
    padding: var(--nu-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <SlDropdown>
        <SlButton slot="trigger" caret>
          No Hoist
        </SlButton>
        <SlMenu>
          <SlMenuItem>Item 1</SlMenuItem>
          <SlMenuItem>Item 2</SlMenuItem>
          <SlMenuItem>Item 3</SlMenuItem>
        </SlMenu>
      </SlDropdown>

      <SlDropdown hoist>
        <SlButton slot="trigger" caret>
          Hoist
        </SlButton>
        <SlMenu>
          <SlMenuItem>Item 1</SlMenuItem>
          <SlMenuItem>Item 2</SlMenuItem>
          <SlMenuItem>Item 3</SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </div>

    <style>{css}</style>
  </>
);
```
