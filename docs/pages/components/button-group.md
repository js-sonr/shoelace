---
meta:
  title: Button Group
  description: Button groups can be used to group related buttons into sections.
layout: component
---

```html:preview
<nu-button-group label="Alignment">
  <nu-button>Left</nu-button>
  <nu-button>Center</nu-button>
  <nu-button>Right</nu-button>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';

const App = () => (
  <NuButtonGroup label="Alignment">
    <NuButton>Left</NuButton>
    <NuButton>Center</NuButton>
    <NuButton>Right</NuButton>
  </NuButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html:preview
<nu-button-group label="Alignment">
  <nu-button size="small">Left</nu-button>
  <nu-button size="small">Center</nu-button>
  <nu-button size="small">Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button size="medium">Left</nu-button>
  <nu-button size="medium">Center</nu-button>
  <nu-button size="medium">Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button size="large">Left</nu-button>
  <nu-button size="large">Center</nu-button>
  <nu-button size="large">Right</nu-button>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';

const App = () => (
  <>
    <NuButtonGroup label="Alignment">
      <NuButton size="small">Left</NuButton>
      <NuButton size="small">Center</NuButton>
      <NuButton size="small">Right</NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton size="medium">Left</NuButton>
      <NuButton size="medium">Center</NuButton>
      <NuButton size="medium">Right</NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton size="large">Left</NuButton>
      <NuButton size="large">Center</NuButton>
      <NuButton size="large">Right</NuButton>
    </NuButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html:preview
<nu-button-group label="Alignment">
  <nu-button variant="primary">Left</nu-button>
  <nu-button variant="primary">Center</nu-button>
  <nu-button variant="primary">Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button variant="success">Left</nu-button>
  <nu-button variant="success">Center</nu-button>
  <nu-button variant="success">Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button variant="neutral">Left</nu-button>
  <nu-button variant="neutral">Center</nu-button>
  <nu-button variant="neutral">Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button variant="warning">Left</nu-button>
  <nu-button variant="warning">Center</nu-button>
  <nu-button variant="warning">Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button variant="danger">Left</nu-button>
  <nu-button variant="danger">Center</nu-button>
  <nu-button variant="danger">Right</nu-button>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';

const App = () => (
  <>
    <NuButtonGroup label="Alignment">
      <NuButton variant="primary">Left</NuButton>
      <NuButton variant="primary">Center</NuButton>
      <NuButton variant="primary">Right</NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton variant="success">Left</NuButton>
      <NuButton variant="success">Center</NuButton>
      <NuButton variant="success">Right</NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton variant="neutral">Left</NuButton>
      <NuButton variant="neutral">Center</NuButton>
      <NuButton variant="neutral">Right</NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton variant="warning">Left</NuButton>
      <NuButton variant="warning">Center</NuButton>
      <NuButton variant="warning">Right</NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton variant="danger">Left</NuButton>
      <NuButton variant="danger">Center</NuButton>
      <NuButton variant="danger">Right</NuButton>
    </NuButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html:preview
<nu-button-group label="Alignment">
  <nu-button size="small" pill>Left</nu-button>
  <nu-button size="small" pill>Center</nu-button>
  <nu-button size="small" pill>Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button size="medium" pill>Left</nu-button>
  <nu-button size="medium" pill>Center</nu-button>
  <nu-button size="medium" pill>Right</nu-button>
</nu-button-group>

<br /><br />

<nu-button-group label="Alignment">
  <nu-button size="large" pill>Left</nu-button>
  <nu-button size="large" pill>Center</nu-button>
  <nu-button size="large" pill>Right</nu-button>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';

const App = () => (
  <>
    <NuButtonGroup label="Alignment">
      <NuButton size="small" pill>
        Left
      </NuButton>
      <NuButton size="small" pill>
        Center
      </NuButton>
      <NuButton size="small" pill>
        Right
      </NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton size="medium" pill>
        Left
      </NuButton>
      <NuButton size="medium" pill>
        Center
      </NuButton>
      <NuButton size="medium" pill>
        Right
      </NuButton>
    </NuButtonGroup>

    <br />
    <br />

    <NuButtonGroup label="Alignment">
      <NuButton size="large" pill>
        Left
      </NuButton>
      <NuButton size="large" pill>
        Center
      </NuButton>
      <NuButton size="large" pill>
        Right
      </NuButton>
    </NuButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<nu-button>` element.

