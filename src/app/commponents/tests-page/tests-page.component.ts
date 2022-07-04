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
  PatientSSn = '';
  PHX: any = {};
  spanRequired = false;
  Tests = [1, 2, 3, 4];
  tests=[];

  test: LoadTest = {
    TestName: '',
    TestImage: '',
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

  addTest() {
    console.log(this.test.TestName)
    this.auth.loadTest(this.test).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

//return all tests from DB for dropdown list
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

}
