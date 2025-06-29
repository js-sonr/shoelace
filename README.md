# Nebula UI Components

> A comprehensive web components library built for the [Sonr Network](https://sonr.io/), specializing in cryptocurrency and blockchain interfaces.

A modern, extensible component library designed specifically for Web3 applications.

- Custom crypto-focused icon library 🪙
- Sonr design system integration 🎨
- Specialized components for blockchain UIs 🔗
- Works with all frameworks 🧩
- Built with accessibility in mind ♿️
- Open source 😸

Built with LitElement and optimized for blockchain applications.

---

Documentation: [docs.sonr.io/design](https://docs.sonr.io/components)

Source: [github.com/sonr-io/nebula](https://github.com/sonr-io/nebula)

Twitter: [@sonr_io](https://twitter.com/sonr_io)

---

## Contributing to Nebula 🚀

Developers can use this documentation to learn how to build Nebula from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use Nebula!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of Nebula.

If that's not what you're trying to do, the [documentation website](https://docs.sonr.io/nebula) is where you want to be.

### How are Nebula components built?

Components are built with [LitElement](https://lit.dev/) for reactive web components, integrated with Sonr's design system and custom icon libraries specifically created for cryptocurrency and blockchain interfaces. The build process uses [esbuild](https://esbuild.github.io/) for efficient bundling.

### Forking the Repo

Start by [forking the repo](https://github.com/sonr-io/nebula/fork) on GitHub, then clone it locally and install dependencies.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/nebula
cd nebula
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `nu-tag-name` with the desired tag name.

```bash
npm run create nu-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.

## License

Nebula is available under the terms of the MIT license.

Whether you're building Nebula or building something _with_ Nebula — have fun creating! 🚀
