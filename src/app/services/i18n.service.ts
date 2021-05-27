import { Injectable } from '@angular/core';
import i18next, { TFunction } from 'i18next';
import { environment } from 'src/environments/environment';
import { pt, en } from '../i18n';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translator: TFunction;
  private lang: string = 'en';

  constructor() {
    this.init();
  }

  private init(){
    i18next.init({
      lng: this.lang,
      fallbackLng: 'en',
      debug: !environment.production,
      resources: {
        en,
        pt,
      }
    }, (_err, t) => {
      this.translator = t;
    });
  }

  public switch_language(lang: string) {
    this.lang = lang;
    i18next.changeLanguage(lang, (_err, t) => {
      this.translator = t;
    })
  }

  public translate(tx: string) {
    return this.translator(tx);
  }

  public get_language(){
    return this.lang;
  }
}