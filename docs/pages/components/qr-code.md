---
meta:
  title: QR Code
  description: Generates a QR code and renders it using the Canvas API.
layout: component
---

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html:preview
<div class="qr-overview">
  <nu-qr-code value="https://nebulaui.org/" label="Scan this code to visit Nebula on the web!"></nu-qr-code>
  <br />

  <nu-input maxlength="255" clearable label="Value"></nu-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('sl-qr-code');
  const input = container.querySelector('sl-input');

  customElements.whenDefined('sl-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('sl-input', () => (qrCode.value = input.value));
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview sl-input {
    margin-top: 1rem;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import SlQrCode from '@sonr.io/nebula/dist/react/qr-code';
import SlInput from '@sonr.io/nebula/dist/react/input';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview sl-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://nebulaui.org/');

  return (
    <>
      <div className="qr-overview">
        <NuQrCode value={value} label="Scan this code to visit Nebula on the web!" />
        <br />

        <NuInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html:preview
<nu-qr-code value="https://nebulaui.org/" fill="deeppink" background="white"></nu-qr-code>
```

```jsx:react
import SlQrCode from '@sonr.io/nebula/dist/react/qr-code';

const App = () => <NuQrCode value="https://nebulaui.org/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html:preview
<nu-qr-code value="https://nebulaui.org/" size="64"></nu-qr-code>
```

```jsx:react
import SlQrCode from '@sonr.io/nebula/dist/react/qr-code';

const App = () => <NuQrCode value="https://nebulaui.org/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html:preview
<nu-qr-code value="https://nebulaui.org/" radius="0.5"></nu-qr-code>
```

```jsx:react
import SlQrCode from '@sonr.io/nebula/dist/react/qr-code';

const App = () => <NuQrCode value="https://nebulaui.org/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html:preview
<div class="qr-error-correction">
  <nu-qr-code value="https://nebulaui.org/" error-correction="L"></nu-qr-code>
  <nu-qr-code value="https://nebulaui.org/" error-correction="M"></nu-qr-code>
  <nu-qr-code value="https://nebulaui.org/" error-correction="Q"></nu-qr-code>
  <nu-qr-code value="https://nebulaui.org/" error-correction="H"></nu-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx:react
import SlQrCode from '@sonr.io/nebula/dist/react/qr-code';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <NuQrCode value="https://nebulaui.org/" error-correction="L" />
        <NuQrCode value="https://nebulaui.org/" error-correction="M" />
        <NuQrCode value="https://nebulaui.org/" error-correction="Q" />
        <NuQrCode value="https://nebulaui.org/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```
