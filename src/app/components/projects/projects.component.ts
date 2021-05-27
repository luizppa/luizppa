import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { I18nService } from 'src/app/services/i18n.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(private profile_service: ProfileService, public i18n: I18nService) {}

  ngOnInit(): void {
    this.load_projects();
  }

  private load_projects(){
    this.profile_service.get_projects((projects) => this.projects = projects);
  }

}
