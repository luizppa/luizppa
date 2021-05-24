import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
import { CarouselAnimationState } from "../enums/carousel-animation-state";

export const scale = {
    side: 0.8,
    out: 0.6,
    main: 1,
    out_right: 0.6,
};

export const desktop_animation_time = 1;

const state_styles = {
    side: style({
        transform: `translateX(1000px) scale(${scale.side})`,
        filter: 'blur(2px)',
        zIndex: 0,
        marginLeft: '0px',
    }),

    out: style({
        transform: `translateX(-1200px) scale(${scale.out})`,
        filter: 'blur(1px)',
        zIndex: -1,
    }),

    main: style({
        filter: 'blur(0px)',
        transform: `scale(${scale.main})`,
        zIndex: 1,
    }),

    out_right: style({
        transform: `translateX(120vw) scale(${scale.out_right})`,
        filter: 'blur(1px)',
    }),
};

export const desktop_carousel_animation = [
    state(CarouselAnimationState.MAIN, state_styles.main),

    state(CarouselAnimationState.SIDE, state_styles.side),

    state(CarouselAnimationState.OUT, state_styles.out),

    transition(`${CarouselAnimationState.MAIN} => ${CarouselAnimationState.OUT}`, [
        animate(`${desktop_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.OUT} => ${CarouselAnimationState.MAIN}`, [
        animate(`${desktop_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.OUT} => ${CarouselAnimationState.SIDE}`, [
        animate(`${desktop_animation_time}s ease-out`, keyframes([
        state_styles.out_right,
        state_styles.side,
        ]))
    ]),

    transition(`${CarouselAnimationState.SIDE} => ${CarouselAnimationState.OUT}`, [
        animate(`${desktop_animation_time}s ease-out`, keyframes([
        state_styles.side,
        state_styles.out_right,
        ]))
    ]),

    transition(`${CarouselAnimationState.SIDE} => ${CarouselAnimationState.MAIN}`, [
        animate(`${desktop_animation_time}s ease-out`)
    ]),

    transition(`${CarouselAnimationState.MAIN} => ${CarouselAnimationState.SIDE}`, [
        animate(`${desktop_animation_time}s ease-out`)
    ]),
];