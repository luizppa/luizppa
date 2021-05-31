import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-stat',
  templateUrl: './github-stat.component.html',
  styleUrls: ['./github-stat.component.css']
})
export class GithubStatComponent implements OnInit {
  @Input()
  stat: number = 0;
  @Input()
  label: string = "";
  @Input()
  link: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
