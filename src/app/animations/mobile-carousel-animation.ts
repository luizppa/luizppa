import { animate, state, style, transition } from "@angular/animations";
import { CarouselAnimationState } from "../enums/carousel-animation-state";

export const mobile_animation_time = 1;

const state_styles = {
    side: style({
        transform: `translateX(120vw)`,
        zIndex: 0,
        opacity: 0,
    }),

    out: style({
        transform: `translateX(-120vw)`,
        zIndex: -1,
        opacity: 0,
    }),

    main: style({
        zIndex: 1,
    }),
};

export const mobile_carousel_animation = [
    state(CarouselAnimationState.MAIN, state_styles.main),

    state(CarouselAnimationState.SIDE, state_styles.side),

    state(CarouselAnimationState.OUT, state_styles.out),

    transition(`${CarouselAnimationState.MAIN} => ${CarouselAnimationState.OUT}`, [
        animate(`${mobile_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.OUT} => ${CarouselAnimationState.MAIN}`, [
        animate(`${mobile_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.OUT} => ${CarouselAnimationState.SIDE}`, [
        animate(`${mobile_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.SIDE} => ${CarouselAnimationState.OUT}`, [
        animate(`${mobile_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.SIDE} => ${CarouselAnimationState.MAIN}`, [
        animate(`${mobile_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.MAIN} => ${CarouselAnimationState.SIDE}`, [
        animate(`${mobile_animation_time}s ease-out`)
    ]),
];