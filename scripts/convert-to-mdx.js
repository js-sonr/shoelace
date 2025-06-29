#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs/pages/components');
const OUTPUT_DIR = path.join(__dirname, '../docs/mdx/components');
const SRC_DIR = path.join(__dirname, '../src/components');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Map of callout types from Shoelace to FumaDocs
const CALLOUT_TYPE_MAP = {
  'tip': 'info',
  'warning': 'warning',
  'danger': 'error',
  'note': 'info'
};

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, content };
  
  const frontmatterText = match[1];
  const frontmatter = {};
  
  // Parse frontmatter
  const lines = frontmatterText.split('\n');
  let currentKey = null;
  
  for (const line of lines) {
    if (line.match(/^\s*#/) || !line.trim()) continue;
    
    if (line.startsWith('  ')) {
      // Nested property
      if (currentKey && !line.startsWith('    ')) {
        const [key, ...valueParts] = line.trim().split(':');
        const value = valueParts.join(':').trim();
        if (!frontmatter[currentKey]) frontmatter[currentKey] = {};
        frontmatter[currentKey][key] = value;
      }
    } else {
      // Top-level property
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      currentKey = key;
      if (value) {
        frontmatter[key] = value;
      }
    }
  }
  
  // Extract title and description from meta if present
  if (frontmatter.meta) {
    if (frontmatter.meta.title) frontmatter.title = frontmatter.meta.title;
    if (frontmatter.meta.description) frontmatter.description = frontmatter.meta.description;
    delete frontmatter.meta;
  }
  
  return {
    frontmatter,
    content: content.slice(match[0].length).trim()
  };
}

function convertCallouts(content) {
  // Convert ::: callouts to <Callout> components
  const calloutRegex = /:::(tip|warning|danger|note)\n([\s\S]*?)\n:::/g;
  
  return content.replace(calloutRegex, (match, type, text) => {
    const fumaType = CALLOUT_TYPE_MAP[type] || 'info';
    const trimmedText = text.trim();
    
    // Handle multi-line callouts
    const lines = trimmedText.split('\n');
    if (lines.length === 1) {
      return `<Callout type="${fumaType}">\n${trimmedText}\n</Callout>`;
    } else {
      return `<Callout type="${fumaType}">\n  ${lines.join('\n  ')}\n</Callout>`;
    }
  });
}

function extractCodeBlocks(content) {
  const sections = [];
  let currentSection = { text: '', examples: [] };
  
  const lines = content.split('\n');
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check for code block start
    if (line.startsWith('```html:preview') || line.startsWith('```jsx:react')) {
      // Extract code block
      const isPreview = line.startsWith('```html:preview');
      const type = isPreview ? 'preview' : 'react';
      let code = '';
      i++;
      
      while (i < lines.length && !lines[i].startsWith('```')) {
        code += lines[i] + '\n';
        i++;
      }
      
      // Store the example
      currentSection.examples.push({ type, code: code.trim() });
      
      // Check if next block is the corresponding react/preview block
      if (i + 1 < lines.length && lines[i + 1].trim() === '') {
        i++; // Skip empty line
        const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
        if ((isPreview && nextLine.startsWith('```jsx:react')) || 
            (!isPreview && nextLine.startsWith('```html:preview'))) {
          i++; // Move to next code block
          continue;
        }
      }
      
      // If we have both preview and react examples, create section
      if (currentSection.examples.length > 0) {
        sections.push(currentSection);
        currentSection = { text: '', examples: [] };
      }
    } else {
      currentSection.text += line + '\n';
    }
    
    i++;
  }
  
  // Add last section
  if (currentSection.text.trim() || currentSection.examples.length > 0) {
    sections.push(currentSection);
  }
  
  return sections;
}

