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
import SlBreadcrumb from '@onsonr/nebula/dist/react/breadcrumb';
import SlBreadcrumbItem from '@onsonr/nebula/dist/react/breadcrumb-item';
import SlIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="house"></SlIcon>
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
