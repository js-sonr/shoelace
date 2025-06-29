---
meta:
  title: Carousel Item
  description: A carousel item represent a slide within a carousel.
layout: component
---

```html:preview
<nu-carousel pagination>
  <nu-carousel-item>
    <img
      alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </nu-carousel-item>
  <nu-carousel-item>
    <img
      alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </nu-carousel-item>
  <nu-carousel-item>
    <img
      alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </nu-carousel-item>
  <nu-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
      src="/assets/examples/carousel/field.jpg"
    />
  </nu-carousel-item>
  <nu-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
      src="/assets/examples/carousel/valley.jpg"
    />
  </nu-carousel-item>
</nu-carousel>
```

```jsx:react
import SlCarousel from '@onsonr/nebula/dist/react/carousel';
import SlCarouselItem from '@onsonr/nebula/dist/react/carousel-item';

const App = () => (
  <NuCarousel pagination>
    <NuCarouselItem>
      <img
        alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </NuCarouselItem>
    <NuCarouselItem>
      <img
        alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </NuCarouselItem>
    <NuCarouselItem>
      <img
        alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </NuCarouselItem>
    <NuCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
        src="/assets/examples/carousel/field.jpg"
      />
    </NuCarouselItem>
    <NuCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
        src="/assets/examples/carousel/valley.jpg"
      />
    </NuCarouselItem>
  </NuCarousel>
);
```

:::tip
Additional demonstrations can be found in the [carousel examples](/components/carousel).
:::
