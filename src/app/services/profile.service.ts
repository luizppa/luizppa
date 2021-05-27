import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { Experience } from '../interfaces/experience';
import { I18nService } from './i18n.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private i18n: I18nService) { }

  private get_endpoint(){
    return `${environment.endpoint.profile_api}${this.i18n.get_language()}`;
  }

  public get_education(callback: (skills: any) => void){
    this.http.get(`${this.get_endpoint()}/education.json`).toPromise().then((response) => {
      console.log(response);
    });
  }

  public get_experiences(callback: (skills: Experience[]) => void){
    this.http.get(`${this.get_endpoint()}/experiences.json`).toPromise().then((response) => {
      callback(response as Experience[]);
    });
  }

  public get_skills(callback: (skills: any) => void){
    this.http.get(`${this.get_endpoint()}/skills.json`).toPromise().then((response) => {
      console.log(response);
    });
  }

  public get_projects(callback: (skills: Project[]) => void){
    this.http.get(`${this.get_endpoint()}/projects.json`).toPromise().then((response) => {
      callback(response as Project[]);
    });
  }
}
