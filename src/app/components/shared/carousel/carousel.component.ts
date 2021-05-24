import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  trigger,
} from '@angular/animations';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/interfaces/project';
import { CarouselAnimationState } from 'src/app/enums/carousel-animation-state';
import { desktop_animation_time, desktop_carousel_animation, mobile_animation_time, mobile_carousel_animation } from 'src/app/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('desktop_view_state', desktop_carousel_animation),
    trigger('mobile_view_state', mobile_carousel_animation),
  ],
})
export class CarouselComponent implements OnInit {
  private enabled: boolean = true;
  private current_item: number = 0;
  private screen_width: number = 0;

  public right_icon = faCaretRight;
  public left_icon = faCaretLeft;

  @Input()
  public items: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.screen_width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event) {
    this.screen_width = window.innerWidth;
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
      const animation_time = this.display_desktop() ? desktop_animation_time : mobile_animation_time;
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
      const animation_time = this.display_desktop() ? desktop_animation_time : mobile_animation_time;
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

  public display_desktop(){
    return this.screen_width >= 1160;
  }

}
