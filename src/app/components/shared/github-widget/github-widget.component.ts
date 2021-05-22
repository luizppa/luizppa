import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { GithubService } from 'src/app/services/github.service';
import { GithubUser } from 'src/app/interfaces/github-user';

@Component({
  selector: 'app-github-widget',
  templateUrl: './github-widget.component.html',
  styleUrls: ['./github-widget.component.css']
})
export class GithubWidgetComponent implements OnInit {
  @Input()
  public profile: string = "";
  public user: GithubUser | null = null;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  private loadInfo(){
    this.github.get_profile(this.profile, (user) => {
      this.user = user;
    }, () => {
      console.log("error comunicating with github");
    });
  }

}
