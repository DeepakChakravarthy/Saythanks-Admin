import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private _http: HttpClient) { }

  api!:string;
  userType:string='';

  UsersgetData(){
    this.api='https://apisaythanks.azurewebsites.net/api/Inbox';
    return this._http.get<any>(this.api)
  }
  NotesgetData(){
    this.api='https://apisaythanks.azurewebsites.net/api/Note';
    return this._http.get<any>(this.api)
  }
}
