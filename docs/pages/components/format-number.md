---
meta:
  title: Format Number
  description: Formats a number using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html:preview
<div class="format-number-overview">
  <nu-format-number value="1000"></nu-format-number>
  <br /><br />
  <nu-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></nu-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('sl-format-number');
  const input = container.querySelector('sl-input');

  input.addEventListener('sl-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import SlFormatNumber from '@onsonr/nebula/dist/react/format-number';
import SlInput from '@onsonr/nebula/dist/react/input';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <NuFormatNumber value={value} />
      <br />
      <br />
      <NuInput
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html:preview
<nu-format-number type="percent" value="0"></nu-format-number><br />
<nu-format-number type="percent" value="0.25"></nu-format-number><br />
<nu-format-number type="percent" value="0.50"></nu-format-number><br />
<nu-format-number type="percent" value="0.75"></nu-format-number><br />
<nu-format-number type="percent" value="1"></nu-format-number>
```

```jsx:react
import SlFormatNumber from '@onsonr/nebula/dist/react/format-number';

const App = () => (
  <>
    <NuFormatNumber type="percent" value={0} />
    <br />
    <NuFormatNumber type="percent" value={0.25} />
    <br />
    <NuFormatNumber type="percent" value={0.5} />
    <br />
    <NuFormatNumber type="percent" value={0.75} />
    <br />
    <NuFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
English: <nu-format-number value="2000" lang="en" minimum-fraction-digits="2"></nu-format-number><br />
German: <nu-format-number value="2000" lang="de" minimum-fraction-digits="2"></nu-format-number><br />
Russian: <nu-format-number value="2000" lang="ru" minimum-fraction-digits="2"></nu-format-number>
```

```jsx:react
import SlFormatNumber from '@onsonr/nebula/dist/react/format-number';

const App = () => (
  <>
    English: <NuFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <NuFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <NuFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html:preview
<nu-format-number type="currency" currency="USD" value="2000" lang="en-US"></nu-format-number><br />
<nu-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></nu-format-number><br />
<nu-format-number type="currency" currency="EUR" value="2000" lang="de"></nu-format-number><br />
<nu-format-number type="currency" currency="RUB" value="2000" lang="ru"></nu-format-number><br />
<nu-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></nu-format-number>
```

```jsx:react
import SlFormatNumber from '@onsonr/nebula/dist/react/format-number';

const App = () => (
  <>
    <NuFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <NuFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <NuFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <NuFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <NuFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```
