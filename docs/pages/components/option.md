---
meta:
  title: Option
  description: Options define the selectable items within various form controls such as select.
layout: component
---

```html:preview
<nu-select label="Select one">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2">Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@sonr.io/nebula/dist/react/option';
import SlSelect from '@sonr.io/nebula/dist/react/select';

const App = () => (
  <NuSelect>
    <NuOption value="option-1">Option 1</NuOption>
    <NuOption value="option-2">Option 2</NuOption>
    <NuOption value="option-3">Option 3</NuOption>
  </NuSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html:preview
<nu-select label="Select one">
  <nu-option value="option-1">Option 1</nu-option>
  <nu-option value="option-2" disabled>Option 2</nu-option>
  <nu-option value="option-3">Option 3</nu-option>
</nu-select>
```

```jsx:react
import SlOption from '@sonr.io/nebula/dist/react/option';
import SlSelect from '@sonr.io/nebula/dist/react/select';

const App = () => (
  <NuSelect>
    <NuOption value="option-1">Option 1</NuOption>
    <NuOption value="option-2" disabled>
      Option 2
    </NuOption>
    <NuOption value="option-3">Option 3</NuOption>
  </NuSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<nu-select label="Select one">
  <nu-option value="option-1">
    <nu-icon slot="prefix" name="envelope"></nu-icon>
    Email
    <nu-icon slot="suffix" name="patch-check"></nu-icon>
  </nu-option>

  <nu-option value="option-2">
    <nu-icon slot="prefix" name="telephone"></nu-icon>
    Phone
    <nu-icon slot="suffix" name="patch-check"></nu-icon>
  </nu-option>

  <nu-option value="option-3">
    <nu-icon slot="prefix" name="chat-dots"></nu-icon>
    Chat
    <nu-icon slot="suffix" name="patch-check"></nu-icon>
  </nu-option>
</nu-select>
```
