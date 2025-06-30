---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

```html:preview
<nu-breadcrumb>
  <nu-breadcrumb-item>
    <nu-icon slot="prefix" name="house"></nu-icon>
    Home
  </nu-breadcrumb-item>
  <nu-breadcrumb-item>Clothing</nu-breadcrumb-item>
  <nu-breadcrumb-item>Shirts</nu-breadcrumb-item>
</nu-breadcrumb>
```

```jsx:react
import SlBreadcrumb from '@sonr.io/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@sonr.io/nebula/dist/react/breadcrumb-item';
import SlIcon from '@sonr.io/nebula/dist/react/icon';

const App = () => (
  <NuBreadcrumb>
    <NuBreadcrumbItem>
      <NuIcon slot="prefix" name="house"></NuIcon>
      Home
    </NuBreadcrumbItem>
    <NuBreadcrumbItem>Clothing</NuBreadcrumbItem>
    <NuBreadcrumbItem>Shirts</NuBreadcrumbItem>
  </NuBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
