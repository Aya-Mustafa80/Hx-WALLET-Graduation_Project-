import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUSerData: User = {
    userName: '',
    password: undefined,
    grant_type: "password"
  };
  loginData = new FormData();
  frmRegister: FormGroup | undefined;
  constructor(private _fb: FormBuilder, private info: AuthService, private _router: Router) { }

  ngOnInit(): void { }

  onSubmit() { }
  loginuser() {
    this.loginData.append('userName', this.loginUSerData.userName)
    this.loginData.append('password', this.loginUSerData.password)
    this.loginData.append('grant_type', this.loginUSerData.grant_type)
    this.info.loginuser(this.loginData).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this._router.navigate(['/Patient_page'])
    }, err => console.log(err)
    )
  }
}
