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
import SlTag from '@sonr.io/nebula/dist/react/tag';

const App = () => (
  <>
    <NuTag variant="primary">Primary</NuTag>
    <NuTag variant="success">Success</NuTag>
    <NuTag variant="neutral">Neutral</NuTag>
    <NuTag variant="warning">Warning</NuTag>
    <NuTag variant="danger">Danger</NuTag>
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
import SlTag from '@sonr.io/nebula/dist/react/tag';

const App = () => (
  <>
    <NuTag size="small">Small</NuTag>
    <NuTag size="medium">Medium</NuTag>
    <NuTag size="large">Large</NuTag>
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
import SlTag from '@sonr.io/nebula/dist/react/tag';

const App = () => (
  <>
    <NuTag size="small" pill>
      Small
    </NuTag>
    <NuTag size="medium" pill>
      Medium
    </NuTag>
    <NuTag size="large" pill>
      Large
    </NuTag>
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
    transition: var(--nu-transition-medium) opacity;
  }
</style>
```

```jsx:react
import SlTag from '@sonr.io/nebula/dist/react/tag';

const css = `
  .tags-removable sl-tag {
    transition: var(--nu-transition-medium) opacity;
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
        <NuTag size="small" removable onSlRemove={handleRemove}>
          Small
        </NuTag>

        <NuTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </NuTag>

        <NuTag size="large" removable onSlRemove={handleRemove}>
          Large
        </NuTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
