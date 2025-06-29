---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<nu-checkbox>Checkbox</nu-checkbox>
```

```jsx:react
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => <NuCheckbox>Checkbox</NuCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<nu-checkbox checked>Checked</nu-checkbox>
```

```jsx:react
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => <NuCheckbox checked>Checked</NuCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html:preview
<nu-checkbox indeterminate>Indeterminate</nu-checkbox>
```

```jsx:react
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => <NuCheckbox indeterminate>Indeterminate</NuCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<nu-checkbox disabled>Disabled</nu-checkbox>
```

```jsx:react
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => <NuCheckbox disabled>Disabled</NuCheckbox>;
```

### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<nu-checkbox size="small">Small</nu-checkbox>
<br />
<nu-checkbox size="medium">Medium</nu-checkbox>
<br />
<nu-checkbox size="large">Large</nu-checkbox>
```

```jsx:react
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => (
  <>
    <NuCheckbox size="small">Small</NuCheckbox>
    <br />
    <NuCheckbox size="medium">Medium</NuCheckbox>
    <br />
    <NuCheckbox size="large">Large</NuCheckbox>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<nu-checkbox help-text="What should the user know about the checkbox?">Label</nu-checkbox>
```

```jsx:react
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => <NuCheckbox help-text="What should the user know about the switch?">Label</NuCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <nu-checkbox>Check me</nu-checkbox>
  <br />
  <nu-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</nu-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('sl-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('sl-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('sl-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import SlButton from '@onsonr/nebula/dist/react/button';
import SlCheckbox from '@onsonr/nebula/dist/react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <NuCheckbox ref={checkbox} onSlChange={handleChange}>
        Check me
      </NuCheckbox>
      <br />
      <NuButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </NuButton>
    </form>
  );
};
```

{% endraw %}
