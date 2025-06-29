---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<nu-button>Button</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => <SlButton>Button</SlButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html:preview
<nu-button variant="default">Default</nu-button>
<nu-button variant="primary">Primary</nu-button>
<nu-button variant="success">Success</nu-button>
<nu-button variant="neutral">Neutral</nu-button>
<nu-button variant="warning">Warning</nu-button>
<nu-button variant="danger">Danger</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton variant="default">Default</SlButton>
    <SlButton variant="primary">Primary</SlButton>
    <SlButton variant="success">Success</SlButton>
    <SlButton variant="neutral">Neutral</SlButton>
    <SlButton variant="warning">Warning</SlButton>
    <SlButton variant="danger">Danger</SlButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html:preview
<nu-button size="small">Small</nu-button>
<nu-button size="medium">Medium</nu-button>
<nu-button size="large">Large</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton size="small">Small</SlButton>
    <SlButton size="medium">Medium</SlButton>
    <SlButton size="large">Large</SlButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html:preview
<nu-button variant="default" outline>Default</nu-button>
<nu-button variant="primary" outline>Primary</nu-button>
<nu-button variant="success" outline>Success</nu-button>
<nu-button variant="neutral" outline>Neutral</nu-button>
<nu-button variant="warning" outline>Warning</nu-button>
<nu-button variant="danger" outline>Danger</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton variant="default" outline>
      Default
    </SlButton>
    <SlButton variant="primary" outline>
      Primary
    </SlButton>
    <SlButton variant="success" outline>
      Success
    </SlButton>
    <SlButton variant="neutral" outline>
      Neutral
    </SlButton>
    <SlButton variant="warning" outline>
      Warning
    </SlButton>
    <SlButton variant="danger" outline>
      Danger
    </SlButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html:preview
<nu-button size="small" pill>Small</nu-button>
<nu-button size="medium" pill>Medium</nu-button>
<nu-button size="large" pill>Large</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton size="small" pill>
      Small
    </SlButton>
    <SlButton size="medium" pill>
      Medium
    </SlButton>
    <SlButton size="large" pill>
      Large
    </SlButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<nu-icon>` in the default slot.

```html:preview
<nu-button variant="default" size="small" circle>
  <nu-icon name="gear" label="Settings"></nu-icon>
</nu-button>

<nu-button variant="default" size="medium" circle>
  <nu-icon name="gear" label="Settings"></nu-icon>
</nu-button>

<nu-button variant="default" size="large" circle>
  <nu-icon name="gear" label="Settings"></nu-icon>
</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <>
    <SlButton variant="default" size="small" circle>
      <SlIcon name="gear" />
    </SlButton>
    <SlButton variant="default" size="medium" circle>
      <SlIcon name="gear" />
    </SlButton>
    <SlButton variant="default" size="large" circle>
      <SlIcon name="gear" />
    </SlButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html:preview
<nu-button variant="text" size="small">Text</nu-button>
<nu-button variant="text" size="medium">Text</nu-button>
<nu-button variant="text" size="large">Text</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton variant="text" size="small">
      Text
    </SlButton>
    <SlButton variant="text" size="medium">
      Text
    </SlButton>
    <SlButton variant="text" size="large">
      Text
    </SlButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

```html:preview
<nu-button href="https://example.com/">Link</nu-button>
<nu-button href="https://example.com/" target="_blank">New Window</nu-button>
<nu-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</nu-button>
<nu-button href="https://example.com/" disabled>Disabled</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton href="https://example.com/">Link</SlButton>
    <SlButton href="https://example.com/" target="_blank">
      New Window
    </SlButton>
    <SlButton href="/assets/images/wordmark.svg" download="shoelace.svg">
      Download
    </SlButton>
    <SlButton href="https://example.com/" disabled>
      Disabled
    </SlButton>
  </>
);
```

:::tip
When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).
:::

### Setting a Custom Width

As expected, buttons can be given a custom width by passing inline styles to the component (or using a class). This is useful for making buttons span the full width of their container on smaller screens.

```html:preview
<nu-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</nu-button>
<nu-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</nu-button>
<nu-button variant="default" size="large" style="width: 100%;">Large</nu-button>
```

