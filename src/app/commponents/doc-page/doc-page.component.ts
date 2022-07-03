import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css'],
})
export class DocPageComponent implements OnInit {
  constructor(private auth: AuthService) {}
  PatientSSn = '';

  PHX: any[] = [];
  meds: number[] = [1];
  ngOnInit(): void {}
  spanRequired = false; //false
  popup = false; //false
  search = true; //true
  DO = false; //false
  select = false; //false
  /* /////// */
  Pinfo = true; //true
  show = false; //true
  adddrug = false; //true
  addtests = false; //false
  addxrays = false; //false
  /* ///////// */
  showPrscription = false;
  showtest = false;
  showXRays = false;

  Start() {
    if (this.PatientSSn != '') {
      this.getPatientHX();
      this.search = false;
      this.DO = true;
      this.select = true;
    } else {
      this.spanRequired = true;
    }
  }
  PInfo() {
    this.Pinfo = true;
    this.show = false;
    this.adddrug = false;
    this.addtests = false;
    this.addxrays = false;
  }
  FuncShow() {
    this.Pinfo = false;
    this.show = true;
    this.adddrug = false;
    this.addtests = false;
    this.addxrays = false;
  }
  Drug() {
    this.Pinfo = false;
    this.show = false;
    this.adddrug = true;
    this.addtests = false;
    this.addxrays = false;
  }
  Tests() {
    this.Pinfo = false;
    this.show = false;
    this.adddrug = false;
    this.addtests = true;
    this.addxrays = false;
  }
  XRays() {
    this.Pinfo = false;
    this.show = false;
    this.adddrug = false;
    this.addtests = false;
    this.addxrays = true;
  }
  AddMed() {
    this.meds.push(1);
  }
  openForm1() {
    this.popup = true;
    this.showPrscription = true;
  }
  openForm2() {
    this.popup = true;
    this.showtest = true;
  }
  openForm3() {
    this.popup = true;
    this.showXRays = true;
  }
  closeForm() {
    this.popup = false;
    this.showPrscription = false;
    this.showXRays = false;
    this.showtest = false;
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
}
