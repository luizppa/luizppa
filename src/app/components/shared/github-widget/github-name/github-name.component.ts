import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-github-name',
  templateUrl: './github-name.component.html',
  styleUrls: ['./github-name.component.css']
})
export class GithubNameComponent implements OnInit {
  @Input()
  public profile_url: string = "";
  @Input()
  public name: string = "";
  @Input()
  public login: string = "";
  public github_icon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
