import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
})
export class PatientPageComponent implements OnInit {
  constructor() {}

  Prescription = [
    {
      ID: '025',
      Date: '5/6/2019',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D3',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '857',
      Date: '10/9/2019',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '951',
      Date: '22/1/2020',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D3',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '542',
      Date: '8/9/2020',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '961',
      Date: '2/12/2020',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '079',
      Date: '4/4/2021',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '135',
      Date: '15/6/2021',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D3',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '102',
      Date: '20/8/2021',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '987',
      Date: '20/2/2022',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D3',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '192',
      Date: '20/8/2021',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '101',
      Date: '20/2/2022',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D3',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
    {
      ID: '333',
      Date: '20/2/2022',
      Drugs: [
        {
          DrugName: 'D1',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D2',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
        {
          DrugName: 'D3',
          DrugDose: '15ml',
          DrugDates: 'Morning before eating',
        },
      ],
    },
  ];
  MTeats = [
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
  ];
  MXRays = [
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
    { Name: '', Date: '', Result: '', LabName: '', LabAdress: '' },
  ];
  public objP: any = {};
  public Drugss: any = {};
  ShowPresc(el: object) {
    this.objP = el;
    this.Drugss = this.objP.Drugs;
  }
  public objT: any = {};
  ShowTest(ell: object) {
    this.objT = ell;
  }
  public objXR: any = {};
  ShowXRay(ele: object) {
    this.objXR = ele;
  }
  /*//////////////////////////////////////////////////////// */
  ngOnInit(): void {}
  Name = '';
  Age = '';
  Contient = 'Prescriptions';
  Detail = 'Prescription';
  flag1 = false;
  flag2 = false;
  /* // */
  Prescription_page = true;
  Result_Pescription = true;
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
    this.Prescription_page = true;
    this.Result_Pescription = true;
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
    this.Prescription_page = false;
    this.Result_Pescription = false;
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
    this.Prescription_page = false;
    this.Result_Pescription = false;
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
}
