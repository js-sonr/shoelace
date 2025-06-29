---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
---

```html:preview
<nu-textarea></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<nu-textarea label="Comments"></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<nu-textarea label="Feedback" help-text="Please tell us what you think."> </nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html:preview
<nu-textarea rows="2"></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<nu-textarea placeholder="Type something"></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html:preview
<nu-textarea placeholder="Type something" filled></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html:preview
<nu-textarea placeholder="Textarea" disabled></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html:preview
<nu-textarea placeholder="Small" size="small"></nu-textarea>
<br />
<nu-textarea placeholder="Medium" size="medium"></nu-textarea>
<br />
<nu-textarea placeholder="Large" size="large"></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => (
  <>
    <NuTextarea placeholder="Small" size="small"></NuTextarea>
    <br />
    <NuTextarea placeholder="Medium" size="medium"></NuTextarea>
    <br />
    <NuTextarea placeholder="Large" size="large"></NuTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html:preview
<nu-textarea resize="none"></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html:preview
<nu-textarea resize="auto"></nu-textarea>
```

```jsx:react
import SlTextarea from '@onsonr/nebula/dist/react/textarea';

const App = () => <NuTextarea resize="auto" />;
```
