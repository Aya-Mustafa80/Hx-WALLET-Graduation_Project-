import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { OtherUsers } from 'src/app/classes/other-users';
import { RegisterDoctor } from 'src/app/classes/register-doctor';
import { RegisterPatient } from 'src/app/classes/register-patient';
import { Prescription } from 'src/app/classes/prescription';
import { MedicalXray } from 'src/app/classes/medical-xray';
import { MedicalTest } from 'src/app/classes/medical-test';
import { LoadTest } from 'src/app/classes/load-test';
import { LoadXray } from 'src/app/classes/load-xray';
//import { IPatient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // here we put API link
  // public url: string = '/assets/data.json';
  // url of login
  private _loginURL = 'http://hostserver-001-site1.ctempurl.com/login';
  // url of patient
  private _signuppURL = 'http://hostserver-001-site1.ctempurl.com/reg/pat';
  // url of doctor
  private _signupdURL = 'http://hostserver-001-site1.ctempurl.com/reg/doc';
  // url of pharmacy
  private _signupphURL = 'http://hostserver-001-site1.ctempurl.com/reg/phar';
  // url of test lab
  private _signuptURL = 'http://hostserver-001-site1.ctempurl.com/reg/tlab';
  // url of x-ray lab
  private _signupxURL = 'http://hostserver-001-site1.ctempurl.com/reg/xlab';

  private _addprescURL =
    'http://hostserver-001-site1.ctempurl.com/api/Prescriptions';
  private _loadtestURL = 'http://hostserver-001-site1.ctempurl.com/add/tst';
  private _loadxrayURL = 'http://hostserver-001-site1.ctempurl.com/add/xray';
  private _addtestURL = ''; /* doc */
  private _addxrayURL = ''; /* doc */

  constructor(private http: HttpClient) { }
  // function for get all patient tests
  /* getAllpatients():Observable<IPatient[]>
 {
 return this.http.get<IPatient[]>(this.url);
 }*/

  loggedin() {
    return !!localStorage.getItem('taoken');
  }
  getToken() {
    return localStorage.getItem('taoken');
  }

  signuppatient(patient: RegisterPatient) {
    return this.http.post<any>(this._signuppURL, patient);
  }
  signupdoctor(doctor: RegisterDoctor) {
    return this.http.post<any>(this._signupdURL, doctor);
  }
  signupphar(otheruser: OtherUsers) {
    return this.http.post<any>(this._signupphURL, otheruser);
  }
  signuptlab(otheruser: OtherUsers) {
    return this.http.post<any>(this._signuptURL, otheruser);
  }
  signupxlab(otheruser: OtherUsers) {
    return this.http.post<any>(this._signupxURL, otheruser);
  }
  JSON_to_URLEncoded(element: any, key: any, list: any) {
    var list = list || [];
    if (typeof element == 'object') {
      for (var idx in element)
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + '[' + idx + ']' : idx,
          list
        );
    } else {
      list.push(key + '=' + encodeURIComponent(element));
    }
    return list.join('&');
  }

  headers = new HttpHeaders().append(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );
  loginuser(user: any) {
    return this.http.post<any>(this._loginURL, user);
  }
  /*   getPatientHistory(ssn:string)
  {
    return this.http.get(
      `http://hostserver-001-site1.ctempurl.com/getPat/${ssn}`
    );
  } */
  /*   getPatientPrescription(ssn: string) {
    return this.http.get(
      `http://hostserver-001-site1.ctempurl.com/presp/${ssn}`
    );
  } */
  getPatient(ssn: string) {
    return this.http.get(
      `http://hostserver-001-site1.ctempurl.com/getPat/${ssn}`
    );
  }

  getDoctor(ssn: string) {
    return this.http.get(
      `http://hostserver-001-site1.ctempurl.com/get/doc/${ssn}`
    );
  }

  getPrescriptionByID(id: string) {
    return this.http.get(
      //this return only ID and date from DB ..replace it whith the link that return all details ofspecific presc in patient page
      `http://hostserver-001-site1.ctempurl.com/api/Prescriptions/${id}`
    );
  }
  //return all details ofspecific test in patient page
  getTestByID(id: string) {
    return this.http.get(``);
  }
  //return all details ofspecific xray in patient page
  getXrayByID(id: string) {
    return this.http.get(``);
  }

  //get all prescriptions of specific user with it's details
  getAllPrescOfUser(ssn: string) {
    return this.http.get(``);
  }
  //get all tests of specific user with it's details
  getAllTestscOfUser(ssn: string) {
    return this.http.get(``);
  }
  //get all xrays of specific user with it's details
  getAllXraysOfUser(ssn: string) {
    return this.http.get(``);
  }

  //get all drugs in DB
  getDrugs() {
    return this.http.get(`http://hostserver-001-site1.ctempurl.com/get/drugs`);
  }
  //get all tests stored in DB
  getAllTests() {
    return this.http.get(``);
  }
  //get all xrays stored in DB
  getAllXrays() {
    return this.http.get(``);
  }

  // add presc in doc_page
  addPrescription(pre: any) {
    return this.http.post<any>(this._addprescURL, pre);
  }
  // add test in doc_page
  addTest(t: MedicalTest) {
    return this.http.post<any>(this._addtestURL, MedicalTest);
  }
  // add xray in doc_page
  addXray(x: MedicalXray) {
    return this.http.post<any>(this._addxrayURL, MedicalXray);
  }
  //load test with image in test lab_page
  loadTest(t: LoadTest) {
    return this.http.post<any>(this._loadtestURL, LoadTest);
  }
  //load xray with image in xray lab_page
  loadXray(x: LoadXray) {
    return this.http.post<any>(this._loadxrayURL, LoadXray);
  }
}
