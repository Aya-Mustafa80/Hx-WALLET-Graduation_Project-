import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { OtherUsers } from 'src/app/classes/other-users';
import { RegisterDoctor } from 'src/app/classes/register-doctor';
import { RegisterPatient } from 'src/app/classes/register-patient';
//import { IPatient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // here we put API link
 // public url: string = '/assets/data.json';
 // url of login
private _loginURL = "http://youssefelsayed-001-site1.itempurl.com/login";
// url of patient
private _signuppURL = "http://youssefelsayed-001-site1.itempurl.com/reg/pat";
// url of doctor
private _signupdURL = "http://youssefelsayed-001-site1.itempurl.com/reg/doc";
// url of pharmacy
private _signupphURL = "http://youssefelsayed-001-site1.itempurl.com/reg/phar";
// url of test lab
private _signuptURL = "http://youssefelsayed-001-site1.itempurl.com/reg/tlab";
// url of x-ray lab
private _signupxURL = "http://youssefelsayed-001-site1.itempurl.com/reg/xlab";

  constructor(private http: HttpClient) { }
  // function for get all patient tests
  /* getAllpatients():Observable<IPatient[]>
 {
 return this.http.get<IPatient[]>(this.url);
 }*/

 loggedin(){
   return !!localStorage.getItem('taoken');
 }
 getToken(){
  return  localStorage.getItem('taoken');
 }

 signuppatient(patient:RegisterPatient){
  return this.http.post<any>(this._signuppURL, patient)
 }
 signupdoctor(doctor:RegisterDoctor){
  return this.http.post<any>(this._signupdURL, doctor)
 }
 signupphar(otheruser:OtherUsers){
  return this.http.post<any>(this._signupphURL, otheruser)
 }
 signuptlab(otheruser:OtherUsers){
  return this.http.post<any>(this._signuptURL, otheruser)
 }
 signupxlab(otheruser:OtherUsers){
  return this.http.post<any>(this._signupxURL, otheruser)
 }
JSON_to_URLEncoded(element:any,key:any,list:any){
  var list = list || [];
  if(typeof(element)=='object'){
    for (var idx in element)
      this.JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
  } else {
    list.push(key+'='+encodeURIComponent(element));
  }
  return list.join('&');
}

 headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
  loginuser(user: User) {
    return this.http.post<any>(this._loginURL, user)
  }
}
