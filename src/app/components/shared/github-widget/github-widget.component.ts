import { Component, HostListener, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'

import { GithubService } from 'src/app/services/github.service';
import { GithubUser } from 'src/app/interfaces/github-user';
import { I18nService } from 'src/app/services/i18n.service';
import { GithubBoardOptions } from '@luizppa/ng-github-contributions';

@Component({
  selector: 'app-github-widget',
  templateUrl: './github-widget.component.html',
  styleUrls: ['./github-widget.component.css']
})
export class GithubWidgetComponent implements OnInit {
  @Input()
  public profile: string = "";
  public user: GithubUser = null;
  private screen_width: number = window.innerWidth;

  public githubBoardOptions: GithubBoardOptions = {
    cellSize: 15,
    weeksNumber: this.getWeeksNumber(window.innerWidth),
  }

  constructor(private github: GithubService, public i18n: I18nService) { }

  ngOnInit(): void {
    this.load_info();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event) {
    this.screen_width = window.innerWidth;
    const weeksNumber = this.getWeeksNumber();
    if(this.githubBoardOptions.weeksNumber !== weeksNumber){
      const newOptions: GithubBoardOptions = {}
      Object.assign(newOptions, this.githubBoardOptions);
      newOptions.weeksNumber = weeksNumber;
      this.githubBoardOptions = newOptions;
    }
  }

  private getWeeksNumber(width: number = this.screen_width): number{
    if(width >= 1080){
      return 53;
    }
    else if(width < 470){
      return 18;
    }
    else if(width < 580){
      return 24;
    }
    else if(width < 750){
      return 30;
    }
    else if(width < 880){
      return 40;
    }
    else if(width < 1080){
      return 45;
    }
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
