#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../docs/pages/tokens');
const OUTPUT_DIR = path.join(__dirname, '../docs/pages/tokens-mdx');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Component for color palettes
const COLOR_PALETTE_COMPONENT = `
export function ColorPalette({ name, token, values }) {
  return (
    <div className="color-palette">
      <div className="color-palette__name">
        {name}<br />
        <code>{token}</code>
      </div>
      {values.map((value) => (
        <div key={value} className="color-palette__example">
          <div 
            className={\`color-palette__swatch \${value === '0' ? 'color-palette__swatch--border' : ''}\`}
            style={{ backgroundColor: \`var(\${token.replace('{n}', value)})\` }}
          />
          {value}
        </div>
      ))}
    </div>
  );
}
`.trim();

// Component for spacing demos
const SPACING_DEMO_COMPONENT = `
export function SpacingDemo({ token }) {
  return (
    <div 
      className="spacing-demo" 
      style={{ 
        width: \`var(\${token})\`, 
        height: \`var(\${token})\` 
      }} 
    />
  );
}
`.trim();

function convertMarkdownToMdx(content, filename) {
  let mdxContent = content;
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (frontmatterMatch) {
    const yamlContent = frontmatterMatch[1];
    const mainContent = frontmatterMatch[2];
    
    // Parse YAML
    const frontmatter = yaml.load(yamlContent);
    
    // Convert to MDX frontmatter format
    const mdxFrontmatter = `---
title: ${frontmatter.meta.title}
description: ${frontmatter.meta.description}
---`;
    
    mdxContent = mdxFrontmatter + '\n\n' + mainContent;
  }
  
  // Track imports to avoid duplicates
  const imports = [];
  
  // Import Callout component at the top if there are tips
  if (mdxContent.includes(':::tip')) {
    imports.push('import { Callout } from "fumadocs-ui/components/callout";');
  }
  
  // Convert tips to Callout components
  mdxContent = mdxContent.replace(/:::tip\n([\s\S]*?)\n:::/g, (match, content) => {
    return `<Callout type="info">\n${content.trim()}\n</Callout>`;
  });
  
  // Handle color.md specific conversions
  if (filename === 'color.md') {
    // Add imports and color palette component
    const colorImports = [...imports];
    if (!colorImports.includes('import { Callout } from "fumadocs-ui/components/callout";')) {
      colorImports.push('import { Callout } from "fumadocs-ui/components/callout";');
    }
    
    mdxContent = mdxContent.replace(/^---\n[\s\S]*?\n---\n/, (match) => {
      return match + '\n' + colorImports.join('\n') + '\n\n' + COLOR_PALETTE_COMPONENT + '\n';
    });
    
    // Convert color palette HTML to component usage
    const colorPaletteRegex = /<div class="color-palette">\s*<div class="color-palette__name">\s*([\s\S]*?)<br>\s*<code>(.*?)<\/code>\s*<\/div>\s*([\s\S]*?)<\/div>(?=\s*(?:<div class="color-palette">|<Callout|$))/g;
    
    mdxContent = mdxContent.replace(colorPaletteRegex, (match, name, tokenPattern, swatchesHtml) => {
      // Extract values from swatches
      const values = [];
      const swatchRegex = /<div class="color-palette__example"><div class="color-palette__swatch[^"]*"[^>]*><\/div>(\d+)<\/div>/g;
      let swatchMatch;
      while ((swatchMatch = swatchRegex.exec(swatchesHtml)) !== null) {
        values.push(swatchMatch[1]);
      }
      
      // Clean up the token pattern to get the base token
      const baseToken = tokenPattern.replace(/<em>/g, '').replace(/<\/em>/g, '');
      
      return `<ColorPalette 
  name="${name.trim()}"
  token="${baseToken}"
  values={[${values.map(v => `"${v}"`).join(', ')}]}
/>`;
    });
  }
  
  // Handle spacing.md specific conversions
  else if (filename === 'spacing.md') {
    // Add spacing demo component import
    mdxContent = mdxContent.replace(/^---\n[\s\S]*?\n---\n/, (match) => {
      const spacingImports = imports.join('\n');
      return match + '\n' + (spacingImports ? spacingImports + '\n\n' : '') + SPACING_DEMO_COMPONENT + '\n';
    });
    
    // Convert spacing demos in tables
    mdxContent = mdxContent.replace(/<div class="spacing-demo" style="width: var\((--nu-spacing-[^)]+)\); height: var\(--nu-spacing-[^)]+\);"><\/div>/g, 
      (match, token) => {
        return `<SpacingDemo token="${token}" />`;
      }
    );
  }
  // For other files, just add the imports if needed
  else if (imports.length > 0) {
    mdxContent = mdxContent.replace(/^---\n[\s\S]*?\n---\n/, (match) => {
      return match + '\n' + imports.join('\n') + '\n';
    });
  }
  
  // Convert inline styles with var() to JSX format
  mdxContent = mdxContent.replace(/<span style="([^"]+)">([^<]+)<\/span>/g, (match, style, content) => {
    // Convert CSS style to JSX style object
    const styleObj = style.split(';')
      .filter(s => s.trim())
      .map(s => {
        const [prop, value] = s.split(':').map(str => str.trim());
        const jsxProp = prop.replace(/-([a-z])/g, (m, g) => g.toUpperCase());
        return `${jsxProp}: "${value}"`;
      })
      .join(', ');
    
    return `<span style={{ ${styleObj} }}>${content}</span>`;
  });
  
  // Convert div styles to JSX format - handle multiline divs
  mdxContent = mdxContent.replace(/<div style="([^"]+)">([\s\S]*?)<\/div>/g, (match, style, content) => {
    const styleObj = style.split(';')
      .filter(s => s.trim())
      .map(s => {
        const [prop, value] = s.split(':').map(str => str.trim());
        const jsxProp = prop.replace(/-([a-z])/g, (m, g) => g.toUpperCase());
        return `${jsxProp}: "${value}"`;
      })
      .join(', ');
    
    return `<div style={{ ${styleObj} }}>${content}</div>`;
  });
  
  // Convert HTML entities and ensure proper JSX formatting
  mdxContent = mdxContent
    .replace(/className=/g, 'className=')
    .replace(/<br>/g, '<br />')
    .replace(/<br\s*\/>/g, '<br />');
  
  // Ensure tables maintain proper formatting
  // Tables in MDX should remain as markdown tables
  
  return mdxContent;
}

// Process all token files
const tokenFiles = fs.readdirSync(INPUT_DIR).filter(file => file.endsWith('.md'));

tokenFiles.forEach(file => {
  const inputPath = path.join(INPUT_DIR, file);
  const outputPath = path.join(OUTPUT_DIR, file.replace('.md', '.mdx'));
  
  console.log(`Converting ${file}...`);
  
  const content = fs.readFileSync(inputPath, 'utf-8');
  const mdxContent = convertMarkdownToMdx(content, file);
  
  fs.writeFileSync(outputPath, mdxContent);
  console.log(`✓ Converted ${file} to ${file.replace('.md', '.mdx')}`);
});

console.log('\nConversion complete! MDX files saved to:', OUTPUT_DIR);