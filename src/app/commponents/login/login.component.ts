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
  U: any = {};
  userData = { SSN: '', Role: '', Name: '', pss: '' };
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
  getTypeuser() {
    this.info.getTypeuser(this.loginUSerData.userName).subscribe(
      (res) => {
        console.log(res);
        this.U = res;
        this.userData.Name = this.U.Name;
        this.userData.Role = this.U.Role;
        this.userData.SSN = this.U.SSN;
        localStorage.setItem('currentUser', JSON.stringify(this.userData));
      },
      (err) => console.log(err)
    );
    var retrievedObject = localStorage.getItem('currentUser');
    console.log(retrievedObject);

    this.loginuser();
  }

  loginuser() {
    this.body.set('userName', this.loginUSerData.userName);
    this.body.set('password', this.loginUSerData.password);
    this.body.set('grant_type', 'password');
    this.info.loginuser(this.body).subscribe(
      (res) => {
        localStorage.setItem("ssn",this.userData.SSN)
        localStorage.setItem('token', res.token);
        console.log(res);

        /*  var temp = JSON.parse(localStorage.getItem('currentUser') || '{}');
        var u = JSON.parse(temp);
         */
        if (this.U.Role == 'patient') {
          this._router.navigate(['/Patient_page']);
        } else if (this.U.Role == 'doctor') {
          this._router.navigate(['/Doc_page']);
        } else if (this.U.Role == 'pharmacy') {
          this._router.navigate(['/Pharmacy_page']);
        } else if (this.U.Role == 'testlab') {
          this._router.navigate(['/Tests_page']);
        } else if (this.U.Role == 'xraylab') {
          this._router.navigate(['/XRays_page']);
        }
      },
      (err) => console.log(err)
    );
  }
}
