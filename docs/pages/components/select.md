---
meta:
  title: Select
  description: Selects allow you to choose items from a menu of predefined options.
layout: component
---

```html:preview
<nu-select>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
  <nu-option value="option-4">Option 4</nu-option>
  <nu-option value="option-5">Option 5</nu-option>
  <nu-option value="option-6">Option 6</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<nu-select label="Select one">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect label="Select one">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<nu-select label="Experience" help-text="Please tell us your skill level.">
  <nu-option value="1">Novice</nu-option>
  <nu-option value="2">Intermediate</nu-option>
  <nu-option value="3">Advanced</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect label="Experience" help-text="Please tell us your skill level.">
    <SlOption value="1">Novice</SlOption>
    <SlOption value="2">Intermediate</SlOption>
    <SlOption value="3">Advanced</SlOption>
  </SlSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<nu-select placeholder="Select one">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect placeholder="Select one">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html:preview
<nu-select clearable value="option-1">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect placeholder="Clearable" clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<nu-select filled>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect filled>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html:preview
<nu-select pill>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect pill>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html:preview
<nu-select placeholder="Disabled" disabled>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect placeholder="Disabled" disabled>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<nu-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
  <nu-option value="option-4">Option 4</nu-option>
  <nu-option value="option-5">Option 5</nu-option>
  <nu-option value="option-6">Option 6</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect label="Select a Few" value={["option-1", "option-2", "option-3"]} multiple clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Setting Initial Values

Use the `value` attribute to set the initial selection.

When using `multiple`, the `value` _attribute_ uses space-delimited values to select more than one option. Because of this, `<nu-option>` values cannot contain spaces. If you're accessing the `value` _property_ through Javascript, it will be an array.

```html:preview
<nu-select value="option-1 option-2" multiple clearable>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
  <nu-option value="option-4">Option 4</nu-option>
</nu-select>
```

```jsx:react
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect value={["option-1", "option-2"]} multiple clearable>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlSelect>
);
```

### Grouping Options

Use `<nu-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html:preview
<nu-select>
  <small>Section 1</small>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
  <nu-divider></nu-divider>
  <small>Section 2</small>
  <nu-option value="option-4">Option 4</nu-option>
  <nu-option value="option-5">Option 5</nu-option>
  <nu-option value="option-6">Option 6</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect>
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
    <SlOption value="option-4">Option 4</SlOption>
    <SlOption value="option-5">Option 5</SlOption>
    <SlOption value="option-6">Option 6</SlOption>
  </SlSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html:preview
<nu-select placeholder="Small" size="small">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>

<br />

<nu-select placeholder="Medium" size="medium">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>

<br />

<nu-select placeholder="Large" size="large">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <>
    <SlSelect placeholder="Small" size="small">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>

    <br />

    <SlSelect placeholder="Medium" size="medium">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>

    <br />

    <SlSelect placeholder="Large" size="large">
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<nu-select placement="top">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <SlSelect placement="top">
    <SlOption value="option-1">Option 1</SlOption>
    <SlOption value="option-2">Option 2</SlOption>
    <SlOption value="option-3">Option 3</SlOption>
  </SlDropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the control.

```html:preview
<nu-select placeholder="Small" size="small" clearable>
  <nu-icon name="house" slot="prefix"></nu-icon>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
<br />
<nu-select placeholder="Medium" size="medium" clearable>
  <nu-icon name="house" slot="prefix"></nu-icon>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
<br />
<nu-select placeholder="Large" size="large" clearable>
  <nu-icon name="house" slot="prefix"></nu-icon>
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlOption from '@onsonr/nebula/dist/react/option';
import SlSelect from '@onsonr/nebula/dist/react/select';

const App = () => (
  <>
    <SlSelect placeholder="Small" size="small">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
    <br />
    <SlSelect placeholder="Medium" size="medium">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
    <br />
    <SlSelect placeholder="Large" size="large">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlOption value="option-1">Option 1</SlOption>
      <SlOption value="option-2">Option 2</SlOption>
      <SlOption value="option-3">Option 3</SlOption>
    </SlSelect>
  </>
);
```

### Custom Tags

When multiple options can be selected, you can provide custom tags by passing a function to the `getTag` property. Your function can return a string of HTML, a <a href="https://lit.dev/docs/templates/overview/">Lit Template</a>, or an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The `getTag()` function will be called for each option. The first argument is an `<nu-option>` element and the second argument is the tag's index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the `style` attribute in your template or you can add your own [parts](/getting-started/customizing/#css-parts) and target them with the [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.

```html:preview
<nu-select
  placeholder="Select one"
  value="email phone"
  multiple
  clearable
  class="custom-tag"
>
  <nu-option value="email">
    <nu-icon slot="prefix" name="envelope"></nu-icon>
    Email
  </nu-option>
  <nu-option value="phone">
    <nu-icon slot="prefix" name="telephone"></nu-icon>
    Phone
  </nu-option>
  <nu-option value="chat">
    <nu-icon slot="prefix" name="chat-dots"></nu-icon>
    Chat
  </nu-option>
</nu-select>

<script type="module">
  const select = document.querySelector('.custom-tag');

  select.getTag = (option, index) => {
    // Use the same icon used in the <nu-option>
    const name = option.querySelector('sl-icon[slot="prefix"]').name;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <nu-tag removable>
        <nu-icon name="${name}" style="padding-inline-end: .5rem;"></nu-icon>
        ${option.getTextLabel()}
      </nu-tag>
    `;
  };
</script>
```

:::warning
Be sure you trust the content you are outputting! Passing unsanitized user input to `getTag()` can result in XSS vulnerabilities.
:::
