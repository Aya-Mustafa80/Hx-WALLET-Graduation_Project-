import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private info:AuthService ,private _router:Router) {}


  canActivate():boolean{
    if(this.info.loggedin()){
      return true;
    }
    else  {
      this._router.navigate(['/Login']);
      return false;
    }
  }
  
}
