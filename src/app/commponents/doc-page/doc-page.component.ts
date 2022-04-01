import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css'],
})
export class DocPageComponent implements OnInit {
  constructor() {}
  meds: number[] = [1];
  ngOnInit(): void {}
  search = false; //true
  DO = true; //false
  select = true; //false
  show = false; //true
  add = true; //false
  drug = true; //true
  tests = false; //false
  xrays = false; //false
  Start() {
    this.search = false;
    this.DO = true;
    this.select = true;
  }
  FuncShow() {
    this.show = true;
    this.add = false;
    var p1 = document.getElementById('p1');
    p1?.setAttribute('class', 'P_PIc Pselect');
    var p2 = document.getElementById('p2');
    p2?.setAttribute('class', 'P_PIc');
  }
  FuncAdd() {
    var v = document.getElementById('showone');
    v?.setAttribute('class', 'addshow');
    var p1 = document.getElementById('p1');
    p1?.setAttribute('class', 'P_PIc ');
    var p2 = document.getElementById('p2');
    p2?.setAttribute('class', 'P_PIc Pselect');
    this.show = false;
    this.add = true;
  }
  Drug() {
    this.drug = true;
    this.tests = false;
    this.xrays = false;
  }
  Tests() {
    var f = document.getElementById('first');
    f?.setAttribute('class', 'btt');
    this.drug = false;
    this.tests = true;
    this.xrays = false;
  }
  XRays() {
    var f = document.getElementById('first');
    f?.setAttribute('class', 'btt');
    this.drug = false;
    this.tests = false;
    this.xrays = true;
  }
  AddMed() {
    this.meds.push(1);
  }
}
