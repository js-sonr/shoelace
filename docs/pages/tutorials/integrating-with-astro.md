---
meta:
  title: Integrating with Astro
  description: This page explains how to integrate Nebula with an Astro app.
---

# Integrating with Astro

This page explains how to integrate Nebula with an Astro app.

:::tip
This is a community-maintained document. Please [ask the community](/resources/community) if you have questions about this integration. You can also [suggest improvements](https://github.com/onsonr/nebula/blob/next/docs/tutorials/integrating-with-astro.md) to make it better.
:::

## SSR and client scripts

In the following tutorial you will notice that Nebula cannot be imported in the frontmatter of Astro files. This is because Nebula relies on globals from the DOM to be present.

There is a [Lit + Astro integration for SSR](https://docs.astro.build/en/guides/integrations-guide/lit/) , however it will not work with Nebula in its current state due to some reliance on DOM APIs that aren't shimmed. We are working to resolve this.

## Instructions - Astro 4.11.3

- Node: v18.17.1 or v20.3.0 or higher. ( v19 is not supported.)
- Astro: 4.11.3
- Nebula: 2.15.1

To get started using Nebula with Astro, the following packages must be installed.

```bash
npm install @sonr.io/nebula rollup-plugin-copy
```

### Importing components

In `/src/pages/index.astro`, set the base path and import Nebula.

```html
---
// import default stylesheet
import "@sonr.io/nebula/dist/themes/light.css";
---

<html>
  <body>
    <nu-button>Button</nu-button>
  </body>
</html>

<script>
  // setBasePath to tell Nebula where to load icons from.
  import { setBasePath } from '@sonr.io/nebula/dist/utilities/base-path.js';
  setBasePath('/shoelace-assets/');

  // Load all components.
  import '@sonr.io/nebula';
</script>
```

:::tip
If you want to cherry pick components, replace the main Nebula import with 'import "@sonr.io/nebula/dist/components/button/button.js";' for whichever component you would like.
:::

You only have to import in the main `index.astro` file. The components can be used anywhere throughout the project.

### Customizing animations

In `/src/pages/index.astro`, set custom animations after the Nebula import.

```html
---
import { setBasePath } from "@sonr.io/nebula/dist/utilities/base-path.js";
setBasePath("dist/assets");
---

<html>
  <body>
    <nu-tooltip content="This is a tooltip">
      <nu-button>Hover Me</nu-button>
    </nu-tooltip>
  </body>
</html>

<script>
  // setBasePath to tell Nebula where to load icons from.
  import { setBasePath } from '@sonr.io/nebula/dist/utilities/base-path.js';
  setBasePath('/shoelace-assets/');

  // Load all components.
  import '@sonr.io/nebula';

  const duration = 3000;
  import { setDefaultAnimation } from '@sonr.io/nebula/dist/utilities/animation-registry.js';

  setDefaultAnimation('tooltip.show', {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: duration, easing: 'ease' }
  });
</script>
```

## Modifying Astro Config

You'll notice the above steps never added our icons into our `/public` directory. To solve this, we can install `rollup-plugin-copy` to copy Nebula's assets into your public directory.

Here's what your Astro config should look like:

```js
// astro.config.mjs

import { defineConfig } from 'astro/config';
import copy from 'rollup-plugin-copy';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      copy({
        // Copy only on first build. We dont want to trigger additional server reloads.
        copyOnce: true,
        hook: 'buildStart',
        targets: [
          { src: 'node_modules/@sonr.io/nebula/dist/assets/*', dest: 'public/shoelace-assets/assets/' }
        ]
      })
    ]
  }
});
```
