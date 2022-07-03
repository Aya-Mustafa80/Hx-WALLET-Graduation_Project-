import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-xray-form',
  templateUrl: './xray-form.component.html',
  styleUrls: ['./xray-form.component.css'],
})
export class XrayFormComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.getxrays();
  }

  xrays: any = {};
  ngOnInit(): void {}
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
}
