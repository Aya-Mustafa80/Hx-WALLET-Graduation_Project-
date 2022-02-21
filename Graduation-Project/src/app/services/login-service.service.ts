import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public _loginurl:string='http://localhost:3000';

  constructor(private _http:HttpClient) { }
  loginfun(user: any){
    return this._http.post<any>(this._loginurl,user)
    }

}

