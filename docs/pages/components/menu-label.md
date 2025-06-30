---
meta:
  title: Menu Label
  description: Menu labels are used to describe a group of menu items.
layout: component
---

```html:preview
<nu-menu style="max-width: 200px;">
  <nu-menu-label>Fruits</nu-menu-label>
  <nu-menu-item value="apple">Apple</nu-menu-item>
  <nu-menu-item value="banana">Banana</nu-menu-item>
  <nu-menu-item value="orange">Orange</nu-menu-item>
  <nu-divider></nu-divider>
  <nu-menu-label>Vegetables</nu-menu-label>
  <nu-menu-item value="broccoli">Broccoli</nu-menu-item>
  <nu-menu-item value="carrot">Carrot</nu-menu-item>
  <nu-menu-item value="zucchini">Zucchini</nu-menu-item>
</nu-menu>
```

{% raw %}

```jsx:react
import SlDivider from '@sonr.io/nebula/dist/react/divider';
import SlMenu from '@sonr.io/nebula/dist/react/menu';
import SlMenuLabel from '@sonr.io/nebula/dist/react/menu-label';
import SlMenuItem from '@sonr.io/nebula/dist/react/menu-item';

const App = () => (
  <NuMenu style={{ maxWidth: '200px' }}>
    <NuMenuLabel>Fruits</NuMenuLabel>
    <NuMenuItem value="apple">Apple</NuMenuItem>
    <NuMenuItem value="banana">Banana</NuMenuItem>
    <NuMenuItem value="orange">Orange</NuMenuItem>
    <NuDivider />
    <NuMenuLabel>Vegetables</NuMenuLabel>
    <NuMenuItem value="broccoli">Broccoli</NuMenuItem>
    <NuMenuItem value="carrot">Carrot</NuMenuItem>
    <NuMenuItem value="zucchini">Zucchini</NuMenuItem>
  </NuMenu>
);
```

{% endraw %}
