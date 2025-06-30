# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **@sonr.io/nebula** - a specialized fork of Shoelace customized for the Sonr Network, focusing on cryptocurrency and blockchain interfaces. It's a comprehensive web components library built with LitElement that provides UI components specifically designed for blockchain applications.

## Commands

### Development

- `npm start` - Start development server with live reload
- `npm run build` - Build production distribution
- `npm run verify` - Run full verification (prettier, lint, build, test)

### Testing

- `npm test` - Run all tests using Web Test Runner with Playwright
- `npm run test:watch` - Run tests in watch mode
- `npm run test:component` - Run tests for a specific component (e.g., `npm run test:component -- --watch --group button`)

### Code Quality

- `npm run lint` - Lint TypeScript files with ESLint (max 0 warnings)
- `npm run lint:fix` - Fix linting issues automatically
- `npm run prettier` - Format code with Prettier
- `npm run prettier:check` - Check code formatting

### Component Generation

- `npm run create` - Generate new component scaffold using Plop (e.g., `npm run create sl-my-component`)

### Alternative Build System

- `task nebula:build` - Build using Taskfile and devbox
- `task templ-gen` - Generate Go templates (for server-side rendering)

## Architecture

### Component Structure

Each component follows a consistent pattern:

- `*.component.ts` - Main component implementation extending ShoelaceElement (LitElement)
- `*.styles.ts` - Component-specific CSS styles using Lit's css template literal
- `*.test.ts` - Component tests using Web Test Runner and Playwright
- `*.ts` - Public API export file

### Core Architecture

- **Base Element**: All components extend `ShoelaceElement` (src/internal/shoelace-element.ts) which extends LitElement
- **Event System**: Custom events with type safety defined in src/events/
- **Styling**: CSS-in-JS using Lit's css template literal with design tokens
- **Icon System**: Multiple icon libraries including crypto icons and Sonr-specific icons
- **Theming**: Light/dark themes with CSS custom properties

### Key Directories

- `src/components/` - All UI components organized by component name
- `src/internal/` - Internal utilities, base classes, and shared functionality
- `src/themes/` - CSS theme files (light.css, dark.css)
- `src/utilities/` - Public utility functions (animation, form, localization)
- `src/translations/` - Internationalization files
- `assets/crypto-icons/` - Cryptocurrency icon library (AAVE, BTC, ETH, etc.)
- `assets/sonr-icons/` - Sonr Network specific icons
- `docs/` - Documentation site built with Eleventy

### Icon Libraries

The project includes specialized icon libraries:

- **crypto**: Cryptocurrency icons (BTC, ETH, USDC, etc.) - `src/components/icon/library.crypto.ts`
- **sonr**: Sonr Network branded icons - `src/components/icon/library.sonr.ts`
- **default**: Standard Bootstrap icons
- **system**: System/OS icons

### Build System

- **Primary**: Node.js build script (scripts/build.js) using esbuild
- **Alternative**: Taskfile with devbox for reproducible builds
- **Testing**: Web Test Runner with Playwright for cross-browser testing
- **Docs**: Eleventy static site generator

### Development Environment

- Uses devbox for reproducible development environments
- PNPM for package management
- TypeScript with strict configuration
- ESLint with custom rules for web components and accessibility

### Blockchain/Crypto Integration

This fork specializes in blockchain UI patterns:

- Cryptocurrency icon support
- Wallet connection interfaces
- Transaction status components
- Blockchain-specific styling and theming
- Integration with Sonr Network design system

## Testing

### Test Structure

- Tests use Web Test Runner with Playwright
- Cross-browser testing (Chromium, WebKit)
- Component-specific test groups for isolated testing
- Form control tests have shared base test utilities in `src/internal/test/`

### Running Tests

- Individual component: `npm run test:component -- --group button`
- All tests: `npm test`
- Watch mode: `npm run test:watch`

## Code Conventions

### Component Development

- Use TypeScript with strict type checking
- Follow LitElement patterns and lifecycle methods
- Implement proper accessibility (ARIA) attributes
- Use CSS custom properties for theming
- Emit custom events for component interactions

### File Organization

- Each component has its own directory under `src/components/`
- Export components through barrel files (index.ts)
- Keep styles separate in `*.styles.ts` files
- Write comprehensive tests for each component

### Styling

- Use CSS-in-JS with Lit's css template literal
- Follow design tokens defined in theme files
- Support both light and dark themes
- Use CSS custom properties for customization

When working with this codebase, prioritize the blockchain/crypto-focused nature of the components and maintain consistency with the Sonr Network design system.
