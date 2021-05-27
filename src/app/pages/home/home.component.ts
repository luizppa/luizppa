import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private i18n: I18nService, private activated: ActivatedRoute){}

  ngOnInit() {
    this.activated.paramMap.subscribe((params) => {
      this.i18n.switch_language(params.get('lang'))
    })
  }

}
