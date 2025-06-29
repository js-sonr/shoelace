---
meta:
  title: Breadcrumb
  description: Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
layout: component
---

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html:preview
<nu-breadcrumb>
  <nu-breadcrumb-item>Catalog</nu-breadcrumb-item>
  <nu-breadcrumb-item>Clothing</nu-breadcrumb-item>
  <nu-breadcrumb-item>Women's</nu-breadcrumb-item>
  <nu-breadcrumb-item>Shirts &amp; Tops</nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import SlBreadcrumb from '@onsonr/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@onsonr/nebula/dist/react/breadcrumb-item';

const App = () => (
  <NuBreadcrumb>
    <NuBreadcrumbItem>Catalog</NuBreadcrumbItem>
    <NuBreadcrumbItem>Clothing</NuBreadcrumbItem>
    <NuBreadcrumbItem>Women's</NuBreadcrumbItem>
    <NuBreadcrumbItem>Shirts &amp; Tops</NuBreadcrumbItem>
  </NuBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html:preview
<nu-breadcrumb>
  <nu-breadcrumb-item href="https://example.com/home">Homepage</nu-breadcrumb-item>

  <nu-breadcrumb-item href="https://example.com/home/services">Our Services</nu-breadcrumb-item>

  <nu-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</nu-breadcrumb-item>

  <nu-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import SlBreadcrumb from '@onsonr/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@onsonr/nebula/dist/react/breadcrumb-item';

const App = () => (
  <NuBreadcrumb>
    <NuBreadcrumbItem href="https://example.com/home">Homepage</NuBreadcrumbItem>

    <NuBreadcrumbItem href="https://example.com/home/services">Our Services</NuBreadcrumbItem>

    <NuBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</NuBreadcrumbItem>

    <NuBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</NuBreadcrumbItem>
  </NuBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html:preview
<nu-breadcrumb>
  <nu-icon name="dot" slot="separator"></nu-icon>
  <nu-breadcrumb-item>First</nu-breadcrumb-item>
  <nu-breadcrumb-item>Second</nu-breadcrumb-item>
  <nu-breadcrumb-item>Third</nu-breadcrumb-item>
</nu-breadcrumb>

<br />

<nu-breadcrumb>
  <nu-icon name="arrow-right" slot="separator"></nu-icon>
  <nu-breadcrumb-item>First</nu-breadcrumb-item>
  <nu-breadcrumb-item>Second</nu-breadcrumb-item>
  <nu-breadcrumb-item>Third</nu-breadcrumb-item>
</nu-breadcrumb>

<br />

<nu-breadcrumb>
  <span slot="separator">/</span>
  <nu-breadcrumb-item>First</nu-breadcrumb-item>
  <nu-breadcrumb-item>Second</nu-breadcrumb-item>
  <nu-breadcrumb-item>Third</nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import '@onsonr/nebula/dist/components/icon/icon.js';
import SlBreadcrumb from '@onsonr/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@onsonr/nebula/dist/react/breadcrumb-item';

const App = () => (
  <>
    <NuBreadcrumb>
      <nu-icon name="dot" slot="separator" />
      <NuBreadcrumbItem>First</NuBreadcrumbItem>
      <NuBreadcrumbItem>Second</NuBreadcrumbItem>
      <NuBreadcrumbItem>Third</NuBreadcrumbItem>
    </NuBreadcrumb>

    <br />

    <NuBreadcrumb>
      <nu-icon name="arrow-right" slot="separator" />
      <NuBreadcrumbItem>First</NuBreadcrumbItem>
      <NuBreadcrumbItem>Second</NuBreadcrumbItem>
      <NuBreadcrumbItem>Third</NuBreadcrumbItem>
    </NuBreadcrumb>

    <br />

    <NuBreadcrumb>
      <span slot="separator">/</span>
      <NuBreadcrumbItem>First</NuBreadcrumbItem>
      <NuBreadcrumbItem>Second</NuBreadcrumbItem>
      <NuBreadcrumbItem>Third</NuBreadcrumbItem>
    </NuBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html:preview
<nu-breadcrumb>
  <nu-breadcrumb-item>
    <nu-icon slot="prefix" name="house"></nu-icon>
    Home
  </nu-breadcrumb-item>
  <nu-breadcrumb-item>Articles</nu-breadcrumb-item>
  <nu-breadcrumb-item>Traveling</nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import SlBreadcrumb from '@onsonr/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@onsonr/nebula/dist/react/breadcrumb-item';
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <NuBreadcrumb>
    <NuBreadcrumbItem>
      <NuIcon slot="prefix" name="house" />
      Home
    </NuBreadcrumbItem>
    <NuBreadcrumbItem>Articles</NuBreadcrumbItem>
    <NuBreadcrumbItem>Traveling</NuBreadcrumbItem>
  </NuBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html:preview
<nu-breadcrumb>
  <nu-breadcrumb-item>Documents</nu-breadcrumb-item>
  <nu-breadcrumb-item>Policies</nu-breadcrumb-item>
  <nu-breadcrumb-item>
    Security
    <nu-icon slot="suffix" name="shield-lock"></nu-icon>
  </nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import SlBreadcrumb from '@onsonr/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@onsonr/nebula/dist/react/breadcrumb-item';
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <NuBreadcrumb>
    <NuBreadcrumbItem>Documents</NuBreadcrumbItem>
    <NuBreadcrumbItem>Policies</NuBreadcrumbItem>
    <NuBreadcrumbItem>
      Security
      <NuIcon slot="suffix" name="shield-lock"></NuIcon>
    </NuBreadcrumbItem>
  </NuBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html:preview
<nu-breadcrumb>
  <nu-breadcrumb-item>Homepage</nu-breadcrumb-item>
  <nu-breadcrumb-item>Our Services</nu-breadcrumb-item>
  <nu-breadcrumb-item>Digital Media</nu-breadcrumb-item>
  <nu-breadcrumb-item>
    Web Design
    <nu-dropdown slot="suffix">
      <nu-button slot="trigger" size="small" circle>
        <nu-icon label="More options" name="three-dots"></nu-icon>
      </nu-button>
      <nu-menu>
        <nu-menu-item type="checkbox" checked>Web Design</nu-menu-item>
        <nu-menu-item type="checkbox">Web Development</nu-menu-item>
        <nu-menu-item type="checkbox">Marketing</nu-menu-item>
      </nu-menu>
    </nu-dropdown>
  </nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import {
  SlBreadcrumb,
  SlBreadcrumbItem,
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@onsonr/nebula/dist/react';

const App = () => (
  <NuBreadcrumb>
    <NuBreadcrumbItem>Homepage</NuBreadcrumbItem>
    <NuBreadcrumbItem>Our Services</NuBreadcrumbItem>
    <NuBreadcrumbItem>Digital Media</NuBreadcrumbItem>
    <NuBreadcrumbItem>
      Web Design
      <NuDropdown slot="suffix">
        <NuButton slot="trigger" size="small" circle>
          <NuIcon label="More options" name="three-dots"></NuIcon>
        </NuButton>
        <NuMenu>
          <NuMenuItem type="checkbox" checked>
            Web Design
          </NuMenuItem>
          <NuMenuItem type="checkbox">Web Development</NuMenuItem>
          <NuMenuItem type="checkbox">Marketing</NuMenuItem>
        </NuMenu>
      </NuDropdown>
    </NuBreadcrumbItem>
  </NuBreadcrumb>
);
```
