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
  popup = false; //false
  search = true; //true
  DO = false; //false
  select = false; //false
  /* /////// */
  show = true; //true
  adddrug = false; //true
  addtests = false; //false
  addxrays = false; //false
  Start() {
    this.search = false;
    this.DO = true;
    this.select = true;
  }
  FuncShow() {
    this.show = true;
    this.adddrug = false;
    this.addtests = false;
    this.addxrays = false;
    var p1 = document.getElementById('p1');
    p1?.setAttribute('class', 'P_PIc Pselect');
    var p2 = document.getElementById('p2');
    p2?.setAttribute('class', 'P_PIc');
  }
  Drug() {
    this.show = false;
    this.adddrug = true;
    this.addtests = false;
    this.addxrays = false;
  }
  Tests() {
    var f = document.getElementById('first');
    f?.setAttribute('class', 'btt');
    this.show = false;
    this.adddrug = false;
    this.addtests = true;
    this.addxrays = false;
  }
  XRays() {
    var f = document.getElementById('first');
    f?.setAttribute('class', 'btt');
    this.show = false;
    this.adddrug = false;
    this.addtests = false;
    this.addxrays = true;
  }
  AddMed() {
    this.meds.push(1);
  }
  openForm() {
    this.popup = true;
    /*  var p = document.getElementById('displayPage');
    p?.setAttribute('class', 'form-popupedit');
    var p1 = document.getElementById('bod');
    p1?.setAttribute('class', 'bodBac '); */
  }

  closeForm() {
    this.popup = false;
    var p = document.getElementById('displayPage');
    p?.setAttribute('class', 'form-popup');
    var p1 = document.getElementById('bod');
    p1?.setAttribute('class', '');
  }
}
