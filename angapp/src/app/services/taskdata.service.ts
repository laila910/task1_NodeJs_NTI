import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  data: any;


  constructor(private _http: HttpClient) { }
  getAllRoles(): Observable<any> {
    return this._http.get('http://medical.mind-techs.com/api/auth/loadRoles/1')
  }
  getProvider(id: any): Observable<any> {
    return this._http.get(`http://medical.mind-techs.com/api/auth/LoadProviders/${id}/0/10`)
  }
}
