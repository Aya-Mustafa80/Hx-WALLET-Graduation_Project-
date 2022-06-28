import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.css'],
})
export class TestsPageComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {}
  logBody() {
    this.show = true;
  }
}
