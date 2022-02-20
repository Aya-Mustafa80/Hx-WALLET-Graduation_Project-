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
  loginUSerData:User={
    userName: '',
    password: undefined,
    grant_type :"password"
  };
  frmRegister: FormGroup | undefined;
  constructor(private _fb: FormBuilder,private info:AuthService,private _router:Router) {}

  ngOnInit(): void {}

  onSubmit() {}
  loginuser(){
      this.info.loginuser(this.loginUSerData)
      .subscribe(
        res=>{
          console.log(res);
          localStorage.setItem('token',res.token);
          this._router.navigate(['/Patient_page'])
        },
        err=>console.log(err)
      )
  }
}
