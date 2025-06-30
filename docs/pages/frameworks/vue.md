---
meta:
  title: Vue
  description: Tips for using Nebula in your Vue 3 app.
---

# Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Nebula in your Vue apps with ease.

:::tip
These instructions are for Vue 3 and above. If you're using Vue 2, please see the [Vue 2 instructions](/frameworks/vue-2).
:::

## Installation

To add Nebula to your Vue app, install the package from npm.

```bash
npm install @sonr.io/nebula
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
// main.js or main.ts
import '@sonr.io/nebula/dist/themes/light.css';
import { setBasePath } from '@sonr.io/nebula/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@sonr.io/nebula@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@sonr.io/nebula/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

If you haven't configured your Vue.js project to work with custom elements/web components, follow [the instructions here](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue) based on your project type to ensure your project will not throw an error when it encounters a custom element.

Now you can start using Nebula components in your app!

## Types

Once you have configured your application for custom elements, you should be able to use Nebula in your application without it causing any errors. Unfortunately, this doesn't register the custom elements to behave like components built using Vue. To provide autocomplete information and type safety for your components, you can import the Nebula Vue types into your `tsconfig.json` to get better integration in your standard Vue and JSX templates.

```json
{
  "compilerOptions": {
    "types": ["@sonr.io/nebula/dist/types/vue"]
  }
}
```

## Usage

### QR code generator example

```html
<template>
  <div class="container">
    <h1>QR code generator</h1>

    <nu-input maxlength="255" clearable label="Value" v-model="qrCode"></nu-input>

    <nu-qr-code :value="qrCode"></nu-qr-code>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@sonr.io/nebula/dist/components/qr-code/qr-code.js';
  import '@sonr.io/nebula/dist/components/input/input.js';

  const qrCode = ref();
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }

  sl-input {
    margin: var(--nu-spacing-large) 0;
  }
</style>
```

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<nu-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<nu-input v-model="name"></nu-input>
<!-- This works, but it's a bit longer -->
<nu-input :value="name" @input="name = $event.target.value"></nu-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-sl-model) adds a custom directive that will work just like `v-model` but for Nebula components.

:::tip
Are you using Nebula with Vue? [Help us improve this page!](https://github.com/onsonr/nebula/blob/next/docs/frameworks/vue.md)
:::

### Slots

Slots in Nebula/web components are functionally the same as basic slots in Vue. Slots can be assigned to elements using the `slot` attribute followed by the name of the slot it is being assigned to.

Here is an example:

```html
<nu-drawer label="Drawer" placement="start" class="drawer-placement-start" :open="drawerIsOpen">
  This drawer slides in from the start.
  <div slot="footer">
    <nu-button variant="primary" @click=" drawerIsOpen = false">Close</nu-button>
  </div>
</nu-drawer>
```
