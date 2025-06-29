---
meta:
  title: Alert
  description: Alerts are used to display important messages inline or as toast notifications.
layout: component
---

```html:preview
<nu-alert open>
  <nu-icon slot="icon" name="info-circle"></nu-icon>
  This is a standard alert. You can customize its content and even the icon.
</nu-alert>
```

```jsx:react
import SlAlert from '@sonr.io/nebula/dist/react/alert';
import SlIcon from '@sonr.io/nebula/dist/react/icon';

const App = () => (
  <NuAlert open>
    <NuIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </NuAlert>
);
```

:::tip
Alerts will not be visible if the `open` attribute is not present.
:::

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html:preview
<nu-alert variant="primary" open>
  <nu-icon slot="icon" name="info-circle"></nu-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</nu-alert>

<br />

<nu-alert variant="success" open>
  <nu-icon slot="icon" name="check2-circle"></nu-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</nu-alert>

<br />

<nu-alert variant="neutral" open>
  <nu-icon slot="icon" name="gear"></nu-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take effect on next login.
</nu-alert>

<br />

<nu-alert variant="warning" open>
  <nu-icon slot="icon" name="exclamation-triangle"></nu-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</nu-alert>

<br />

<nu-alert variant="danger" open>
  <nu-icon slot="icon" name="exclamation-octagon"></nu-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</nu-alert>
```

```jsx:react
import SlAlert from '@sonr.io/nebula/dist/react/alert';
import SlIcon from '@sonr.io/nebula/dist/react/icon';

const App = () => (
  <>
    <NuAlert variant="primary" open>
      <NuIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </NuAlert>

    <br />

    <NuAlert variant="success" open>
      <NuIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </NuAlert>

    <br />

    <NuAlert variant="neutral" open>
      <NuIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take effect on next login.
    </NuAlert>

    <br />

    <NuAlert variant="warning" open>
      <NuIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </NuAlert>

    <br />

    <NuAlert variant="danger" open>
      <NuIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </NuAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html:preview
<nu-alert variant="primary" open closable class="alert-closable">
  <nu-icon slot="icon" name="info-circle"></nu-icon>
  You can close this alert any time!
</nu-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('sl-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import SlAlert from '@sonr.io/nebula/dist/react/alert';
import SlIcon from '@sonr.io/nebula/dist/react/icon';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <NuAlert open={open} closable onSlAfterHide={handleHide}>
      <NuIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </NuAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html:preview
<nu-alert variant="primary" open> Nothing fancy here, just a simple alert. </nu-alert>
```

```jsx:react
import SlAlert from '@sonr.io/nebula/dist/react/alert';

const App = () => (
  <NuAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </NuAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html:preview
<div class="alert-duration">
  <nu-button variant="primary">Show Alert</nu-button>

  <nu-alert variant="primary" duration="3000" closable>
    <nu-icon slot="icon" name="info-circle"></nu-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </nu-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('sl-button');
  const alert = container.querySelector('sl-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration sl-alert {
    margin-top: var(--nu-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import SlAlert from '@sonr.io/nebula/dist/react/alert';
import SlButton from '@sonr.io/nebula/dist/react/button';
import SlIcon from '@sonr.io/nebula/dist/react/icon';

const css = `
  .alert-duration sl-alert {
    margin-top: var(--nu-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <NuButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </NuButton>

        <NuAlert variant="primary" duration="3000" open={open} closable onSlAfterHide={() => setOpen(false)}>
          <NuIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </NuAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html:preview
<div class="alert-toast">
  <nu-button variant="primary">Primary</nu-button>
  <nu-button variant="success">Success</nu-button>
  <nu-button variant="neutral">Neutral</nu-button>
  <nu-button variant="warning">Warning</nu-button>
  <nu-button variant="danger">Danger</nu-button>

  <nu-alert variant="primary" duration="3000" closable>
    <nu-icon slot="icon" name="info-circle"></nu-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </nu-alert>

  <nu-alert variant="success" duration="3000" closable>
    <nu-icon slot="icon" name="check2-circle"></nu-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </nu-alert>

  <nu-alert variant="neutral" duration="3000" closable>
    <nu-icon slot="icon" name="gear"></nu-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
  </nu-alert>

  <nu-alert variant="warning" duration="3000" closable>
    <nu-icon slot="icon" name="exclamation-triangle"></nu-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </nu-alert>

  <nu-alert variant="danger" duration="3000" closable>
    <nu-icon slot="icon" name="exclamation-octagon"></nu-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </nu-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`sl-button[variant="${variant}"]`);
    const alert = container.querySelector(`sl-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import SlAlert from '@sonr.io/nebula/dist/react/alert';
import SlButton from '@sonr.io/nebula/dist/react/button';
import SlIcon from '@sonr.io/nebula/dist/react/icon';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <NuButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </NuButton>

      <NuButton variant="success" onClick={() => success.current.toast()}>
        Success
      </NuButton>

      <NuButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </NuButton>

      <NuButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </NuButton>

      <NuButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </NuButton>

      <NuAlert ref={primary} variant="primary" duration="3000" closable>
        <NuIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </NuAlert>

      <NuAlert ref={success} variant="success" duration="3000" closable>
        <NuIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </NuAlert>

      <NuAlert ref={neutral} variant="neutral" duration="3000" closable>
        <NuIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take effect on next login.
      </NuAlert>

      <NuAlert ref={warning} variant="warning" duration="3000" closable>
        <NuIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </NuAlert>

      <NuAlert ref={danger} variant="danger" duration="3000" closable>
        <NuIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </NuAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html:preview
<div class="alert-toast-wrapper">
  <nu-button variant="primary">Create Toast</nu-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('sl-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('sl-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <nu-icon name="${icon}" slot="icon"></nu-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.sl-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.sl-toast-stack {
  left: 0;
  right: auto;
}
```

:::tip
By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.
:::
