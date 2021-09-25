import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<any> {
    // return this._http.get('https://jsonplaceholder.typicode.com/posts')
    return this._http.get(' http://medical.mind-techs.com/api/auth/loadRoles/1')

  }

  getSinglePost(id: any): Observable<any> {
    // return this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return this._http.get(`http://medical.mind-techs.com/api/auth/LoadProviders/${id}/0/2
`)
  }
}
