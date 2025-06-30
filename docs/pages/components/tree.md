---
meta:
  title: Tree
  description: Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
layout: component
---

```html:preview
<nu-tree>
  <nu-tree-item>
    Deciduous
    <nu-tree-item>Birch</nu-tree-item>
    <nu-tree-item>
      Maple
      <nu-tree-item>Field maple</nu-tree-item>
      <nu-tree-item>Red maple</nu-tree-item>
      <nu-tree-item>Sugar maple</nu-tree-item>
    </nu-tree-item>
    <nu-tree-item>Oak</nu-tree-item>
  </nu-tree-item>

  <nu-tree-item>
    Coniferous
    <nu-tree-item>Cedar</nu-tree-item>
    <nu-tree-item>Pine</nu-tree-item>
    <nu-tree-item>Spruce</nu-tree-item>
  </nu-tree-item>

  <nu-tree-item>
    Non-trees
    <nu-tree-item>Bamboo</nu-tree-item>
    <nu-tree-item>Cactus</nu-tree-item>
    <nu-tree-item>Fern</nu-tree-item>
  </nu-tree-item>
</nu-tree>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@sonr.io/nebula/dist/react/tree';
import SlTreeItem from '@sonr.io/nebula/dist/react/tree-item';

const App = () => (
  <NuTree>
    <NuTreeItem>
      Deciduous
      <NuTreeItem>Birch</NuTreeItem>
      <NuTreeItem>
        Maple
        <NuTreeItem>Field maple</NuTreeItem>
        <NuTreeItem>Red maple</NuTreeItem>
        <NuTreeItem>Sugar maple</NuTreeItem>
      </NuTreeItem>
      <NuTreeItem>Oak</NuTreeItem>
    </NuTreeItem>

    <NuTreeItem>
      Coniferous
      <NuTreeItem>Cedar</NuTreeItem>
      <NuTreeItem>Pine</NuTreeItem>
      <NuTreeItem>Spruce</NuTreeItem>
    </NuTreeItem>

    <NuTreeItem>
      Non-trees
      <NuTreeItem>Bamboo</NuTreeItem>
      <NuTreeItem>Cactus</NuTreeItem>
      <NuTreeItem>Fern</NuTreeItem>
    </NuTreeItem>
  </NuTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html:preview
<nu-select id="selection-mode" value="single" label="Selection">
  <nu-option value="single">Single</nu-option>
  <nu-option value="multiple">Multiple</nu-option>
  <nu-option value="leaf">Leaf</nu-option>
</nu-select>

<br />

<nu-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('sl-change', () => {
    tree.querySelectorAll('sl-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@sonr.io/nebula/dist/react/tree';
import SlTreeItem from '@sonr.io/nebula/dist/react/tree-item';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <NuSelect label="Selection" value={selection} onSlChange={event => setSelection(event.target.value)}>
        <NuMenuItem value="single">single</NuMenuItem>
        <NuMenuItem value="multiple">multiple</NuMenuItem>
        <NuMenuItem value="leaf">leaf</NuMenuItem>
      </NuSelect>

      <br />

      <NuTree selection={selection}>
        <NuTreeItem>
          Item 1
          <NuTreeItem>
            Item A
            <NuTreeItem>Item Z</NuTreeItem>
            <NuTreeItem>Item Y</NuTreeItem>
            <NuTreeItem>Item X</NuTreeItem>
          </NuTreeItem>
          <NuTreeItem>Item B</NuTreeItem>
          <NuTreeItem>Item C</NuTreeItem>
        </NuTreeItem>
        <NuTreeItem>Item 2</NuTreeItem>
        <NuTreeItem>Item 3</NuTreeItem>
      </NuTree>
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html:preview
<nu-tree class="tree-with-lines">
  <nu-tree-item expanded>
    Deciduous
    <nu-tree-item>Birch</nu-tree-item>
    <nu-tree-item expanded>
      Maple
      <nu-tree-item>Field maple</nu-tree-item>
      <nu-tree-item>Red maple</nu-tree-item>
      <nu-tree-item>Sugar maple</nu-tree-item>
    </nu-tree-item>
    <nu-tree-item>Oak</nu-tree-item>
  </nu-tree-item>

  <nu-tree-item>
    Coniferous
    <nu-tree-item>Cedar</nu-tree-item>
    <nu-tree-item>Pine</nu-tree-item>
    <nu-tree-item>Spruce</nu-tree-item>
  </nu-tree-item>

  <nu-tree-item>
    Non-trees
    <nu-tree-item>Bamboo</nu-tree-item>
    <nu-tree-item>Cactus</nu-tree-item>
    <nu-tree-item>Fern</nu-tree-item>
  </nu-tree-item>
</nu-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

{% raw %}

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@sonr.io/nebula/dist/react/tree';
import SlTreeItem from '@sonr.io/nebula/dist/react/tree-item';

const App = () => (
  <NuTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <NuTreeItem expanded>
      Deciduous
      <NuTreeItem>Birch</NuTreeItem>
      <NuTreeItem expanded>
        Maple
        <NuTreeItem>Field maple</NuTreeItem>
        <NuTreeItem>Red maple</NuTreeItem>
        <NuTreeItem>Sugar maple</NuTreeItem>
      </NuTreeItem>
      <NuTreeItem>Oak</NuTreeItem>
    </NuTreeItem>

    <NuTreeItem>
      Coniferous
      <NuTreeItem>Cedar</NuTreeItem>
      <NuTreeItem>Pine</NuTreeItem>
      <NuTreeItem>Spruce</NuTreeItem>
    </NuTreeItem>

    <NuTreeItem>
      Non-trees
      <NuTreeItem>Bamboo</NuTreeItem>
      <NuTreeItem>Cactus</NuTreeItem>
      <NuTreeItem>Fern</NuTreeItem>
    </NuTreeItem>
  </NuTree>
);
```

