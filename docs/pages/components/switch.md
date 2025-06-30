---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
---

```html:preview
<nu-switch>Switch</nu-switch>
```

```jsx:react
import SlSwitch from '@sonr.io/nebula/dist/react/switch';

const App = () => <NuSwitch>Switch</NuSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<nu-switch checked>Checked</nu-switch>
```

```jsx:react
import SlSwitch from '@sonr.io/nebula/dist/react/switch';

const App = () => <NuSwitch checked>Checked</NuSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<nu-switch disabled>Disabled</nu-switch>
```

```jsx:react
import SlSwitch from '@sonr.io/nebula/dist/react/switch';

const App = () => <NuSwitch disabled>Disabled</NuSwitch>;
```

### Sizes

Use the `size` attribute to change a switch's size.

```html:preview
<nu-switch size="small">Small</nu-switch>
<br />
<nu-switch size="medium">Medium</nu-switch>
<br />
<nu-switch size="large">Large</nu-switch>
```

```jsx:react
import SlSwitch from '@sonr.io/nebula/dist/react/switch';

const App = () => (
  <>
    <NuSwitch size="small">Small</NuSwitch>
    <br />
    <NuSwitch size="medium">Medium</NuSwitch>
    <br />
    <NuSwitch size="large">Large</NuSwitch>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<nu-switch help-text="What should the user know about the switch?">Label</nu-switch>
```

```jsx:react
import SlSwitch from '@sonr.io/nebula/dist/react/checkbox';

const App = () => <NuSwitch help-text="What should the user know about the switch?">Label</NuSwitch>;
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html:preview
<nu-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</nu-switch>
```

{% raw %}

```jsx:react
import SlSwitch from '@sonr.io/nebula/dist/react/switch';

const App = () => (
  <NuSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
