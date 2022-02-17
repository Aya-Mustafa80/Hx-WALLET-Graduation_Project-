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
