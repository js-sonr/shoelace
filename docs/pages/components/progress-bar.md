---
meta:
  title: Progress Bar
  description: Progress bars are used to show the status of an ongoing operation.
layout: component
---

```html:preview
<nu-progress-bar value="50"></nu-progress-bar>
```

```jsx:react
import SlProgressBar from '@sonr.io/nebula/dist/react/progress-bar';

const App = () => <NuProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html:preview
<nu-progress-bar value="50" label="Upload progress"></nu-progress-bar>
```

```jsx:react
import SlProgressBar from '@sonr.io/nebula/dist/react/progress-bar';

const App = () => <NuProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html:preview
<nu-progress-bar value="50" style="--height: 6px;"></nu-progress-bar>
```

{% raw %}

```jsx:react
import SlProgressBar from '@sonr.io/nebula/dist/react/progress-bar';

const App = () => <NuProgressBar value={50} style={{ '--height': '6px' }} />;
```

{% endraw %}

### Showing Values

Use the default slot to show a value.

```html:preview
<nu-progress-bar value="50" class="progress-bar-values">50%</nu-progress-bar>

<br />

<nu-button circle><nu-icon name="dash" label="Decrease"></nu-icon></nu-button>
<nu-button circle><nu-icon name="plus" label="Increase"></nu-icon></nu-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import SlButton from '@sonr.io/nebula/dist/react/button';
import SlIcon from '@sonr.io/nebula/dist/react/icon';
import SlProgressBar from '@sonr.io/nebula/dist/react/progress-bar';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <NuProgressBar value={value}>{value}%</NuProgressBar>

      <br />

      <NuButton circle onClick={() => adjustValue(-10)}>
        <NuIcon name="dash" label="Decrease" />
      </NuButton>

      <NuButton circle onClick={() => adjustValue(10)}>
        <NuIcon name="plus" label="Increase" />
      </NuButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html:preview
<nu-progress-bar indeterminate></nu-progress-bar>
```

```jsx:react
import SlProgressBar from '@sonr.io/nebula/dist/react/progress-bar';

const App = () => <NuProgressBar indeterminate />;
```
