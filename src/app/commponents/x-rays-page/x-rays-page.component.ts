import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-rays-page',
  templateUrl: './x-rays-page.component.html',
  styleUrls: ['./x-rays-page.component.css'],
})
export class XRaysPageComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {}
  logBody() {
    this.show = true;
  }
}