function generateTabs(examples) {
  if (examples.length === 0) return '';
  
  const previewExample = examples.find(ex => ex.type === 'preview');
  const reactExample = examples.find(ex => ex.type === 'react');
  
  let tabs = '<Tabs items={[\'Preview\', \'Web Component\', \'React\']}>\n';
  
  // Preview tab
  tabs += '  <Tab value="Preview">\n';
  tabs += '    ```tsx\n';
  if (previewExample) {
    tabs += previewExample.code.split('\n').map(line => '    ' + line).join('\n') + '\n';
  }
  tabs += '    ```\n';
  tabs += '  </Tab>\n';
  
  // Web Component tab (same as preview)
  tabs += '  <Tab value="Web Component">\n';
  tabs += '    ```html\n';
  if (previewExample) {
    tabs += previewExample.code.split('\n').map(line => '    ' + line).join('\n') + '\n';
  }
  tabs += '    ```\n';
  tabs += '  </Tab>\n';
  
  // React tab
  tabs += '  <Tab value="React">\n';
  tabs += '    ```tsx\n';
  if (reactExample) {
    // Clean up React code formatting
    let reactCode = reactExample.code;
    
    // Ensure imports are on separate lines
    reactCode = reactCode.replace(/import\s+(.+?)\s+from\s+['"](.+?)['"]/g, (match) => {
      return match + '\n';
    });
    
    // Clean up any compressed JSX
    reactCode = reactCode.replace(/const App = \(\) => \(/g, 'const App = () => (\n  ');
    reactCode = reactCode.replace(/\); ```$/g, '\n);');
    
    tabs += reactCode.split('\n').map(line => '    ' + line).join('\n') + '\n';
  }
  tabs += '    ```\n';
  tabs += '  </Tab>\n';
  
  tabs += '</Tabs>';
  
  return tabs;
}

function processContent(content, componentName) {
  // Convert callouts first
  content = convertCallouts(content);
  
  // Handle {% raw %} and {% endraw %} blocks
  content = content.replace(/{% raw %}/g, '').replace(/{% endraw %}/g, '');
  
  // Extract and convert code blocks
  const sections = extractCodeBlocks(content);
  
  let mdxContent = '';
  
  for (const section of sections) {
    // Add the text content
    mdxContent += section.text.trim() + '\n\n';
    
    // Add tabs if there are examples
    if (section.examples.length > 0) {
      mdxContent += generateTabs(section.examples) + '\n\n';
    }
  }
  
  // Clean up extra newlines
  mdxContent = mdxContent.replace(/\n{3,}/g, '\n\n').trim();
  
  return mdxContent;
}

function getComponentClassName(componentName) {
  // Convert kebab-case to PascalCase with Nu prefix
  const parts = componentName.split('-');
  return 'Nu' + parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

function convertFile(filename) {
  const componentName = path.basename(filename, '.md');
  const inputPath = path.join(DOCS_DIR, filename);
  const outputPath = path.join(OUTPUT_DIR, `${componentName}.mdx`);
  
  console.log(`Converting ${filename}...`);
  
  try {
    const content = fs.readFileSync(inputPath, 'utf8');
    const { frontmatter, content: mainContent } = extractFrontmatter(content);
    
    // Process the content
    let mdxContent = processContent(mainContent, componentName);
    
    // Get component class name
    const componentClassName = getComponentClassName(componentName);
    const componentPath = `./src/components/${componentName}/${componentName}.component.ts`;
    
    // Build the MDX file
    let output = '---\n';
    output += `title: ${frontmatter.title || componentName}\n`;
    if (frontmatter.description) {
      output += `description: ${frontmatter.description}\n`;
    }
    output += '---\n\n';
    
    // Add imports
    output += "import { Tabs, Tab } from 'fumadocs-ui/components/tabs';\n";
    output += "import { Callout } from 'fumadocs-ui/components/callout';\n";
    output += "import { AutoTypeTable } from 'fumadocs-typescript/ui';\n\n";
    
    // Add the main content
    output += mdxContent;
    
    // Add Properties section if not already present
    if (!mdxContent.includes('## Properties')) {
      output += '\n\n## Properties\n\n';
      output += `<AutoTypeTable path="${componentPath}" name="${componentClassName}" />\n`;
    }
    
    // Ensure Properties section uses AutoTypeTable
    output = output.replace(
      /## Properties[\s\S]*?(?=##|$)/,
      `## Properties\n\n<AutoTypeTable path="${componentPath}" name="${componentClassName}" />\n\n`
    );
    
    fs.writeFileSync(outputPath, output);
    console.log(`✓ Converted ${filename} to ${componentName}.mdx`);
    
  } catch (error) {
    console.error(`✗ Error converting ${filename}:`, error.message);
  }
}

// Get all markdown files
const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} markdown files to convert\n`);

// Convert each file
files.forEach(convertFile);

console.log('\nConversion complete!');