```html:preview
<nu-button-group label="Example Button Group">
  <nu-button>Button</nu-button>
  <nu-button>Button</nu-button>
  <nu-dropdown>
    <nu-button slot="trigger" caret>Dropdown</nu-button>
    <nu-menu>
      <nu-menu-item>Item 1</nu-menu-item>
      <nu-menu-item>Item 2</nu-menu-item>
      <nu-menu-item>Item 3</nu-menu-item>
    </nu-menu>
  </nu-dropdown>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuButtonGroup label="Example Button Group">
    <NuButton>Button</NuButton>
    <NuButton>Button</NuButton>
    <NuDropdown>
      <NuButton slot="trigger" caret>
        Dropdown
      </NuButton>
      <NuMenu>
        <NuMenuItem>Item 1</NuMenuItem>
        <NuMenuItem>Item 2</NuMenuItem>
        <NuMenuItem>Item 3</NuMenuItem>
      </NuMenu>
    </NuDropdown>
  </NuButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html:preview
<nu-button-group label="Example Button Group">
  <nu-button variant="primary">Save</nu-button>
  <nu-dropdown placement="bottom-end">
    <nu-button slot="trigger" variant="primary" caret>
      <nu-visually-hidden>More options</nu-visually-hidden>
    </nu-button>
    <nu-menu>
      <nu-menu-item>Save</nu-menu-item>
      <nu-menu-item>Save as&hellip;</nu-menu-item>
      <nu-menu-item>Save all</nu-menu-item>
    </nu-menu>
  </nu-dropdown>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';
import SlDropdown from '@onsonr/nebula/dist/react/dropdown';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <NuButtonGroup label="Example Button Group">
    <NuButton variant="primary">Save</NuButton>
    <NuDropdown placement="bottom-end">
      <NuButton slot="trigger" variant="primary" caret></NuButton>
      <NuMenu>
        <NuMenuItem>Save</NuMenuItem>
        <NuMenuItem>Save as&hellip;</NuMenuItem>
        <NuMenuItem>Save all</NuMenuItem>
      </NuMenu>
    </NuDropdown>
  </NuButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html:preview
<nu-button-group label="Alignment">
  <nu-tooltip content="I'm on the left">
    <nu-button>Left</nu-button>
  </nu-tooltip>

  <nu-tooltip content="I'm in the middle">
    <nu-button>Center</nu-button>
  </nu-tooltip>

  <nu-tooltip content="I'm on the right">
    <nu-button>Right</nu-button>
  </nu-tooltip>
</nu-button-group>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';
import SlTooltip from '@onsonr/nebula/dist/react/tooltip';

const App = () => (
  <>
    <NuButtonGroup label="Alignment">
      <NuTooltip content="I'm on the left">
        <NuButton>Left</NuButton>
      </NuTooltip>

      <NuTooltip content="I'm in the middle">
        <NuButton>Center</NuButton>
      </NuTooltip>

      <NuTooltip content="I'm on the right">
        <NuButton>Right</NuButton>
      </NuTooltip>
    </NuButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html:preview
<div class="button-group-toolbar">
  <nu-button-group label="History">
    <nu-tooltip content="Undo">
      <nu-button><nu-icon name="arrow-counterclockwise" label="Undo"></nu-icon></nu-button>
    </nu-tooltip>
    <nu-tooltip content="Redo">
      <nu-button><nu-icon name="arrow-clockwise" label="Redo"></nu-icon></nu-button>
    </nu-tooltip>
  </nu-button-group>

  <nu-button-group label="Formatting">
    <nu-tooltip content="Bold">
      <nu-button><nu-icon name="type-bold" label="Bold"></nu-icon></nu-button>
    </nu-tooltip>
    <nu-tooltip content="Italic">
      <nu-button><nu-icon name="type-italic" label="Italic"></nu-icon></nu-button>
    </nu-tooltip>
    <nu-tooltip content="Underline">
      <nu-button><nu-icon name="type-underline" label="Underline"></nu-icon></nu-button>
    </nu-tooltip>
  </nu-button-group>

  <nu-button-group label="Alignment">
    <nu-tooltip content="Align Left">
      <nu-button><nu-icon name="justify-left" label="Align Left"></nu-icon></nu-button>
    </nu-tooltip>
    <nu-tooltip content="Align Center">
      <nu-button><nu-icon name="justify" label="Align Center"></nu-icon></nu-button>
    </nu-tooltip>
    <nu-tooltip content="Align Right">
      <nu-button><nu-icon name="justify-right" label="Align Right"></nu-icon></nu-button>
    </nu-tooltip>
  </nu-button-group>
</div>

<style>
  .button-group-toolbar sl-button-group:not(:last-of-type) {
    margin-right: var(--nu-spacing-x-small);
  }
</style>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlButtonGroup from '@onsonr/nebula/dist/react/button-group';
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlTooltip from '@onsonr/nebula/dist/react/tooltip';

const css = `
  .button-group-toolbar sl-button-group:not(:last-of-type) {
    margin-right: var(--nu-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <NuButtonGroup label="History">
        <NuTooltip content="Undo">
          <NuButton>
            <NuIcon name="arrow-counterclockwise"></NuIcon>
          </NuButton>
        </NuTooltip>
        <NuTooltip content="Redo">
          <NuButton>
            <NuIcon name="arrow-clockwise"></NuIcon>
          </NuButton>
        </NuTooltip>
      </NuButtonGroup>

      <NuButtonGroup label="Formatting">
        <NuTooltip content="Bold">
          <NuButton>
            <NuIcon name="type-bold"></NuIcon>
          </NuButton>
        </NuTooltip>
        <NuTooltip content="Italic">
          <NuButton>
            <NuIcon name="type-italic"></NuIcon>
          </NuButton>
        </NuTooltip>
        <NuTooltip content="Underline">
          <NuButton>
            <NuIcon name="type-underline"></NuIcon>
          </NuButton>
        </NuTooltip>
      </NuButtonGroup>

      <NuButtonGroup label="Alignment">
        <NuTooltip content="Align Left">
          <NuButton>
            <NuIcon name="justify-left"></NuIcon>
          </NuButton>
        </NuTooltip>
        <NuTooltip content="Align Center">
          <NuButton>
            <NuIcon name="justify"></NuIcon>
          </NuButton>
        </NuTooltip>
        <NuTooltip content="Align Right">
          <NuButton>
            <NuIcon name="justify-right"></NuIcon>
          </NuButton>
        </NuTooltip>
      </NuButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```
