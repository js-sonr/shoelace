---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
---

```html:preview
<nu-input></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<nu-input label="What is your name?"></nu-input>
```

```jsx:react
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<nu-input label="Nickname" help-text="What would you like people to call you?"></nu-input>
```

```jsx:react
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<nu-input placeholder="Type something"></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<nu-input placeholder="Clearable" clearable></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<nu-input type="password" placeholder="Password Toggle" password-toggle></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<nu-input placeholder="Type something" filled></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<nu-input placeholder="Disabled" disabled></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => <NuInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html:preview
<nu-input placeholder="Small" size="small"></nu-input>
<br />
<nu-input placeholder="Medium" size="medium"></nu-input>
<br />
<nu-input placeholder="Large" size="large"></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => (
  <>
    <NuInput placeholder="Small" size="small" />
    <br />
    <NuInput placeholder="Medium" size="medium" />
    <br />
    <NuInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html:preview
<nu-input placeholder="Small" size="small" pill></nu-input>
<br />
<nu-input placeholder="Medium" size="medium" pill></nu-input>
<br />
<nu-input placeholder="Large" size="large" pill></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => (
  <>
    <NuInput placeholder="Small" size="small" pill />
    <br />
    <NuInput placeholder="Medium" size="medium" pill />
    <br />
    <NuInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html:preview
<nu-input type="email" placeholder="Email"></nu-input>
<br />
<nu-input type="number" placeholder="Number"></nu-input>
<br />
<nu-input type="date" placeholder="Date"></nu-input>
```

```jsx:react
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => (
  <>
    <NuInput type="email" placeholder="Email" />
    <br />
    <NuInput type="number" placeholder="Number" />
    <br />
    <NuInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<nu-input placeholder="Small" size="small">
  <nu-icon name="house" slot="prefix"></nu-icon>
  <nu-icon name="chat" slot="suffix"></nu-icon>
</nu-input>
<br />
<nu-input placeholder="Medium" size="medium">
  <nu-icon name="house" slot="prefix"></nu-icon>
  <nu-icon name="chat" slot="suffix"></nu-icon>
</nu-input>
<br />
<nu-input placeholder="Large" size="large">
  <nu-icon name="house" slot="prefix"></nu-icon>
  <nu-icon name="chat" slot="suffix"></nu-icon>
</nu-input>
```

```jsx:react
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => (
  <>
    <NuInput placeholder="Small" size="small">
      <NuIcon name="house" slot="prefix"></NuIcon>
      <NuIcon name="chat" slot="suffix"></NuIcon>
    </NuInput>
    <br />
    <NuInput placeholder="Medium" size="medium">
      <NuIcon name="house" slot="prefix"></NuIcon>
      <NuIcon name="chat" slot="suffix"></NuIcon>
    </NuInput>
    <br />
    <NuInput placeholder="Large" size="large">
      <NuIcon name="house" slot="prefix"></NuIcon>
      <NuIcon name="chat" slot="suffix"></NuIcon>
    </NuInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html:preview
<nu-input class="label-on-left" label="Name" help-text="Enter your name"></nu-input>
<nu-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></nu-input>
<nu-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></nu-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--nu-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--nu-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```
