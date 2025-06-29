import type NuCarouselItem from '../components/carousel-item/carousel-item.js';
export type NuSlideChangeEvent = CustomEvent<{
    index: number;
    slide: NuCarouselItem;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'nu-slide-change': NuSlideChangeEvent;
    }
}