{% endraw %}

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `sl-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html:preview
<nu-tree>
  <nu-tree-item lazy>Available Trees</nu-tree-item>
</nu-tree>

<script type="module">
  const lazyItem = document.querySelector('sl-tree-item[lazy]');

  lazyItem.addEventListener('sl-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('sl-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx:react
import SlTree from '@sonr.io/nebula/dist/react/tree';
import SlTreeItem from '@sonr.io/nebula/dist/react/tree-item';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <NuTree>
      <NuTreeItem lazy={lazy} onSlLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <NuTreeItem>{item}</NuTreeItem>
        ))}
      </NuTreeItem>
    </NuTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html:preview
<nu-tree class="custom-icons">
  <nu-icon name="plus-square" slot="expand-icon"></nu-icon>
  <nu-icon name="dash-square" slot="collapse-icon"></nu-icon>

  <nu-tree-item>
    Deciduous
    <nu-tree-item>Birch</nu-tree-item>
    <nu-tree-item>
      Maple
      <nu-tree-item>Field maple</nu-tree-item>
      <nu-tree-item>Red maple</nu-tree-item>
      <nu-tree-item>Sugar maple</nu-tree-item>
    </nu-tree-item>
    <nu-tree-item>Oak</nu-tree-item>
  </nu-tree-item>

  <nu-tree-item>
    Coniferous
    <nu-tree-item>Cedar</nu-tree-item>
    <nu-tree-item>Pine</nu-tree-item>
    <nu-tree-item>Spruce</nu-tree-item>
  </nu-tree-item>

  <nu-tree-item>
    Non-trees
    <nu-tree-item>Bamboo</nu-tree-item>
    <nu-tree-item>Cactus</nu-tree-item>
    <nu-tree-item>Fern</nu-tree-item>
  </nu-tree-item>
</nu-tree>

<style>
  .custom-icons sl-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx:react
import SlTree from '@sonr.io/nebula/dist/react/tree';
import SlTreeItem from '@sonr.io/nebula/dist/react/tree-item';

const App = () => (
  <NuTree>
    <NuIcon name="plus-square" slot="expand-icon"></NuIcon>
    <NuIcon name="dash-square" slot="collapse-icon"></NuIcon>

    <NuTreeItem>
      Deciduous
      <NuTreeItem>Birch</NuTreeItem>
      <NuTreeItem>
        Maple
        <NuTreeItem>Field maple</NuTreeItem>
        <NuTreeItem>Red maple</NuTreeItem>
        <NuTreeItem>Sugar maple</NuTreeItem>
      </NuTreeItem>
      <NuTreeItem>Oak</NuTreeItem>
    </NuTreeItem>

    <NuTreeItem>
      Coniferous
      <NuTreeItem>Cedar</NuTreeItem>
      <NuTreeItem>Pine</NuTreeItem>
      <NuTreeItem>Spruce</NuTreeItem>
    </NuTreeItem>

    <NuTreeItem>
      Non-trees
      <NuTreeItem>Bamboo</NuTreeItem>
      <NuTreeItem>Cactus</NuTreeItem>
      <NuTreeItem>Fern</NuTreeItem>
    </NuTreeItem>
  </NuTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html:preview
<nu-tree class="tree-with-icons">
  <nu-tree-item expanded>
    <nu-icon name="folder"></nu-icon>
    Documents

    <nu-tree-item>
      <nu-icon name="folder"> </nu-icon>
      Photos
      <nu-tree-item>
        <nu-icon name="image"></nu-icon>
        birds.jpg
      </nu-tree-item>
      <nu-tree-item>
        <nu-icon name="image"></nu-icon>
        kitten.jpg
      </nu-tree-item>
      <nu-tree-item>
        <nu-icon name="image"></nu-icon>
        puppy.jpg
      </nu-tree-item>
    </nu-tree-item>

    <nu-tree-item>
      <nu-icon name="folder"></nu-icon>
      Writing
      <nu-tree-item>
        <nu-icon name="file"></nu-icon>
        draft.txt
      </nu-tree-item>
      <nu-tree-item>
        <nu-icon name="file-pdf"></nu-icon>
        final.pdf
      </nu-tree-item>
      <nu-tree-item>
        <nu-icon name="file-bar-graph"></nu-icon>
        sales.xls
      </nu-tree-item>
    </nu-tree-item>
  </nu-tree-item>
</nu-tree>
```

