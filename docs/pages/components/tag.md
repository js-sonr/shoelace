---
meta:
  title: Tag
  description: Tags are used as labels to organize things or to indicate a selection.
layout: component
---

```html:preview
<nu-tag variant="primary">Primary</nu-tag>
<nu-tag variant="success">Success</nu-tag>
<nu-tag variant="neutral">Neutral</nu-tag>
<nu-tag variant="warning">Warning</nu-tag>
<nu-tag variant="danger">Danger</nu-tag>
```

```jsx:react
import SlTag from '@onsonr/nebula/dist/react/tag';

const App = () => (
  <>
    <SlTag variant="primary">Primary</SlTag>
    <SlTag variant="success">Success</SlTag>
    <SlTag variant="neutral">Neutral</SlTag>
    <SlTag variant="warning">Warning</SlTag>
    <SlTag variant="danger">Danger</SlTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html:preview
<nu-tag size="small">Small</nu-tag>
<nu-tag size="medium">Medium</nu-tag>
<nu-tag size="large">Large</nu-tag>
```

```jsx:react
import SlTag from '@onsonr/nebula/dist/react/tag';

const App = () => (
  <>
    <SlTag size="small">Small</SlTag>
    <SlTag size="medium">Medium</SlTag>
    <SlTag size="large">Large</SlTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html:preview
<nu-tag size="small" pill>Small</nu-tag>
<nu-tag size="medium" pill>Medium</nu-tag>
<nu-tag size="large" pill>Large</nu-tag>
```

```jsx:react
import SlTag from '@onsonr/nebula/dist/react/tag';

const App = () => (
  <>
    <SlTag size="small" pill>
      Small
    </SlTag>
    <SlTag size="medium" pill>
      Medium
    </SlTag>
    <SlTag size="large" pill>
      Large
    </SlTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html:preview
<div class="tags-removable">
  <nu-tag size="small" removable>Small</nu-tag>
  <nu-tag size="medium" removable>Medium</nu-tag>
  <nu-tag size="large" removable>Large</nu-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('sl-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable sl-tag {
    transition: var(--sl-transition-medium) opacity;
  }
</style>
```

```jsx:react
import SlTag from '@onsonr/nebula/dist/react/tag';

const css = `
  .tags-removable sl-tag {
    transition: var(--sl-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <SlTag size="small" removable onSlRemove={handleRemove}>
          Small
        </SlTag>

        <SlTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </SlTag>

        <SlTag size="large" removable onSlRemove={handleRemove}>
          Large
        </SlTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
