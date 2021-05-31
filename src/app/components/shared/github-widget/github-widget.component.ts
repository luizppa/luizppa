import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'

import { GithubService } from 'src/app/services/github.service';
import { GithubUser } from 'src/app/interfaces/github-user';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-github-widget',
  templateUrl: './github-widget.component.html',
  styleUrls: ['./github-widget.component.css']
})
export class GithubWidgetComponent implements OnInit {
  @Input()
  public profile: string = "";
  public user: GithubUser = null;

  constructor(private github: GithubService, public i18n: I18nService) { }

  ngOnInit(): void {
    this.load_info();
  }

  private load_info(){
    this.github.get_profile(this.profile, (user) => {
      this.user = user;
    }, () => {
      console.log('error comunicating with github');
    });
  }

  public get_tab(tab: string){
    return `${this.user?.html_url}?tab=${tab}`;
  }

  public get_contributions_address(){
    return `${environment.endpoint.github_contributions_chart}${this.profile}`;
  }

}
