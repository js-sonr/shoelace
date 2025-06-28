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
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree>
    <SlTreeItem>
      Deciduous
      <SlTreeItem>Birch</SlTreeItem>
      <SlTreeItem>
        Maple
        <SlTreeItem>Field maple</SlTreeItem>
        <SlTreeItem>Red maple</SlTreeItem>
        <SlTreeItem>Sugar maple</SlTreeItem>
      </SlTreeItem>
      <SlTreeItem>Oak</SlTreeItem>
    </SlTreeItem>

    <SlTreeItem>
      Coniferous
      <SlTreeItem>Cedar</SlTreeItem>
      <SlTreeItem>Pine</SlTreeItem>
      <SlTreeItem>Spruce</SlTreeItem>
    </SlTreeItem>

    <SlTreeItem>
      Non-trees
      <SlTreeItem>Bamboo</SlTreeItem>
      <SlTreeItem>Cactus</SlTreeItem>
      <SlTreeItem>Fern</SlTreeItem>
    </SlTreeItem>
  </SlTree>
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
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <SlSelect label="Selection" value={selection} onSlChange={event => setSelection(event.target.value)}>
        <SlMenuItem value="single">single</SlMenuItem>
        <SlMenuItem value="multiple">multiple</SlMenuItem>
        <SlMenuItem value="leaf">leaf</SlMenuItem>
      </SlSelect>

      <br />

      <SlTree selection={selection}>
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
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <SlTreeItem expanded>
      Deciduous
      <SlTreeItem>Birch</SlTreeItem>
      <SlTreeItem expanded>
        Maple
        <SlTreeItem>Field maple</SlTreeItem>
        <SlTreeItem>Red maple</SlTreeItem>
        <SlTreeItem>Sugar maple</SlTreeItem>
      </SlTreeItem>
      <SlTreeItem>Oak</SlTreeItem>
    </SlTreeItem>

    <SlTreeItem>
      Coniferous
      <SlTreeItem>Cedar</SlTreeItem>
      <SlTreeItem>Pine</SlTreeItem>
      <SlTreeItem>Spruce</SlTreeItem>
    </SlTreeItem>

    <SlTreeItem>
      Non-trees
      <SlTreeItem>Bamboo</SlTreeItem>
      <SlTreeItem>Cactus</SlTreeItem>
      <SlTreeItem>Fern</SlTreeItem>
    </SlTreeItem>
  </SlTree>
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
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

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
    <SlTree>
      <SlTreeItem lazy={lazy} onSlLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <SlTreeItem>{item}</SlTreeItem>
        ))}
      </SlTreeItem>
    </SlTree>
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
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => (
  <SlTree>
    <SlIcon name="plus-square" slot="expand-icon"></SlIcon>
    <SlIcon name="dash-square" slot="collapse-icon"></SlIcon>

    <SlTreeItem>
      Deciduous
      <SlTreeItem>Birch</SlTreeItem>
      <SlTreeItem>
        Maple
        <SlTreeItem>Field maple</SlTreeItem>
        <SlTreeItem>Red maple</SlTreeItem>
        <SlTreeItem>Sugar maple</SlTreeItem>
      </SlTreeItem>
      <SlTreeItem>Oak</SlTreeItem>
    </SlTreeItem>

    <SlTreeItem>
      Coniferous
      <SlTreeItem>Cedar</SlTreeItem>
      <SlTreeItem>Pine</SlTreeItem>
      <SlTreeItem>Spruce</SlTreeItem>
    </SlTreeItem>

    <SlTreeItem>
      Non-trees
      <SlTreeItem>Bamboo</SlTreeItem>
      <SlTreeItem>Cactus</SlTreeItem>
      <SlTreeItem>Fern</SlTreeItem>
    </SlTreeItem>
  </SlTree>
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
import SlIcon from '@onsonr/nebula/dist/react/icon';
import SlTree from '@onsonr/nebula/dist/react/tree';
import SlTreeItem from '@onsonr/nebula/dist/react/tree-item';

const App = () => {
  return (
    <SlTree class="tree-with-icons">
      <SlTreeItem expanded>
        <SlIcon name="folder" />
        Root
        <SlTreeItem>
          <SlIcon name="folder" />
          Folder 1<SlTreeItem>
            <SlIcon name="files" />
            File 1 - 1
          </SlTreeItem>
          <SlTreeItem disabled>
            <SlIcon name="files" />
            File 1 - 2
          </SlTreeItem>
          <SlTreeItem>
            <SlIcon name="files" />
            File 1 - 3
          </SlTreeItem>
        </SlTreeItem>
        <SlTreeItem>
          <SlIcon name="files" />
          Folder 2<SlTreeItem>
            <SlIcon name="files" />
            File 2 - 1
          </SlTreeItem>
          <SlTreeItem>
            <SlIcon name="files" />
            File 2 - 2
          </SlTreeItem>
        </SlTreeItem>
        <SlTreeItem>
          <SlIcon name="files" />
          File 1
        </SlTreeItem>
      </SlTreeItem>
    </SlTree>
  );
};
```
