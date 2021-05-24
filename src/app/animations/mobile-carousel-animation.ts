import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
import { CarouselAnimationState } from "../enums/carousel-animation-state";

export const mobile_animation_time = 1;

const state_styles = {
    side: style({
        transform: `translateX(100vw)`,
    }),

    out: style({
        transform: `translateX(-100vw)`,
        filter: 'blur(1px)',
    }),

    main: style({
        // ...
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