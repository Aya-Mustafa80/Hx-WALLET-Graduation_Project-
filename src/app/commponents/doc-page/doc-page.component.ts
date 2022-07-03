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
  /* ///////// */
  showPrscription = false;
  showtest = false;
  showXRays = false;

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
}
