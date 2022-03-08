import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css'],
})
export class DocPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  search = false; //true
  DO = true; //false
  select = true; //false
  show = true; //true;
  add = false; //false;
  Start() {
    this.search = false;
    this.DO = true;
    this.select = true;
  }
  FuncShow() {
    this.show = true;
    this.add = false;
  }
  FuncAdd() {
    var v = document.getElementById('showone');
    v?.setAttribute('class', 'addshow');
    this.show = false;
    this.add = true;
  }
}
