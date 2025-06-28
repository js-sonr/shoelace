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
  <SlButtonGroup label="Alignment">
    <SlButton>Left</SlButton>
    <SlButton>Center</SlButton>
    <SlButton>Right</SlButton>
  </SlButtonGroup>
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
    <SlButtonGroup label="Alignment">
      <SlButton size="small">Left</SlButton>
      <SlButton size="small">Center</SlButton>
      <SlButton size="small">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton size="medium">Left</SlButton>
      <SlButton size="medium">Center</SlButton>
      <SlButton size="medium">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton size="large">Left</SlButton>
      <SlButton size="large">Center</SlButton>
      <SlButton size="large">Right</SlButton>
    </SlButtonGroup>
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
    <SlButtonGroup label="Alignment">
      <SlButton variant="primary">Left</SlButton>
      <SlButton variant="primary">Center</SlButton>
      <SlButton variant="primary">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton variant="success">Left</SlButton>
      <SlButton variant="success">Center</SlButton>
      <SlButton variant="success">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton variant="neutral">Left</SlButton>
      <SlButton variant="neutral">Center</SlButton>
      <SlButton variant="neutral">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton variant="warning">Left</SlButton>
      <SlButton variant="warning">Center</SlButton>
      <SlButton variant="warning">Right</SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton variant="danger">Left</SlButton>
      <SlButton variant="danger">Center</SlButton>
      <SlButton variant="danger">Right</SlButton>
    </SlButtonGroup>
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
    <SlButtonGroup label="Alignment">
      <SlButton size="small" pill>
        Left
      </SlButton>
      <SlButton size="small" pill>
        Center
      </SlButton>
      <SlButton size="small" pill>
        Right
      </SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton size="medium" pill>
        Left
      </SlButton>
      <SlButton size="medium" pill>
        Center
      </SlButton>
      <SlButton size="medium" pill>
        Right
      </SlButton>
    </SlButtonGroup>

    <br />
    <br />

    <SlButtonGroup label="Alignment">
      <SlButton size="large" pill>
        Left
      </SlButton>
      <SlButton size="large" pill>
        Center
      </SlButton>
      <SlButton size="large" pill>
        Right
      </SlButton>
    </SlButtonGroup>
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
  <SlButtonGroup label="Example Button Group">
    <SlButton>Button</SlButton>
    <SlButton>Button</SlButton>
    <SlDropdown>
      <SlButton slot="trigger" caret>
        Dropdown
      </SlButton>
      <SlMenu>
        <SlMenuItem>Item 1</SlMenuItem>
        <SlMenuItem>Item 2</SlMenuItem>
        <SlMenuItem>Item 3</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </SlButtonGroup>
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
  <SlButtonGroup label="Example Button Group">
    <SlButton variant="primary">Save</SlButton>
    <SlDropdown placement="bottom-end">
      <SlButton slot="trigger" variant="primary" caret></SlButton>
      <SlMenu>
        <SlMenuItem>Save</SlMenuItem>
        <SlMenuItem>Save as&hellip;</SlMenuItem>
        <SlMenuItem>Save all</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </SlButtonGroup>
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
    <SlButtonGroup label="Alignment">
      <SlTooltip content="I'm on the left">
        <SlButton>Left</SlButton>
      </SlTooltip>

      <SlTooltip content="I'm in the middle">
        <SlButton>Center</SlButton>
      </SlTooltip>

      <SlTooltip content="I'm on the right">
        <SlButton>Right</SlButton>
      </SlTooltip>
    </SlButtonGroup>
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
    margin-right: var(--sl-spacing-x-small);
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
    margin-right: var(--sl-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <SlButtonGroup label="History">
        <SlTooltip content="Undo">
          <SlButton>
            <SlIcon name="arrow-counterclockwise"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Redo">
          <SlButton>
            <SlIcon name="arrow-clockwise"></SlIcon>
          </SlButton>
        </SlTooltip>
      </SlButtonGroup>

      <SlButtonGroup label="Formatting">
        <SlTooltip content="Bold">
          <SlButton>
            <SlIcon name="type-bold"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Italic">
          <SlButton>
            <SlIcon name="type-italic"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Underline">
          <SlButton>
            <SlIcon name="type-underline"></SlIcon>
          </SlButton>
        </SlTooltip>
      </SlButtonGroup>

      <SlButtonGroup label="Alignment">
        <SlTooltip content="Align Left">
          <SlButton>
            <SlIcon name="justify-left"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Align Center">
          <SlButton>
            <SlIcon name="justify"></SlIcon>
          </SlButton>
        </SlTooltip>
        <SlTooltip content="Align Right">
          <SlButton>
            <SlIcon name="justify-right"></SlIcon>
          </SlButton>
        </SlTooltip>
      </SlButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```
