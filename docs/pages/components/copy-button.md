---
meta:
  title: Copy Button
  description: Copies data to the clipboard when the user clicks the button.
layout: component
---

```html:preview
<nu-copy-button value="Nebula rocks!"></nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';

const App = () => (
  <NuCopyButton value="Nebula rocks!" />
);
```

## Examples

### Custom Labels

Copy Buttons display feedback in a tooltip. You can customize the labels using the `copy-label`, `success-label`, and `error-label` attributes.

```html:preview
<nu-copy-button
  value="Custom labels are easy"
  copy-label="Click to copy"
  success-label="You did it!"
  error-label="Whoops, your browser doesn't support this!"
></nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';

const App = () => (
  <NuCopyButton
    value="Custom labels are easy"
    copy-label="Click to copy"
    success-label="You did it!"
    error-label="Whoops, your browser doesn't support this!"
  />
);
```

### Custom Icons

Use the `copy-icon`, `success-icon`, and `error-icon` slots to customize the icons that get displayed for each state. You can use [`<nu-icon>`](/components/icon) or your own images.

```html:preview
<nu-copy-button value="Copied from a custom button">
  <nu-icon slot="copy-icon" name="clipboard"></nu-icon>
  <nu-icon slot="success-icon" name="clipboard-check"></nu-icon>
  <nu-icon slot="error-icon" name="clipboard-x"></nu-icon>
</nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';
import { SlIcon } from '@sonr.io/nebula/dist/react/icon';

const App = () => (
  <>
    <NuCopyButton value="Copied from a custom button">
      <NuIcon slot="copy-icon" name="clipboard" />
      <NuIcon slot="success-icon" name="clipboard-check" />
      <NuIcon slot="error-icon" name="clipboard-x" />
    </NuCopyButton>
  </>
);
```

### Copying Values From Other Elements

Normally, the data that gets copied will come from the component's `value` attribute, but you can copy data from any element within the same document by providing its `id` to the `from` attribute.

When using the `from` attribute, the element's [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) will be copied by default. Passing an attribute or property modifier will let you copy data from one of the element's attributes or properties instead.

To copy data from an attribute, use `from="id[attr]"` where `id` is the id of the target element and `attr` is the name of the attribute you'd like to copy. To copy data from a property, use `from="id.prop"` where `id` is the id of the target element and `prop` is the name of the property you'd like to copy.

```html:preview
<!-- Copies the span's textContent -->
<span id="my-phone">+1 (234) 456-7890</span>
<nu-copy-button from="my-phone"></nu-copy-button>

<br><br>

<!-- Copies the input's "value" property -->
<nu-input id="my-input" type="text" value="User input" style="display: inline-block; max-width: 300px;"></nu-input>
<nu-copy-button from="my-input.value"></nu-copy-button>

<br><br>

<!-- Copies the link's "href" attribute -->
<a id="my-link" href="https://nebulaui.org/">Nebula Website</a>
<nu-copy-button from="my-link[href]"></nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';
import { SlInput } from '@sonr.io/nebula/dist/react/input';

const App = () => (
  <>
    {/* Copies the span's textContent */}
    <span id="my-phone">+1 (234) 456-7890</span>
    <NuCopyButton from="my-phone" />

    <br /><br />

    {/* Copies the input's "value" property */}
    <NuInput id="my-input" type="text" />
    <NuCopyButton from="my-input.value" />

    <br /><br />

    {/* Copies the link's "href" attribute */}
    <a id="my-link" href="https://nebulaui.org/">Nebula Website</a>
    <NuCopyButton from="my-link[href]" />
  </>
);
```

### Handling Errors

A copy error will occur if the value is an empty string, if the `from` attribute points to an id that doesn't exist, or if the browser rejects the operation for any reason. When this happens, the `sl-error` event will be emitted.

This example demonstrates what happens when a copy error occurs. You can customize the error label and icon using the `error-label` attribute and the `error-icon` slot, respectively.

```html:preview
<nu-copy-button from="i-do-not-exist"></nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';

const App = () => (
  <NuCopyButton from="i-do-not-exist" />
);
```

### Disabled

Copy buttons can be disabled by adding the `disabled` attribute.

```html:preview
<nu-copy-button value="You can't copy me" disabled></nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';

const App = () => (
  <NuCopyButton value="You can't copy me" disabled />
);
```

### Changing Feedback Duration

A success indicator is briefly shown after copying. You can customize the length of time the indicator is shown using the `feedback-duration` attribute.

```html:preview
<nu-copy-button value="Nebula rocks!" feedback-duration="250"></nu-copy-button>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';

const App = () => (
  <NuCopyButton value="Nebula rocks!" feedback-duration={250} />
);
```

### Custom Styles

You can customize the button to your liking with CSS.

```html:preview
<nu-copy-button value="I'm so stylish" class="custom-styles">
  <nu-icon slot="copy-icon" name="asterisk"></nu-icon>
  <nu-icon slot="success-icon" name="check-lg"></nu-icon>
  <nu-icon slot="error-icon" name="x-lg"></nu-icon>
</nu-copy-button>

<style>
  .custom-styles {
    --success-color: white;
    --error-color: white;
    color: white;
  }

  .custom-styles::part(button) {
    background-color: #ff1493;
    border: solid 4px #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-radius: 0;
    transition: 100ms scale ease-in-out, 100ms translate ease-in-out;
  }

  .custom-styles::part(button):hover {
    scale: 1.1;
  }

  .custom-styles::part(button):active {
    translate: 0 2px;
  }

  .custom-styles::part(button):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

```jsx:react
import { SlCopyButton } from '@sonr.io/nebula/dist/react/copy-button';

const css = `
  .custom-styles {
    --success-color: white;
    --error-color: white;
    color: white;
  }

  .custom-styles::part(button) {
    background-color: #ff1493;
    border: solid 4px #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-radius: 0;
    transition: 100ms scale ease-in-out, 100ms translate ease-in-out;
  }

  .custom-styles::part(button):hover {
    scale: 1.1;
  }

  .custom-styles::part(button):active {
    translate: 0 2px;
  }

  .custom-styles::part(button):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
`;

const App = () => (
  <>
    <NuCopyButton value="I'm so stylish" className="custom-styles" />

    <style>{css}</style>
  </>
);
```
