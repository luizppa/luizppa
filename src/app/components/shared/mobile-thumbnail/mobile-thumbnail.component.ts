import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-mobile-thumbnail',
  templateUrl: './mobile-thumbnail.component.html',
  styleUrls: ['./mobile-thumbnail.component.css']
})
export class MobileThumbnailComponent implements OnInit {
  @Input()
  public project: Project | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
