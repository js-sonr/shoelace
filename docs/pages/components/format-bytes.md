---
meta:
  title: Format Bytes
  description: Formats a number as a human readable bytes value.
layout: component
---

```html:preview
<div class="format-bytes-overview">
  The file is <nu-format-bytes value="1000"></nu-format-bytes> in size. <br /><br />
  <nu-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></nu-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('sl-format-bytes');
  const input = container.querySelector('sl-input');

  input.addEventListener('sl-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import SlButton from '@onsonr/nebula/dist/react/button';
import SlFormatBytes from '@onsonr/nebula/dist/react/format-bytes';
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <SlFormatBytes value={value} /> in size.
      <br />
      <br />
      <SlInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onSlInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

{% endraw %}

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html:preview
<nu-format-bytes value="12"></nu-format-bytes><br />
<nu-format-bytes value="1200"></nu-format-bytes><br />
<nu-format-bytes value="1200000"></nu-format-bytes><br />
<nu-format-bytes value="1200000000"></nu-format-bytes>
```

```jsx:react
import SlFormatBytes from '@onsonr/nebula/dist/react/format-bytes';

const App = () => (
  <>
    <SlFormatBytes value="12" />
    <br />
    <SlFormatBytes value="1200" />
    <br />
    <SlFormatBytes value="1200000" />
    <br />
    <SlFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html:preview
<nu-format-bytes value="12" unit="bit"></nu-format-bytes><br />
<nu-format-bytes value="1200" unit="bit"></nu-format-bytes><br />
<nu-format-bytes value="1200000" unit="bit"></nu-format-bytes><br />
<nu-format-bytes value="1200000000" unit="bit"></nu-format-bytes>
```

```jsx:react
import SlFormatBytes from '@onsonr/nebula/dist/react/format-bytes';

const App = () => (
  <>
    <SlFormatBytes value="12" unit="bit" />
    <br />
    <SlFormatBytes value="1200" unit="bit" />
    <br />
    <SlFormatBytes value="1200000" unit="bit" />
    <br />
    <SlFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
<nu-format-bytes value="12" lang="de"></nu-format-bytes><br />
<nu-format-bytes value="1200" lang="de"></nu-format-bytes><br />
<nu-format-bytes value="1200000" lang="de"></nu-format-bytes><br />
<nu-format-bytes value="1200000000" lang="de"></nu-format-bytes>
```

```jsx:react
import SlFormatBytes from '@onsonr/nebula/dist/react/format-bytes';

const App = () => (
  <>
    <SlFormatBytes value="12" lang="de" />
    <br />
    <SlFormatBytes value="1200" lang="de" />
    <br />
    <SlFormatBytes value="1200000" lang="de" />
    <br />
    <SlFormatBytes value="1200000000" lang="de" />
  </>
);
```
