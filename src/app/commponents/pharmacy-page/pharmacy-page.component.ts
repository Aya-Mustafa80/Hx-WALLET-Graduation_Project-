import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css'],
})
export class PharmacyPageComponent implements OnInit {
  constructor(private auth: AuthService) {}
  PatientSSn = '';
  PHX: any = {};
  prescsWithDetails=[];
  clickedPrescWithDetails={};
  spanRequired = false;
  search = true; //true
  log = false; //false
  ngOnInit(): void {}

  Search() {
    if (this.PatientSSn != '') {
      this.getPatientHX();
      this.search = false;
      this.log = true;
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
//this return all prscs belongs to specefic user
getPresscs() {
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

//this show clicked prescription
ShowPresc(item: any) {
  console.log(item);
  this.auth.getPrescriptionByID(item.ID).subscribe(
    (res) => {
      console.log(res);
      this.clickedPrescWithDetails = res;
    },
    (err) => {}
  );
}

}
