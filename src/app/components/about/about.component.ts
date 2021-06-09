import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/enums/theme';
import { Profile } from 'src/app/interfaces/profile';
import { I18nService } from 'src/app/services/i18n.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public theme = Theme.DARK;
  public profile: Profile | null = null;

  constructor(public i18n: I18nService, private profile_service: ProfileService) { }

  ngOnInit(): void {
    this.get_profile();
  }

  private get_profile(){
    this.profile_service.get_profile((profile) => {
      this.profile = profile;
    })
  }

}
