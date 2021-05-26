import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/enums/theme';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  public theme = Theme.DARK;

  constructor() { }

  ngOnInit(): void {
  }

}
