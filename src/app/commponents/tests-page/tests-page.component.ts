import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadTest } from 'src/app/classes/load-test';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.css'],
})
export class TestsPageComponent implements OnInit {
  show = false;
  constructor(private auth: AuthService) {}
  PatientSSn='';
  PHX: any ={};


  test: LoadTest = {
    TestName: '',
    TestImage: ''
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

  addTest() {
    this.auth.loadTest(this.test).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

}
