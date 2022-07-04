import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
})
export class PatientPageComponent implements OnInit {
  constructor(private auth: AuthService) {
    /* this.getAllPres(); */
  }
  Prescription: any[] = [];
  MTeats = [];
  MXRays = [];
  clickedPresc={};
  clickedTest={};
  clickedXray={};
  public objP: any = {};
  public Drugss: any = {};
  
  public objT: any = {};
  /*//////////////////////////////////////////////////////// */
  ngOnInit(): void {}
  Name = '';
  Age = '';
  Contient = 'Prescriptions';
  Detail = 'Prescription';
  flag1 = false;
  flag2 = false;
  TestXRaysOnly = false;
  /* // */
  Prescription_page = true;
  Detail_Prescription = true;
  Content_Prescription = true;
  Notification_Prescription = true;
  /* // */
  MedicalTest_page = false;
  Result_Tests = false;
  Detail_Tests = false;
  Content_Tests = false;
  Notification_Tests = false;
  /* // */
  MedicalXRay_page = false;
  Result_XRay = false;
  Detail_XRays = false;
  Content_XRays = false;
  Notification_XRays = false;
  /* // */
  ChoosePrescription() {
    var Prescrip = document.getElementById('tap-1');
    Prescrip?.setAttribute('class', 'clicked');
    var test = document.getElementById('tap-2');
    test?.setAttribute('class', '');
    var XRay = document.getElementById('tap-3');
    XRay?.setAttribute('class', '');
    var detailcon = document.getElementById('detailCon');
    detailcon?.setAttribute('class', 'detail');
    this.TestXRaysOnly = false;
    this.Prescription_page = true;
    this.Detail_Prescription = true;
    this.Content_Prescription = true;
    this.Notification_Prescription = true;
    /*  */
    this.MedicalTest_page = false;
    this.Result_Tests = false;
    this.Detail_Tests = false;
    this.Content_Tests = false;
    this.Notification_Tests = false;
    /*  */
    this.MedicalXRay_page = false;
    this.Result_XRay = false;
    this.Detail_XRays = false;
    this.Content_XRays = false;
    this.Notification_XRays = false;
    /*  */
    this.Contient = 'Prescriptions';
    this.Detail = 'Prescription';
  }
  ChooseTests() {
    var Prescrip = document.getElementById('tap-1');
    Prescrip?.setAttribute('class', '');
    var test = document.getElementById('tap-2');
    test?.setAttribute('class', 'clicked');
    var XRay = document.getElementById('tap-3');
    XRay?.setAttribute('class', '');
    var detailcon = document.getElementById('detailCon');
    detailcon?.setAttribute('class', 'detailTR');
    this.TestXRaysOnly = true;
    this.Prescription_page = false;
    this.Detail_Prescription = false;
    this.Content_Prescription = false;
    this.Notification_Prescription = false;
    /*  */
    this.MedicalTest_page = true;
    this.Result_Tests = true;
    this.Detail_Tests = true;
    this.Content_Tests = true;
    this.Notification_Tests = true;
    /*  */
    this.MedicalXRay_page = false;
    this.Result_XRay = false;
    this.Detail_XRays = false;
    this.Content_XRays = false;
    this.Notification_XRays = false;
    /*  */
    this.Contient = 'Medical Tests';
    this.Detail = 'Test';
  }
  ChooseXRays() {
    var Prescrip = document.getElementById('ap-1');
    Prescrip?.setAttribute('class', '');
    var test = document.getElementById('tap-2');
    test?.setAttribute('class', '');
    var XRay = document.getElementById('tap-3');
    XRay?.setAttribute('class', 'clicked');
    var detailcon = document.getElementById('detailCon');
    detailcon?.setAttribute('class', 'detailTR');
    this.TestXRaysOnly = true;
    this.Prescription_page = false;
    this.Detail_Prescription = false;
    this.Content_Prescription = false;
    this.Notification_Prescription = false;
    /*  */
    this.MedicalTest_page = false;
    this.Result_Tests = false;
    this.Detail_Tests = false;
    this.Content_Tests = false;
    this.Notification_Tests = false;
    /*  */
    this.MedicalXRay_page = true;
    this.Result_XRay = true;
    this.Detail_XRays = true;
    this.Content_XRays = true;
    this.Notification_XRays = true;
    /*  */
    this.Contient = 'Medical X-Rays ';
    this.Detail = 'X-Ray';
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
  //all prescriptions of the user 
  /* getAllPres() {
    Pssn=localStorage.getItem("ssn");
    this.auth.getAllPrescOfUser(Pssn).subscribe(
      (res: any) => {
        this.Prescription = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  } */

  //all tests of the user 
  /* getAllTests() {
    this.auth.getAllTestscOfUser(//here the ssn that return from token when yousef make it ).subscribe(
      (res: any) => {
        this.MTeats = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  } */

  //all xrays of the user 
 /*  getAllPres() {
    this.auth.getAllXraysOfUser(//here the ssn that return from token when yousef make it ).subscribe(
      (res: any) => {
        this.MXRays = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  } */

//this show clicked prescription
  ShowPresc(item: any) {
    console.log(item);
    this.auth.getPrescriptionByID(item.ID).subscribe(
      (res) => {
        console.log(res);
        this.clickedPresc = res;
      },
      (err) => {}
    );
  }
//this show clicked test
  ShowTest(item: any) {
    console.log(item);
    this.auth.getTestByID(item.ID).subscribe(
      (res) => {
        console.log(res);
        this.clickedTest = res;
      },
      (err) => {}
    );
  }
//this show clicked xray
  ShowXRay(item: any) {
    console.log(item);
    this.auth.getXrayByID(item.ID).subscribe(
      (res) => {
        console.log(res);
        this.clickedXray = res;
      },
      (err) => {}
    );
  }
}
