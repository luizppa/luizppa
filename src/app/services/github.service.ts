import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { GithubUser } from '../interfaces/github-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public get_profile(user_name: string, callback: (user: GithubUser) => void, callback_error: () => void){
    this.http.get(`${environment.endpoint.github}users/${user_name}`).toPromise()
      .then((res) => {
        callback(res as GithubUser);
      })
      .catch(callback_error);
  }
}
