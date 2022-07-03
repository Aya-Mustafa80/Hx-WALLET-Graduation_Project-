import { Component, OnInit } from '@angular/core';
import { OtherUsers } from 'src/app/classes/other-users';
import { RegisterDoctor } from 'src/app/classes/register-doctor';
import { RegisterPatient } from 'src/app/classes/register-patient';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  patientuser: RegisterPatient = {
    name: '',
    id: '',
    phone: '',
    address: '',
    email: '',
    age: undefined,
    password: '',
    confirmpassword: '',
  };
  doctoruser: RegisterDoctor = {
    name: '',
    id: undefined,
    phone: '',
    specialty: undefined,
    email: '',
    address: undefined,
    password: '',
    confirmpassword: undefined,
  };
  otheruser: OtherUsers = {
    name: '',
    id: undefined,
    phone: '',
    email: undefined,
    address: '',
    password: undefined,
    confirmpassword: '',
  };

  constructor(private info: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  F1 = true;
  F2 = false;
  F3 = false;
  F4 = false;
  F5 = false;
  successpopUP = false;
  Patient() {
    this.F1 = true;
    this.F2 = false;
    this.F3 = false;
    this.F4 = false;
    this.F5 = false;
  }
  Doc() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = true;
    this.F3 = false;
    this.F4 = false;
    this.F5 = false;
  }
  Pharmacy() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = false;
    this.F3 = true;
    this.F4 = false;
    this.F5 = false;
  }
  TestLab() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = false;
    this.F3 = false;
    this.F4 = true;
    this.F5 = false;
  }
  XRays() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = false;
    this.F3 = false;
    this.F4 = false;
    this.F5 = true;
  }

  signup() {
    if (this.F1 == true) {
      this.signuppatient();
      this.successpopUP = true;
      var myTimeOut = setTimeout(() => {
        this.successpopUP = false;
      }, 1500);
    } else if (this.F2 == true) {
      this.signupdoctor();
      this.successpopUP = true;
      var myTimeOut = setTimeout(() => {
        this.successpopUP = false;
      }, 1500);
    } else if (this.F3 == true) {
      this.signupphar();
      this.successpopUP = true;
      var myTimeOut = setTimeout(() => {
        this.successpopUP = false;
      }, 1500);
    } else if (this.F4 == true) {
      this.signuptlab();
      this.successpopUP = true;
      var myTimeOut = setTimeout(() => {
        this.successpopUP = false;
      }, 1500);
    } else {
      this.signupxlab();
      this.successpopUP = true;
      var myTimeOut = setTimeout(() => {
        this.successpopUP = false;
      }, 1500);
    }
  }
  signuppatient() {
    //console.log(this.patientuser);
    this.info.signuppatient(this.patientuser).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/Patient_page']);
      },
      (err) => console.log(err)
    );
  }
  signupdoctor() {
    this.info.signupdoctor(this.doctoruser).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
  }
  signupphar() {
    this.info.signupphar(this.otheruser).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
  }
  signuptlab() {
    this.info.signuptlab(this.otheruser).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
  }
  signupxlab() {
    this.info.signupxlab(this.otheruser).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => console.log(err)
    );
  }
}
