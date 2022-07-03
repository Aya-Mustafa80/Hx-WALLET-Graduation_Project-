import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css'],
})
export class TestFormComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.getTests();
  }
  tests: any = {};
  ngOnInit(): void {}
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
}
