import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/enums/theme';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {
  @Input()
  public title: string = '';
  @Input()
  public description: string = '';
  @Input()
  public theme: string = Theme.LIGHT;

  constructor() { }

  ngOnInit(): void {
  }

  

}
