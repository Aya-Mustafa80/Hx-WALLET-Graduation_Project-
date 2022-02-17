import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
})
export class PatientPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Name = '';
  Age = '';
  Contient = 'Prescriptions';
  flag1 = false;
  flag2 = false;
  /* // */
  Prescription_page = true;
  Result_Pescription = true;
  Detail_Prescription = true;
  /* // */
  MedicalTest_page = false;
  Result_Tests = false;
  Detail_Tests = false;
  /* // */
  MedicalXRay_page = false;
  Result_XRay = false;
  Detail_XRays = false;
  /* // */
  ChoosePrescription() {
    this.Prescription_page = true;
    this.Result_Pescription = true;
    this.Detail_Prescription = true;
    this.MedicalTest_page = false;
    this.Result_Tests = false;
    this.Detail_Tests = false;
    this.MedicalXRay_page = false;
    this.Result_XRay = false;
    this.Detail_XRays = false;
  }
  ChooseTests() {
    var Prescrip = document.getElementById('tap-1');
    Prescrip?.setAttribute('class', '');
    this.Prescription_page = false;
    this.Result_Pescription = false;
    this.Detail_Prescription = false;
    this.MedicalTest_page = true;
    this.Result_Tests = true;
    this.Detail_Tests = true;
    this.MedicalXRay_page = false;
    this.Result_XRay = false;
    this.Detail_XRays = false;
  }
  ChooseXRays() {
    var Prescrip = document.getElementById('ap-1');
    Prescrip?.setAttribute('class', '');
    this.Prescription_page = false;
    this.Result_Pescription = false;
    this.Detail_Prescription = false;
    this.MedicalTest_page = false;
    this.Result_Tests = false;
    this.Detail_Tests = false;
    this.MedicalXRay_page = true;
    this.Result_XRay = true;
    this.Detail_XRays = true;
  }

  /* SEARCH */
  SearchClick1() {
    if (this.flag1 == false) {
      var search1 = document.getElementsByClassName('search p1')[0];
      search1?.setAttribute('class', 'search p1 open');
      this.flag1 = true;
    } else {
      var search1 = document.getElementsByClassName('search p1 open')[0];
      search1?.setAttribute('class', 'search p1');
      this.flag1 = false;
    }
  }
  SearchClick2() {
    if (this.flag2 == false) {
      var search2 = document.getElementsByClassName('search p2')[0];
      search2?.setAttribute('class', 'search p2 open');
      this.flag2 = true;
    } else {
      var search2 = document.getElementsByClassName('search p2 open')[0];
      search2?.setAttribute('class', 'search p2');
      this.flag2 = false;
    }
  }
}
