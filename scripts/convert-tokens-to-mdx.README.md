# Token Documentation Converter

This script converts the Nebula token documentation files from Markdown to MDX format for use with FumaDocs.

## Usage

```bash
node scripts/convert-tokens-to-mdx.js
```

## What it does

1. **Converts YAML frontmatter** - Transforms the `meta` object structure to flat frontmatter fields
2. **Converts tips to Callout components** - Replaces `:::tip` blocks with FumaDocs `<Callout>` components
3. **Creates React components for interactive elements**:
   - `ColorPalette` component for color swatches in `color.mdx`
   - `SpacingDemo` component for spacing visualizations in `spacing.mdx`
4. **Converts inline styles to JSX format** - Transforms HTML style attributes to React-compatible style objects
5. **Handles imports** - Automatically adds necessary imports for components used in the MDX files
6. **Preserves tables** - Maintains markdown table formatting for token documentation

## Input/Output

- **Input**: Token documentation files from `docs/pages/tokens/*.md`
- **Output**: Converted MDX files in `docs/pages/tokens-mdx/*.mdx`

## Files converted

- `border-radius.md` → `border-radius.mdx`
- `color.md` → `color.mdx` (with ColorPalette component)
- `elevation.md` → `elevation.mdx`
- `more.md` → `more.mdx`
- `spacing.md` → `spacing.mdx` (with SpacingDemo component)
- `transition.md` → `transition.mdx`
- `typography.md` → `typography.mdx`
- `z-index.md` → `z-index.mdx`

## Dependencies

- `js-yaml` - For parsing YAML frontmatter (already installed in the project)