import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/enums/theme';
import { Experience } from 'src/app/interfaces/experience';
import { I18nService } from 'src/app/services/i18n.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  public theme = Theme.DARK;
  public experiences: Experience[] = [];


  constructor(private profile_service: ProfileService, public i18n: I18nService) { }

  ngOnInit(): void {
    this.get_experiences();
  }

  private get_experiences(){
    this.profile_service.get_experiences((experiences) => {
      this.experiences = experiences;
    });
  }

}
