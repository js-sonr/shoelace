---
meta:
  title: Rating
  description: Ratings give users a way to quickly view and provide feedback.
layout: component
---

```html:preview
<nu-rating label="Rating"></nu-rating>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rating" />;
```

## Examples

### Labels

Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the `label` attribute.

```html:preview
<nu-rating label="Rate this component"></nu-rating>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rate this component" />;
```

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html:preview
<nu-rating label="Rating" max="3"></nu-rating>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rating" max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html:preview
<nu-rating label="Rating" precision="0.5" value="2.5"></nu-rating>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rating" precision={0.5} value={2.5} />;
```

### Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html:preview
<nu-rating label="Rating" style="--symbol-size: 2rem;"></nu-rating>
```

{% raw %}

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rating" style={{ '--symbol-size': '2rem' }} />;
```

{% endraw %}

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html:preview
<nu-rating label="Rating" readonly value="3"></nu-rating>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rating" readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html:preview
<nu-rating label="Rating" disabled value="3"></nu-rating>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => <NuRating label="Rating" disabled value={3} />;
```

### Detecting Hover

Use the `sl-hover` event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.

The event has a payload with `phase` and `value` properties. The `phase` property tells when hovering starts, moves to a new value, and ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.

```html:preview
<div class="detect-hover">
  <nu-rating label="Rating"></nu-rating>
  <span></span>
</div>

<script>
  const rating = document.querySelector('.detect-hover > sl-rating');
  const span = rating.nextElementSibling;
  const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];

  rating.addEventListener('sl-hover', event => {
    span.textContent = terms[event.detail.value];

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      span.textContent = '';
    }
  });
</script>

<style>
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--nu-border-radius-small);
    background: var(--nu-color-neutral-900);
    color: var(--nu-color-neutral-0);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import SlRating from '@sonr.io/nebula/dist/react/rating';

const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];
const css = `
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--nu-border-radius-small);
    background: var(--nu-color-neutral-900);
    color: var(--nu-color-neutral-0);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
`;

function handleHover(event) {
  rating.addEventListener('sl-hover', event => {
    setFeedback(terms[event.detail.value]);

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      setFeedback('');
    }
  });
}

const App = () => {
  const [feedback, setFeedback] = useState(true);

  return (
    <>
      <div class="detect-hover">
        <NuRating label="Rating" onSlHover={handleHover} />
        <span>{feedback}</span>
      </div>
      <style>{css}</style>
    </>
  );
};
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html:preview
<nu-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></nu-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<nu-icon name="heart-fill"></nu-icon>';
</script>
```

{% raw %}

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

const App = () => (
  <NuRating
    label="Rating"
    getSymbol={() => '<nu-icon name="heart-fill"></nu-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }}
  />
);
```

{% endraw %}

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html:preview
<nu-rating label="Rating" class="rating-emojis"></nu-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<nu-icon name="${icons[value - 1]}"></nu-icon>`;
  };
</script>
```

```jsx:react
import SlRating from '@sonr.io/nebula/dist/react/rating';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<nu-icon name="${icons[value - 1]}"></nu-icon>`;
}

const App = () => <NuRating label="Rating" getSymbol={getSymbol} />;
```
