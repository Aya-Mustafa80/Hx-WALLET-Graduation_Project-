import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadXray } from 'src/app/classes/load-xray';
@Component({
  selector: 'app-x-rays-page',
  templateUrl: './x-rays-page.component.html',
  styleUrls: ['./x-rays-page.component.css'],
})
export class XRaysPageComponent implements OnInit {
  show = false;
  constructor(private auth: AuthService) {}
  PatientSSn='';
  PHX: any ={};
  xrays=[];
  
    xray: LoadXray = {
    XrayName: '',
    XrayImage: ''
    };

  ngOnInit(): void {}
  logBody() {
    this.show = true;
  }

  getPatientHX() {
    this.auth.getPatient(this.PatientSSn).subscribe(
      (res: any) => {
        this.PHX = res;
        console.log(res);
        console.log(this.PHX);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addxray() {
    this.auth.loadXray(this.xray).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  getxrays() {
    this.auth.getAllXrays().subscribe(
      (res: any) => {
        this.xrays = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
