import { Component, Input, OnInit } from '@angular/core';
import { Prescription } from 'src/app/classes/prescription';
import { MedicalXray } from 'src/app/classes/medical-xray';
import { MedicalTest } from 'src/app/classes/medical-test';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
/* export class Drugs {
  public DrugName: string;
  public when: string;
  public Intake: string;
  public Quantity: string;
  public DuarationStart: string;
  public DuarationEnd: string;
  public OtherInstructions: string;
  public Strength: string;
} */
@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css'],
})
export class DocPageComponent implements OnInit {
  /* drugs_: Drugs[] = [
    {
      DrugName: '',
      when: '',
      Intake: '',
      Quantity: '',
      DuarationStart: '',
      DuarationEnd: '',
      OtherInstructions: '',
      Strength: '',
    },
  ]; */
  presc: Prescription = {
    patientSSN: '',
    doctorSSN: '',
    date: '',
    DrugsData: [
      {
        DrugName: '',
        when: '',
        Intake: '',
        Quantity: '',
        DurationStart: '',
        DurationEnd: '',
        OtherInstructions: '',
        strength: '',
      },
    ],
  };
  test: MedicalTest = {
    pssn: '',
    name: '',
  };
  xray: MedicalXray = {
    pssn: '',
    name: '',
  };
  dos: number[] = [1];
  drugs: any = {};
  tests: any = {};
  xrays: any = {};
  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.getDrugs();
    this.getTests();
    this.getxrays();
  }
  temp = '';
  u = '';

  PatientSSn = '';
  PHX: any = {};

  prescsWithDetails = [];
  meds: number[] = [1];
  prescription_form: FormGroup;
  ngOnInit(): void {
    this.prescription_form = this.fb.group({
      drugID: [''],
      date: new Date(),
      doctorSSN: '',
      patientSSN: '',
    });
  }
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
  /*   AddDosage() {
    this.drugs_.push({
      DrugName: '',
      when: '',
      Intake: '',
      Quantity: '',
      DuarationStart: '',
      DuarationEnd: '',
      OtherInstructions: '',
      Strength: '',
    });
  } */
  //this retrn all drugs in DB for dropdown list
  getDrugs() {
    this.auth.getDrugs().subscribe(
      (res: any) => {
        this.drugs = res;
        console.log('drugs', this.drugs);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //return all info of specific user
  getPatientHX() {
    this.auth.getPatient(this.PatientSSn).subscribe(
      (res: any) => {
        this.PHX = res;
        console.log(res);
        console.log(res.Patient_Xrays);
        console.log(res.Patirnt_Tests);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //this return all prscs belongs to specefic user
  getPresscs() {
    this.openForm1();
    this.auth.getAllPrescOfUser(this.PatientSSn).subscribe(
      (res: any) => {
        this.prescsWithDetails = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //this retrn all tests in DB for dropdown list
  getTests() {
    this.auth.getAllTests().subscribe(
      (res: any) => {
        this.tests = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //this retrn all xrays in DB for dropdown list
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
  //add prescription to patient
  addPresc() {
    this.presc.patientSSN = this.PatientSSn;
    this.presc.doctorSSN = '100';
    this.presc.date = '01/01/2022';
    console.log(this.presc);
    this.auth.addPrescription(this.presc).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
  addTest() {
    this.auth.addTest(this.test).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  addxray() {
    this.auth.addXray(this.xray).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
