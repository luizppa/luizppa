import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public email_icon = faEnvelope;
  public linkedin_icon = faLinkedin;
  public github_icon = faGithub;

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
  }

}
