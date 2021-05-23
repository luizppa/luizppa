import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repo-stat',
  templateUrl: './repo-stat.component.html',
  styleUrls: ['./repo-stat.component.css']
})
export class RepoStatComponent implements OnInit {
  @Input()
  public name: string = "";
  @Input()
  public stat: number = 0;
  @Input()
  public icon: IconDefinition = faUser;

  constructor() { }

  ngOnInit(): void {
    
  }

}