```jsx:react
import SlIcon from '@sonr.io/nebula/dist/react/icon';
import SlTree from '@sonr.io/nebula/dist/react/tree';
import SlTreeItem from '@sonr.io/nebula/dist/react/tree-item';

const App = () => {
  return (
    <NuTree class="tree-with-icons">
      <NuTreeItem expanded>
        <NuIcon name="folder" />
        Root
        <NuTreeItem>
          <NuIcon name="folder" />
          Folder 1<NuTreeItem>
            <NuIcon name="files" />
            File 1 - 1
          </NuTreeItem>
          <NuTreeItem disabled>
            <NuIcon name="files" />
            File 1 - 2
          </NuTreeItem>
          <NuTreeItem>
            <NuIcon name="files" />
            File 1 - 3
          </NuTreeItem>
        </NuTreeItem>
        <NuTreeItem>
          <NuIcon name="files" />
          Folder 2<NuTreeItem>
            <NuIcon name="files" />
            File 2 - 1
          </NuTreeItem>
          <NuTreeItem>
            <NuIcon name="files" />
            File 2 - 2
          </NuTreeItem>
        </NuTreeItem>
        <NuTreeItem>
          <NuIcon name="files" />
          File 1
        </NuTreeItem>
      </NuTreeItem>
    </NuTree>
  );
};
```
