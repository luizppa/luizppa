import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public get_education(callback: (skills: any) => void){
    this.http.get('https://luizppa-com.firebaseio.com/pt/education.json').toPromise().then((response) => {
      console.log(response);
    });
  }

  public get_experiences(callback: (skills: any) => void){
    this.http.get('https://luizppa-com.firebaseio.com/pt/experiences.json').toPromise().then((response) => {
      console.log(response);
    });
  }

  public get_skills(callback: (skills: any) => void){
    this.http.get('https://luizppa-com.firebaseio.com/pt/skills.json').toPromise().then((response) => {
      console.log(response);
    });
  }

  public get_projects(callback: (skills: Project[]) => void){
    this.http.get('https://luizppa-com.firebaseio.com/pt/projects.json').toPromise().then((response) => {
      callback(response as Project[]);
    });
  }
}