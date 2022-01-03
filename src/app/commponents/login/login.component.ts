import { Component, OnInit } from '@angular/core';
import { LoginUseres } from 'src/app/classes/login-useres';
import { LoginServiceService } from 'src/app/services/login-service.service';
import {  
  FormGroup,  
  FormBuilder  
} from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=new LoginUseres("","");
frmRegister: FormGroup | undefined;
  constructor(private _fb: FormBuilder,private _login: LoginServiceService) { }

  ngOnInit(): void {
  }

onSubmit(){
    this._login.loginfun(this.user).subscribe(
      Response=>console.log("successs login!",Response),
      error=>console.log("error",error)
    )
    }
  }

