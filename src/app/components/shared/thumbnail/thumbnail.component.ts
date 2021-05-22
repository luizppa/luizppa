import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  public project: Project | null = null;

  constructor(private profile_service: ProfileService) { }

  ngOnInit(): void {
    this.profile_service.get_projects((projects) => this.project = projects[1]);
  }

}
