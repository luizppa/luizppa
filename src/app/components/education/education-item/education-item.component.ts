import { Component, Input, OnInit } from '@angular/core';
import { EducationItem } from 'src/app/interfaces/education';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input()
  public education_item: EducationItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
