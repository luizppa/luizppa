import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar, faCodeBranch, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { GithubRepo } from 'src/app/interfaces/github-repo';
import { GithubService } from 'src/app/services/github.service';

const langs = {
  "C++": {
    color: "#f34b7d",
  },
  "Ruby": {
    color: "#701516",
  },
  "JavaScript": {
    color: "#f1e05a",
  },
  "TypeScript": {
    color: "#2b7489",
  }
}

@Component({
  selector: 'app-github-repo-widget',
  templateUrl: './github-repo-widget.component.html',
  styleUrls: ['./github-repo-widget.component.css']
})
export class GithubRepoWidgetComponent implements OnInit {
  @Input()
  public user: string = "";
  @Input()
  public repo_name: string = "";
  public repo: GithubRepo | null = null;
  public github_icon = faGithub;
  public star_icon = faStar;
  public fork_icon = faCodeBranch;
  public issue_icon = faExclamationCircle;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.get_repo();
  }

  private get_repo(){
    this.github.get_repo(this.user, this.repo_name,
      (repo: GithubRepo) => {
        this.repo = repo;
      },
      () => console.log("erro")
    );
  }

  public get_link(stat: string){
    return `${this.repo.html_url}/${stat}`;
  }

  public get_lang_color(lang: string){
    return langs[lang].color;
  }

}
