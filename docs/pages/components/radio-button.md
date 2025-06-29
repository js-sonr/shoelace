---
meta:
  title: Radio Button
  description: Radios buttons allow the user to select a single option from a group using a button-like control.
layout: component
---

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html:preview
<nu-radio-group label="Select an option" name="a" value="1">
  <nu-radio-button value="1">Option 1</nu-radio-button>
  <nu-radio-button value="2">Option 2</nu-radio-button>
  <nu-radio-button value="3">Option 3</nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="1">
    <NuRadioButton value="1">Option 1</NuRadioButton>
    <NuRadioButton value="2">Option 2</NuRadioButton>
    <NuRadioButton value="3">Option 3</NuRadioButton>
  </NuRadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<nu-radio-group label="Select an option" name="a" value="1">
  <nu-radio-button value="1">Option 1</nu-radio-button>
  <nu-radio-button value="2">Option 2</nu-radio-button>
  <nu-radio-button value="3">Option 3</nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="1">
    <NuRadioButton value="1">Option 1</NuRadioButton>
    <NuRadioButton value="2">Option 2</NuRadioButton>
    <NuRadioButton value="3">Option 3</NuRadioButton>
  </NuRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html:preview
<nu-radio-group label="Select an option" name="a" value="1">
  <nu-radio-button value="1">Option 1</nu-radio-button>
  <nu-radio-button value="2" disabled>Option 2</nu-radio-button>
  <nu-radio-button value="3">Option 3</nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="1">
    <NuRadioButton value="1">Option 1</NuRadioButton>
    <NuRadioButton value="2" disabled>
      Option 2
    </NuRadioButton>
    <NuRadioButton value="3">Option 3</NuRadioButton>
  </NuRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html:preview
<nu-radio-group size="small" label="Select an option" name="a" value="1">
  <nu-radio-button value="1">Option 1</nu-radio-button>
  <nu-radio-button value="2">Option 2</nu-radio-button>
  <nu-radio-button value="3">Option 3</nu-radio-button>
</nu-radio-group>

<br />

<nu-radio-group size="medium" label="Select an option" name="a" value="1">
  <nu-radio-button value="1">Option 1</nu-radio-button>
  <nu-radio-button value="2">Option 2</nu-radio-button>
  <nu-radio-button value="3">Option 3</nu-radio-button>
</nu-radio-group>

<br />

<nu-radio-group size="large" label="Select an option" name="a" value="1">
  <nu-radio-button value="1">Option 1</nu-radio-button>
  <nu-radio-button value="2">Option 2</nu-radio-button>
  <nu-radio-button value="3">Option 3</nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup size="small" label="Select an option" name="a" value="1">
    <NuRadioButton value="1">Option 1</NuRadioButton>
    <NuRadioButton value="2">Option 2</NuRadioButton>
    <NuRadioButton value="3">Option 3</NuRadioButton>
  </NuRadioGroup>

  <br />

  <NuRadioGroup size="medium" label="Select an option" name="a" value="1">
    <NuRadioButton value="1">Option 1</NuRadioButton>
    <NuRadioButton value="2">Option 2</NuRadioButton>
    <NuRadioButton value="3">Option 3</NuRadioButton>
  </NuRadioGroup>

  <br />

  <NuRadioGroup size="large" label="Select an option" name="a" value="1">
    <NuRadioButton value="1">Option 1</NuRadioButton>
    <NuRadioButton value="2">Option 2</NuRadioButton>
    <NuRadioButton value="3">Option 3</NuRadioButton>
  </NuRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html:preview
<nu-radio-group size="small" label="Select an option" name="a" value="1">
  <nu-radio-button pill value="1">Option 1</nu-radio-button>
  <nu-radio-button pill value="2">Option 2</nu-radio-button>
  <nu-radio-button pill value="3">Option 3</nu-radio-button>
</nu-radio-group>

<br />

<nu-radio-group size="medium" label="Select an option" name="a" value="1">
  <nu-radio-button pill value="1">Option 1</nu-radio-button>
  <nu-radio-button pill value="2">Option 2</nu-radio-button>
  <nu-radio-button pill value="3">Option 3</nu-radio-button>
