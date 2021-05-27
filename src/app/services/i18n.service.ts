import { Injectable } from '@angular/core';
import i18next, { TFunction } from 'i18next';
import { environment } from 'src/environments/environment';
import * as resources from '../i18n';

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
      resources,
    }, (_err, t) => {
      this.translator = t;
    });
  }

  private validate_lang(lang: string){
    const valid_langs = Object.keys(resources);
    if(valid_langs.includes(lang)) {
      return lang;
    }
    else {
      return 'en';
    }
  }

  public switch_language(lang: string) {
    this.lang = this.validate_lang(lang);
    i18next.changeLanguage(this.lang, (_err, t) => {
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