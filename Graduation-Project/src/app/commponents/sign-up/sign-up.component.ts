import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  F1 = true;
  F2 = false;
  F3 = false;
  F4 = false;
  F5 = false;

  Patient() {
    this.F1 = true;
    this.F2 = false;
    this.F3 = false;
    this.F4 = false;
    this.F5 = false;
  }
  Doc() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = true;
    this.F3 = false;
    this.F4 = false;
    this.F5 = false;
  }
  Pharmacy() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = false;
    this.F3 = true;
    this.F4 = false;
    this.F5 = false;
  }
  TestLab() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = false;
    this.F3 = false;
    this.F4 = true;
    this.F5 = false;
  }
  XRays() {
    var but = document.getElementById('first');
    but?.setAttribute('class', '');
    this.F1 = false;
    this.F2 = false;
    this.F3 = false;
    this.F4 = false;
    this.F5 = true;
  }
}
