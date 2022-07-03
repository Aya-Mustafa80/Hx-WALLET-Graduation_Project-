import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User, UserLog } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /*  successpopUP = false; */
  UserLOg: UserLog = {
    userName: '',
    password: '',
  };
  loginUSerData: User = {
    userName: '',
    password: undefined,
    grant_type: 'password',
  };
  frmRegister: FormGroup | undefined;
  constructor(
    private _fb: FormBuilder,
    private info: AuthService,
    private _router: Router
  ) {}
  body = new URLSearchParams();
  ngOnInit(): void {}
  onSubmit() {}
  /*   loginPopUP() {
    this.successpopUP = true;
    var myTimeOut = setTimeout(() => {
      this.successpopUP = false;
    }, 1500);
  } */
  loginuser() {
    this.body.set('userName', this.loginUSerData.userName);
    this.body.set('password', this.loginUSerData.password);
    this.body.set('grant_type', 'password');
    /* local storage */
    /* this.UserLOg.userName = this.loginUSerData.userName;
    this.UserLOg.password = this.loginUSerData.password;
    localStorage.setItem('myObject', JSON.stringify(this.UserLOg));
    console.log(localStorage.getItem('myObject')); */
    /*  */
    this.info.loginuser(this.body).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        // if(res.userType == 'patient'){
        //   this._router.navigate(['/Patient_page']);
        // }
        this._router.navigate(['/Patient_page']);
      },
      (err) => console.log(err)
    );
  }
}
