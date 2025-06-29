---
meta:
  title: Spinner
  description: Spinners are used to show the progress of an indeterminate operation.
layout: component
---

```html:preview
<nu-spinner></nu-spinner>
```

```jsx:react
import SlSpinner from '@onsonr/nebula/dist/react/spinner';

const App = () => <NuSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html:preview
<nu-spinner></nu-spinner>
<nu-spinner style="font-size: 2rem;"></nu-spinner>
<nu-spinner style="font-size: 3rem;"></nu-spinner>
```

{% raw %}

```jsx:react
import SlSpinner from '@onsonr/nebula/dist/react/spinner';

const App = () => (
  <>
    <NuSpinner />
    <NuSpinner style={{ fontSize: '2rem' }} />
    <NuSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

{% endraw %}

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html:preview
<nu-spinner style="font-size: 50px; --track-width: 10px;"></nu-spinner>
```

{% raw %}

```jsx:react
import SlSpinner from '@onsonr/nebula/dist/react/spinner';

const App = () => (
  <NuSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

{% endraw %}

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html:preview
<nu-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></nu-spinner>
```

{% raw %}

```jsx:react
import SlSpinner from '@onsonr/nebula/dist/react/spinner';

const App = () => (
  <NuSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

{% endraw %}
