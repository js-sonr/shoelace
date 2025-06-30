---
meta:
  title: 'Nebula: A specialized fork of Nebula for Crypto and Blockchain interfaces.'
  description: Hand-crafted custom elements for any occasion.
toc: false
---

<div class="splash">
<div class="splash-start">
<img class="splash-logo" src="/assets/images/wordmark.svg" alt="Nebula">

# <nu-visually-hidden>Nebula:</nu-visually-hidden> A forward-thinking library of web components, specifically designed for Blockchain Clients.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes a dark theme 🌛
- Built with accessibility in mind ♿️
- Built-in localization 💬
- Open source 😸

</div>
<div class="splash-end">
<img class="splash-image" src="/assets/images/loginbox.png" alt="Illustration of a sonr login box.">
</div>
</div>

<div class="badges">

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@sonr.io/nebula/badge)](https://www.jsdelivr.com/package/npm/@sonr.io/nebula)
[![npm](https://img.shields.io/npm/dw/@sonr.io/nebula?label=npm&style=flat-square)](https://www.npmjs.com/package/@sonr.io/nebula)
[![License](https://img.shields.io/badge/license-MIT-232323.svg?style=flat-square)](https://github.com/onsonr/nebula/blob/next/LICENSE.md)<br>
[![Twitter](https://img.shields.io/badge/Twitter-Follow-00acee.svg?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/sonr_io)

</div>

## Quick Start

Add the following code to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sonr.io/nebula@%VERSION%/%CDNDIR%/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@sonr.io/nebula@%VERSION%/%CDNDIR%/shoelace-autoloader.js"></script>
```

Now you have access to all of Nebula's components! Try adding a button:

```html:preview:expanded:no-codepen
<nu-button>Click me</nu-button>
```

:::tip
This will activate Nebula's experimental autoloader, which registers components on the fly as you use them. To learn more about it, or for other ways to install Nebula, refer to the [installation instructions](getting-started/installation).
:::

## New to Web Components?

**TL;DR** – we finally have a way to create [our own HTML elements](https://html.spec.whatwg.org/multipage/custom-elements.html) and use them in any framework we want!

Thanks to the popularity of frameworks such as Angular, Vue, and React, component-driven development has become a part of our every day lives. Components help us encapsulate styles and behaviors into reusable building blocks. They make a lot of sense in terms of design, development, and testing.

Unfortunately, _framework-specific_ components fail us in a number of ways:

- You can only use them in the framework they're designed for 🔒
- Their lifespan is limited to that of the framework's ⏳
- New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems. They're [supported by all modern browsers](https://caniuse.com/#feat=custom-elementsv1), they're framework-agnostic, and they're [part of the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

This is the technology that Nebula is built on.

## What Problem Does This Solve?

Nebula provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology. Why spend hundreds of hours (or more) building a design system from scratch? Why make a component library that only works with one framework?

With Nebula, you can:

- Start building things faster (no need to roll your own buttons)
- Build multiple apps with different frameworks that all share the same UI components
- Fully customize components to match your existing designs
- Incrementally adopt components as needed (no need to ditch your framework)
- Upgrade or switch frameworks without rebuilding foundational components

If your organization is looking to build a design system, [Nebula will save you thousands of dollars](https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871). All the foundational components you need are right here, ready to be customized for your brand. And since it's built on web standards, browsers will continue to support it for many years to come.

Whether you use Nebula as a starting point for your organization's design system or for a fun personal project, there's no limit to what you can do with it.

## Browser Support

Nebula is tested in the latest two versions of the following browsers.

<img src="/assets/images/chrome.png" alt="Chrome" width="64" height="64">
<img src="/assets/images/edge.png" alt="Edge" width="64" height="64">
<img src="/assets/images/firefox.png" alt="Firefox" width="64" height="64">
<img src="/assets/images/opera.png" alt="Opera" width="64" height="64">
<img src="/assets/images/safari.png" alt="Safari" width="64" height="64">

Critical bug fixes in earlier versions will be addressed based on their severity and impact.

If you need to support IE11 or pre-Chromium Edge, this library isn't for you. Although web components can (to some degree) be polyfilled for legacy browsers, supporting them is outside the scope of this project. If you're using Nebula in such a browser, you're gonna have a bad time. ⛷

## License

Nebula was created in New Hampshire by [Cory LaViska](https://twitter.com/claviska). It's available under the terms of the [MIT license](https://github.com/onsonr/nebula/blob/next/LICENSE.md).

## Attribution

Special thanks to the following projects and individuals that help make Nebula possible.

- Components are built with [Lit](https://lit.dev/)
- Component metadata is generated by the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest)
- Documentation is powered by [11ty](https://www.11ty.dev/)
- CDN services are provided by [jsDelivr](https://www.jsdelivr.com/)
- Color primitives are inspired by [Tailwind](https://tailwindcss.com/)
- Icons are courtesy of [Bootstrap Icons](https://icons.getbootstrap.com/)
- The homepage illustration is courtesy of [unDraw](https://undraw.co/)
- Positioning of dropdowns, tooltips, et al is handled by [Floating UI](https://floating-ui.com/)
- Animations are courtesy of [animate.css](https://animate.style/)
- Search is powered by [Lunr](https://lunrjs.com/)
- The Nebula logo was designed with a single shoelace by [Adam K Olson](https://twitter.com/adamkolson)
