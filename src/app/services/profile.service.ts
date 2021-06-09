import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { Experience } from '../interfaces/experience';
import { I18nService } from './i18n.service';
import { environment } from 'src/environments/environment';
import { EducationItem } from '../interfaces/education';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private i18n: I18nService) { }

  private get_endpoint(){
    return `${environment.endpoint.profile_api}${this.i18n.get_language()}`;
  }

  public get_education(callback: (education: EducationItem[]) => void){
    this.http.get(`${this.get_endpoint()}/education.json`).toPromise().then((response) => {
      callback(response as EducationItem[]);
    });
  }

  public get_experiences(callback: (experiences: Experience[]) => void){
    this.http.get(`${this.get_endpoint()}/experiences.json`).toPromise().then((response) => {
      callback(response as Experience[]);
    });
  }

  public get_projects(callback: (projects: Project[]) => void){
    this.http.get(`${this.get_endpoint()}/projects.json`).toPromise().then((response) => {
      callback(response as Project[]);
    });
  }

  public get_profile(callback: (profile: Profile) => void){
    this.http.get(`${this.get_endpoint()}/profile.json`).toPromise().then((response) => {
      callback(response as Profile);
    });
  }
}
