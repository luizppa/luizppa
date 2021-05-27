import { AfterViewInit, Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
  }

}
