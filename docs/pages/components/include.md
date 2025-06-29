---
meta:
  title: Include
  description: Includes give you the power to embed external HTML files into the page.
layout: component
---

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<nu-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html:preview
<nu-include src="https://nebulaui.org/assets/examples/include.html"></nu-include>
```

```jsx:react
import SlInclude from '@sonr.io/nebula/dist/react/include';

const App = () => <NuInclude src="https://nebulaui.org/assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `sl-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `sl-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<nu-include src="https://nebulaui.org/assets/examples/include.html"></nu-include>

<script>
  const include = document.querySelector('sl-include');

  include.addEventListener('sl-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Success');
    }
  });

  include.addEventListener('sl-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Error', event.detail.status);
    }
  });
</script>
```
