---
meta:
  title: Icon Button
  description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component
---

For a full list of icons that come bundled with Nebula, refer to the [icon component](/components/icon).

```html:preview
<nu-icon-button name="gear" label="Settings"></nu-icon-button>
```

```jsx:react
import SlIconButton from '@onsonr/nebula/dist/react/icon-button';

const App = () => <NuIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html:preview
<nu-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></nu-icon-button>
<nu-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></nu-icon-button>
<nu-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></nu-icon-button>
```

{% raw %}

```jsx:react
import SlIconButton from '@onsonr/nebula/dist/react/icon-button';

const App = () => (
  <>
    <NuIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <NuIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <NuIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html:preview
<div class="icon-button-color">
  <nu-icon-button name="type-bold" label="Bold"></nu-icon-button>
  <nu-icon-button name="type-italic" label="Italic"></nu-icon-button>
  <nu-icon-button name="type-underline" label="Underline"></nu-icon-button>
</div>

<style>
  .icon-button-color sl-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color sl-icon-button::part(base):hover,
  .icon-button-color sl-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color sl-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx:react
import SlIconButton from '@onsonr/nebula/dist/react/icon-button';

const css = `
  .icon-button-color sl-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color sl-icon-button::part(base):hover,
  .icon-button-color sl-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color sl-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <NuIconButton name="type-bold" label="Bold" />
      <NuIconButton name="type-italic" label="Italic" />
      <NuIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html:preview
<nu-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></nu-icon-button>
```

```jsx:react
import SlIconButton from '@onsonr/nebula/dist/react/icon-button';

const App = () => <NuIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html:preview
<nu-tooltip content="Settings">
  <nu-icon-button name="gear" label="Settings"></nu-icon-button>
</nu-tooltip>
```

```jsx:react
import SlIconButton from '@onsonr/nebula/dist/react/icon-button';
import SlTooltip from '@onsonr/nebula/dist/react/tooltip';

const App = () => (
  <NuTooltip content="Settings">
    <NuIconButton name="gear" label="Settings" />
  </NuTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html:preview
<nu-icon-button name="gear" label="Settings" disabled></nu-icon-button>
```

```jsx:react
import SlIconButton from '@onsonr/nebula/dist/react/icon-button';

const App = () => <NuIconButton name="gear" label="Settings" disabled />;
```
