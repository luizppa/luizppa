import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-github-name',
  templateUrl: './github-name.component.html',
  styleUrls: ['./github-name.component.css']
})
export class GithubNameComponent implements OnInit {
  @Input()
  public profile_url: string | undefined = "";
  @Input()
  public name: string | undefined = "";
  @Input()
  public login: string | undefined = "";
  public github_icon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
