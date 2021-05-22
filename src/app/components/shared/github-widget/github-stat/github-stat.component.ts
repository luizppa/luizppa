import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-stat',
  templateUrl: './github-stat.component.html',
  styleUrls: ['./github-stat.component.css']
})
export class GithubStatComponent implements OnInit {
  @Input()
  stat: number | undefined = 0;
  @Input()
  label: string | undefined = "";
  @Input()
  link: string | undefined = "";

  constructor() { }

  ngOnInit(): void {
  }

}