{% raw %}

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </SlButton>
    <SlButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </SlButton>
    <SlButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </SlButton>
  </>
);
```

{% endraw %}

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<nu-button variant="default" size="small">
  <nu-icon slot="prefix" name="gear"></nu-icon>
  Settings
</nu-button>

<nu-button variant="default" size="small">
  <nu-icon slot="suffix" name="arrow-counterclockwise"></nu-icon>
  Refresh
</nu-button>

<nu-button variant="default" size="small">
  <nu-icon slot="prefix" name="link-45deg"></nu-icon>
  <nu-icon slot="suffix" name="box-arrow-up-right"></nu-icon>
  Open
</nu-button>

<br /><br />

<nu-button variant="default">
  <nu-icon slot="prefix" name="gear"></nu-icon>
  Settings
</nu-button>

<nu-button variant="default">
  <nu-icon slot="suffix" name="arrow-counterclockwise"></nu-icon>
  Refresh
</nu-button>

<nu-button variant="default">
  <nu-icon slot="prefix" name="link-45deg"></nu-icon>
  <nu-icon slot="suffix" name="box-arrow-up-right"></nu-icon>
  Open
</nu-button>

<br /><br />

<nu-button variant="default" size="large">
  <nu-icon slot="prefix" name="gear"></nu-icon>
  Settings
</nu-button>

<nu-button variant="default" size="large">
  <nu-icon slot="suffix" name="arrow-counterclockwise"></nu-icon>
  Refresh
</nu-button>

<nu-button variant="default" size="large">
  <nu-icon slot="prefix" name="link-45deg"></nu-icon>
  <nu-icon slot="suffix" name="box-arrow-up-right"></nu-icon>
  Open
</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <>
    <SlButton variant="default" size="small">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default" size="small">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default" size="small">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br />
    <br />

    <SlButton variant="default">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br />
    <br />

    <SlButton variant="default" size="large">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default" size="large">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default" size="large">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html:preview
<nu-button size="small" caret>Small</nu-button>
<nu-button size="medium" caret>Medium</nu-button>
<nu-button size="large" caret>Large</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton size="small" caret>
      Small
    </SlButton>
    <SlButton size="medium" caret>
      Medium
    </SlButton>
    <SlButton size="large" caret>
      Large
    </SlButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

```html:preview
<nu-button variant="default" loading>Default</nu-button>
<nu-button variant="primary" loading>Primary</nu-button>
<nu-button variant="success" loading>Success</nu-button>
<nu-button variant="neutral" loading>Neutral</nu-button>
<nu-button variant="warning" loading>Warning</nu-button>
<nu-button variant="danger" loading>Danger</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton variant="default" loading>
      Default
    </SlButton>
    <SlButton variant="primary" loading>
      Primary
    </SlButton>
    <SlButton variant="success" loading>
      Success
    </SlButton>
    <SlButton variant="neutral" loading>
      Neutral
    </SlButton>
    <SlButton variant="warning" loading>
      Warning
    </SlButton>
    <SlButton variant="danger" loading>
      Danger
    </SlButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button.

```html:preview
<nu-button variant="default" disabled>Default</nu-button>
<nu-button variant="primary" disabled>Primary</nu-button>
<nu-button variant="success" disabled>Success</nu-button>
<nu-button variant="neutral" disabled>Neutral</nu-button>
<nu-button variant="warning" disabled>Warning</nu-button>
<nu-button variant="danger" disabled>Danger</nu-button>
```

```jsx:react
import SlButton from '@onsonr/nebula/dist/react/button';

const App = () => (
  <>
    <SlButton variant="default" disabled>
      Default
    </SlButton>

    <SlButton variant="primary" disabled>
      Primary
    </SlButton>

    <SlButton variant="success" disabled>
      Success
    </SlButton>

    <SlButton variant="neutral" disabled>
      Neutral
    </SlButton>

    <SlButton variant="warning" disabled>
      Warning
    </SlButton>

    <SlButton variant="danger" disabled>
      Danger
    </SlButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `sl-button[variant="primary"]`).

```html:preview
<nu-button class="pink">Pink Button</nu-button>

<style>
  sl-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --nu-input-height-medium: 48px;
    --nu-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--nu-transition-medium) transform ease, var(--nu-transition-medium) border ease;
  }

  sl-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  sl-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  sl-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
