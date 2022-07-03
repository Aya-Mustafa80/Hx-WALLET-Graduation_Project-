import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Prescription } from 'src/app/classes/prescription';
@Component({
  selector: 'app-med-form',
  templateUrl: './med-form.component.html',
  styleUrls: ['./med-form.component.css'],
})
export class MedFormComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.getDrugs();
  }
  presc: Prescription = {
    FormOfMedicine: '',
    Strength: '',
    MethodOfIntake: '',
    Quantity: '',
    When: '',
    OtherInstructions: '',
    StartOn: '',
    Till: '',
  };
  dos: number[] = [1];
  drugs: any = {};
  ngOnInit(): void {}
  AddDosage() {
    this.dos.push(1);
  }
  //this retrn all drugs in DB for dropdown list
  getDrugs() {
    this.auth.getDrugs().subscribe(
      (res: any) => {
        this.drugs = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //add prescription to patient
  addPresc() {
    this.auth.addPrescription(this.presc).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
