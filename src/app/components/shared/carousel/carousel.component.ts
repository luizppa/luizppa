import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/interfaces/project';

export enum CarouselAnimationState {
  OUT = "OUT",
  SIDE = "SIDE",
  MAIN = "MAIN",
}

const scale = {
  side: 0.8,
  out: 0.6,
  main: 1,
  out_right: 0.6,
};

const animation_time = 1;

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
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('view_state', [
      state(CarouselAnimationState.MAIN, state_styles.main),

      state(CarouselAnimationState.SIDE, state_styles.side),

      state(CarouselAnimationState.OUT, state_styles.out),

      transition(`${CarouselAnimationState.MAIN} => ${CarouselAnimationState.OUT}`, [
        animate(`${animation_time}s ease-out`)
      ]),

      transition(`${CarouselAnimationState.OUT} => ${CarouselAnimationState.MAIN}`, [
        animate(`${animation_time}s ease-out`)
      ]),
      
      transition(`${CarouselAnimationState.OUT} => ${CarouselAnimationState.SIDE}`, [
        animate(`${animation_time}s ease-out`, keyframes([
          state_styles.out_right,
          state_styles.side,
        ]))
      ]),

      transition(`${CarouselAnimationState.SIDE} => ${CarouselAnimationState.OUT}`, [
        animate(`${animation_time}s ease-out`, keyframes([
          state_styles.side,
          state_styles.out_right,
        ]))
      ]),
      
      transition(`${CarouselAnimationState.SIDE} => ${CarouselAnimationState.MAIN}`, [
        animate(`${animation_time}s ease-out`)
      ]),

      transition(`${CarouselAnimationState.MAIN} => ${CarouselAnimationState.SIDE}`, [
        animate(`${animation_time}s ease-out`)
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  private enabled: boolean = true;
  private current_item: number = 0;

  public right_icon = faCaretRight;
  public left_icon = faCaretLeft;

  @Input()
  public items: Project[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public get_state(index: number){
    if(index === this.current_item){
      return CarouselAnimationState.MAIN;
    }
    if(index === this.current_item + 1 || (index === 0 && this.current_item === (this.items.length - 1))){
      return CarouselAnimationState.SIDE;
    }
    return CarouselAnimationState.OUT;
  }

  public next(){
    if(this.enabled){
      this.current_item++;
      if(this.current_item >= this.items.length){
        this.current_item = 0;
      }
      this.enabled = false;
      setTimeout(() => this.enabled = true, animation_time * 1000);
    }
  }

  public previous(){
    if(this.enabled){
      this.current_item--;
      if(this.current_item < 0){
        this.current_item = this.items.length - 1;
      }
      this.enabled = false;
      setTimeout(() => this.enabled = true, animation_time * 1000);
    }
  }

  public set_position(index: number){
    if(this.enabled){
      this.current_item = index;
    }
  }

  public is_current(index: number){
    return index === this.current_item;
  }

}
