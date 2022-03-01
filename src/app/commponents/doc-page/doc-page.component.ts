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
  Show = true; //false
  select = true; //false
  Start() {
    this.search = false;
    this.Show = true;
    this.select = true;
  }
}
