import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  S_Check() {
    var p1 = document.getElementById('S');
    p1?.setAttribute('class', 'SIGNN EditLS');
    var p2 = document.getElementById('L');
    p2?.setAttribute('class', 'LOGIN');
  }
  L_Check() {
    var p1 = document.getElementById('L');
    p1?.setAttribute('class', 'LOGIN EditLS');
    var p2 = document.getElementById('S');
    p2?.setAttribute('class', 'SIGNN');
  }
}
