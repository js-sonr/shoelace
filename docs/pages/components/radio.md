---
meta:
  title: Radio
  description: Radios allow the user to select a single option from a group.
layout: component
---

Radios are designed to be used with [radio groups](/components/radio-group).

```html:preview
<nu-radio-group label="Select an option" name="a" value="1">
  <nu-radio value="1">Option 1</nu-radio>
  <nu-radio value="2">Option 2</nu-radio>
  <nu-radio value="3">Option 3</nu-radio>
</nu-radio-group>
```

```jsx:react
import SlRadio from '@sonr.io/nebula/dist/react/radio';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="1">
    <NuRadio value="1">Option 1</NuRadio>
    <NuRadio value="2">Option 2</NuRadio>
    <NuRadio value="3">Option 3</NuRadio>
  </NuRadioGroup>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<nu-radio-group label="Select an option" name="a" value="3">
  <nu-radio value="1">Option 1</nu-radio>
  <nu-radio value="2">Option 2</nu-radio>
  <nu-radio value="3">Option 3</nu-radio>
</nu-radio-group>
```

```jsx:react
import SlRadio from '@sonr.io/nebula/dist/react/radio';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="3">
    <NuRadio value="1">Option 1</NuRadio>
    <NuRadio value="2">Option 2</NuRadio>
    <NuRadio value="3">Option 3</NuRadio>
  </NuRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html:preview
<nu-radio-group label="Select an option" name="a" value="1">
  <nu-radio value="1">Option 1</nu-radio>
  <nu-radio value="2" disabled>Option 2</nu-radio>
  <nu-radio value="3">Option 3</nu-radio>
</nu-radio-group>
```

```jsx:react
import SlRadio from '@sonr.io/nebula/dist/react/radio';
import SlRadioGroup from '@sonr.io/nebula/dist/react/radio-group';

const App = () => (
  <NuRadioGroup label="Select an option" name="a" value="1">
    <NuRadio value="1">Option 1</NuRadio>
    <NuRadio value="2" disabled>
      Option 2
    </NuRadio>
    <NuRadio value="3">Option 3</NuRadio>
  </NuRadioGroup>
);
```

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html preview
<nu-radio-group size="small" value="1">
  <nu-radio value="1">Small 1</nu-radio>
  <nu-radio value="2">Small 2</nu-radio>
  <nu-radio value="3">Small 3</nu-radio>
</nu-radio-group>

<br />

<nu-radio-group size="medium" value="1">
  <nu-radio value="1">Medium 1</nu-radio>
  <nu-radio value="2">Medium 2</nu-radio>
  <nu-radio value="3">Medium 3</nu-radio>
</nu-radio-group>

<br />

<nu-radio-group size="large" value="1">
  <nu-radio value="1">Large 1</nu-radio>
  <nu-radio value="2">Large 2</nu-radio>
  <nu-radio value="3">Large 3</nu-radio>
</nu-radio-group>
```

```jsx react
import SlRadio from '@sonr.io/nebula/dist/react/radio';

const App = () => (
  <>
    <NuRadioGroup size="small" value="1">
      <NuRadio value="1">Small 1</NuRadio>
      <NuRadio value="2">Small 2</NuRadio>
      <NuRadio value="3">Small 3</NuRadio>
    </NuRadioGroup>

    <br />

    <NuRadioGroup size="medium" value="1">
      <NuRadio value="1">Medium 1</NuRadio>
      <NuRadio value="2">Medium 2</NuRadio>
      <NuRadio value="3">Medium 3</NuRadio>
    </NuRadioGroup>

    <br />

    <NuRadioGroup size="large" value="1">
      <NuRadio value="1">Large 1</NuRadio>
      <NuRadio value="2">Large 2</NuRadio>
      <NuRadio value="3">Large 3</NuRadio>
    </NuRadioGroup>
  </>
);
```
