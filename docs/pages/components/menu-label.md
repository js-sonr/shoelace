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
import SlDivider from '@onsonr/nebula/dist/react/divider';
import SlMenu from '@onsonr/nebula/dist/react/menu';
import SlMenuLabel from '@onsonr/nebula/dist/react/menu-label';
import SlMenuItem from '@onsonr/nebula/dist/react/menu-item';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuLabel>Fruits</SlMenuLabel>
    <SlMenuItem value="apple">Apple</SlMenuItem>
    <SlMenuItem value="banana">Banana</SlMenuItem>
    <SlMenuItem value="orange">Orange</SlMenuItem>
    <SlDivider />
    <SlMenuLabel>Vegetables</SlMenuLabel>
    <SlMenuItem value="broccoli">Broccoli</SlMenuItem>
    <SlMenuItem value="carrot">Carrot</SlMenuItem>
    <SlMenuItem value="zucchini">Zucchini</SlMenuItem>
  </SlMenu>
);
```

{% endraw %}
