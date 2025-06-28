---
meta:
  title: Tree Item
  description: A tree item serves as a hierarchical node that lives inside a tree.
layout: component
---

```html:preview
<nu-tree>
  <nu-tree-item>
    Item 1
    <nu-tree-item>Item A</nu-tree-item>
    <nu-tree-item>Item B</nu-tree-item>
    <nu-tree-item>Item C</nu-tree-item>
  </nu-tree-item>
  <nu-tree-item>Item 2</nu-tree-item>
  <nu-tree-item>Item 3</nu-tree-item>
</nu-tree>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree>
    <SlTreeItem>
      Item 1
      <SlTreeItem>Item A</SlTreeItem>
      <SlTreeItem>Item B</SlTreeItem>
      <SlTreeItem>Item C</SlTreeItem>
    </SlTreeItem>
    <SlTreeItem>Item 2</SlTreeItem>
    <SlTreeItem>Item 3</SlTreeItem>
  </SlTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html:preview
<nu-tree>
  <nu-tree-item>
    Item 1
    <nu-tree-item>
      Item A
      <nu-tree-item>Item Z</nu-tree-item>
      <nu-tree-item>Item Y</nu-tree-item>
      <nu-tree-item>Item X</nu-tree-item>
    </nu-tree-item>
    <nu-tree-item>Item B</nu-tree-item>
    <nu-tree-item>Item C</nu-tree-item>
  </nu-tree-item>
  <nu-tree-item>Item 2</nu-tree-item>
  <nu-tree-item>Item 3</nu-tree-item>
</nu-tree>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree>
    <SlTreeItem>
      Item 1
      <SlTreeItem>
        Item A
        <SlTreeItem>Item Z</SlTreeItem>
        <SlTreeItem>Item Y</SlTreeItem>
        <SlTreeItem>Item X</SlTreeItem>
      </SlTreeItem>
      <SlTreeItem>Item B</SlTreeItem>
      <SlTreeItem>Item C</SlTreeItem>
    </SlTreeItem>
    <SlTreeItem>Item 2</SlTreeItem>
    <SlTreeItem>Item 3</SlTreeItem>
  </SlTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html:preview
<nu-tree>
  <nu-tree-item selected>
    Item 1
    <nu-tree-item>Item A</nu-tree-item>
    <nu-tree-item>Item B</nu-tree-item>
    <nu-tree-item>Item C</nu-tree-item>
  </nu-tree-item>
  <nu-tree-item>Item 2</nu-tree-item>
  <nu-tree-item>Item 3</nu-tree-item>
</nu-tree>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree>
    <SlTreeItem selected>
      Item 1
      <SlTreeItem>Item A</SlTreeItem>
      <SlTreeItem>Item B</SlTreeItem>
      <SlTreeItem>Item C</SlTreeItem>
    </SlTreeItem>
    <SlTreeItem>Item 2</SlTreeItem>
    <SlTreeItem>Item 3</SlTreeItem>
  </SlTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html:preview
<nu-tree>
  <nu-tree-item expanded>
    Item 1
    <nu-tree-item expanded>
      Item A
      <nu-tree-item>Item Z</nu-tree-item>
      <nu-tree-item>Item Y</nu-tree-item>
      <nu-tree-item>Item X</nu-tree-item>
    </nu-tree-item>
    <nu-tree-item>Item B</nu-tree-item>
    <nu-tree-item>Item C</nu-tree-item>
  </nu-tree-item>
  <nu-tree-item>Item 2</nu-tree-item>
  <nu-tree-item>Item 3</nu-tree-item>
</nu-tree>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree>
    <SlTreeItem expanded>
      Item 1
      <SlTreeItem expanded>
        Item A
        <SlTreeItem>Item Z</SlTreeItem>
        <SlTreeItem>Item Y</SlTreeItem>
        <SlTreeItem>Item X</SlTreeItem>
      </SlTreeItem>
      <SlTreeItem>Item B</SlTreeItem>
      <SlTreeItem>Item C</SlTreeItem>
    </SlTreeItem>
    <SlTreeItem>Item 2</SlTreeItem>
    <SlTreeItem>Item 3</SlTreeItem>
  </SlTree>
);
```