</nu-radio-group>

<br />

<nu-radio-group size="large" label="Select an option" name="a" value="1">
  <nu-radio-button pill value="1">Option 1</nu-radio-button>
  <nu-radio-button pill value="2">Option 2</nu-radio-button>
  <nu-radio-button pill value="3">Option 3</nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup size="small" label="Select an option" name="a" value="1">
    <NuRadioButton pill value="1">Option 1</NuRadioButton>
    <NuRadioButton pill value="2">Option 2</NuRadioButton>
    <NuRadioButton pill value="3">Option 3</NuRadioButton>
  </NuRadioGroup>

  <br />

  <NuRadioGroup size="medium" label="Select an option" name="a" value="1">
    <NuRadioButton pill value="1">Option 1</NuRadioButton>
    <NuRadioButton pill value="2">Option 2</NuRadioButton>
    <NuRadioButton pill value="3">Option 3</NuRadioButton>
  </NuRadioGroup>

  <br />

  <NuRadioGroup size="large" label="Select an option" name="a" value="1">
    <NuRadioButton pill value="1">Option 1</NuRadioButton>
    <NuRadioButton pill value="2">Option 2</NuRadioButton>
    <NuRadioButton pill value="3">Option 3</NuRadioButton>
  </NuRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<nu-radio-group label="Select an option" name="a" value="1">
  <nu-radio-button value="1">
    <nu-icon slot="prefix" name="archive"></nu-icon>
    Option 1
  </nu-radio-button>

  <nu-radio-button value="2">
    <nu-icon slot="suffix" name="bag"></nu-icon>
    Option 2
  </nu-radio-button>

  <nu-radio-button value="3">
    <nu-icon slot="prefix" name="gift"></nu-icon>
    <nu-icon slot="suffix" name="cart"></nu-icon>
    Option 3
  </nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlIcon from '@sonr.io/nebula/dist/react/icon';
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="1">
    <NuRadioButton value="1">
      <NuIcon slot="prefix" name="archive" />
      Option 1
    </NuRadioButton>

    <NuRadioButton value="2">
      <NuIcon slot="suffix" name="bag" />
      Option 2
    </NuRadioButton>

    <NuRadioButton value="3">
      <NuIcon slot="prefix" name="gift" />
      <NuIcon slot="suffix" name="cart" />
      Option 3
    </NuRadioButton>
  </NuRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html:preview
<nu-radio-group label="Select an option" name="a" value="neutral">
  <nu-radio-button value="angry">
    <nu-icon name="emoji-angry" label="Angry"></nu-icon>
  </nu-radio-button>

  <nu-radio-button value="sad">
    <nu-icon name="emoji-frown" label="Sad"></nu-icon>
  </nu-radio-button>

  <nu-radio-button value="neutral">
    <nu-icon name="emoji-neutral" label="Neutral"></nu-icon>
  </nu-radio-button>

  <nu-radio-button value="happy">
    <nu-icon name="emoji-smile" label="Happy"></nu-icon>
  </nu-radio-button>

  <nu-radio-button value="laughing">
    <nu-icon name="emoji-laughing" label="Laughing"></nu-icon>
  </nu-radio-button>
</nu-radio-group>
```

```jsx:react
import SlIcon from '@sonr.io/nebula/dist/react/icon';
import SlRadioButton from '@sonr.io/nebula/dist/react/radio-button';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="neutral">
    <NuRadioButton value="angry">
      <NuIcon name="emoji-angry" label="Angry" />
    </NuRadioButton>

    <NuRadioButton value="sad">
      <NuIcon name="emoji-frown" label="Sad" />
    </NuRadioButton>

    <NuRadioButton value="neutral">
      <NuIcon name="emoji-neutral" label="Neutral" />
    </NuRadioButton>

    <NuRadioButton value="happy">
      <NuIcon name="emoji-smile" label="Happy" />
    </NuRadioButton>

    <NuRadioButton value="laughing">
      <NuIcon name="emoji-laughing" label="Laughing" />
    </NuRadioButton>
  </NuRadioGroup>
);
```
