import { Component, Input, OnInit } from '@angular/core';
import { EducationItem } from 'src/app/interfaces/education';
import { Mark } from 'src/app/interfaces/mark';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public initial_date = new Date('06/01/2015').getTime();
  public final_date = new Date('06/01/2024').getTime();
  public current_date = new Date().getTime();
  private total_interval;

  @Input()
  public marks: Mark[] = [];

  constructor() { }

  ngOnInit(): void {
    this.total_interval = this.final_date - this.initial_date;
  }

  public get_start_distance(date: number) {
    return date > this.initial_date ? date - this.initial_date : 0;
  }

  public get_end_distance(date: number) {
    return date < this.initial_date ? this.final_date - date : 0;
  }

  public get_mark_position(mark: Mark){
    return `top: ${80 * this.calculate_position(mark.date) / 100}vh`;
  }

  private calculate_position(date: number){
    const mark_date = date > this.current_date ? this.current_date : date;
    const position = (this.get_start_distance(mark_date)/this.total_interval) * 100;
    return position;
  }

  public get_bar_color(){
    const colors = this.marks.map(mark => {

    })
  }

}
