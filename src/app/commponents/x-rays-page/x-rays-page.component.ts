import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadXray } from 'src/app/classes/load-xray';
@Component({
  selector: 'app-x-rays-page',
  templateUrl: './x-rays-page.component.html',
  styleUrls: ['./x-rays-page.component.css'],
})
export class XRaysPageComponent implements OnInit {
  constructor(private auth: AuthService) {}
  show = false;
  PatientSSn = '';
  PHX: any = {};
  spanRequired = false;
  Tests = [];
  xrays = [];
  xray: LoadXray = {
    pssn:'',
    name: '',
    image: '',
  };

  ngOnInit(): void {}
  logBody() {
    if (this.PatientSSn != '') {
      this.getPatientHX();
      this.show = true;
    } else {
      this.spanRequired = true;
    }
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
  xrayName='';
  xrayImage ='';
  addxray() {
    this.auth.loadXray({
      "pssn":this.PatientSSn,
      "name":this.xrayName,
      "image":this.xrayImage
  }).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  //return all xrays from DB for dropdown list
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
