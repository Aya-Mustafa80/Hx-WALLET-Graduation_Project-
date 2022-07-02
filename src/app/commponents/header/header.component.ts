import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  S_Check() {
    var p1 = document.getElementById('Sighin');
    p1?.setAttribute('class', 'SIGNN tabActive');
    var p2 = document.getElementById('Login');
    p2?.setAttribute('class', 'LOGIN');
    var p3 = document.getElementById('About');
    p3?.setAttribute('class', 'about');
    var p4 = document.getElementById('Content');
    p4?.setAttribute('class', 'content');
  }
  L_Check() {
    var p1 = document.getElementById('Login');
    p1?.setAttribute('class', 'LOGIN tabActive');
    var p2 = document.getElementById('Sighin');
    p2?.setAttribute('class', 'SIGNN');
    var p3 = document.getElementById('About');
    p3?.setAttribute('class', 'about');
    var p4 = document.getElementById('Content');
    p4?.setAttribute('class', 'content');
  }
  C_Check() {
    var p1 = document.getElementById('Login');
    p1?.setAttribute('class', 'LOGIN ');
    var p2 = document.getElementById('Sighin');
    p2?.setAttribute('class', 'SIGNN');
    var p3 = document.getElementById('About');
    p3?.setAttribute('class', 'about');
    var p4 = document.getElementById('Content');
    p4?.setAttribute('class', 'content tabActive');
  }
  A_Check() {
    var p1 = document.getElementById('Login');
    p1?.setAttribute('class', 'LOGIN ');
    var p2 = document.getElementById('Sighin');
    p2?.setAttribute('class', 'SIGNN');
    var p3 = document.getElementById('About');
    p3?.setAttribute('class', 'about tabActive');
    var p4 = document.getElementById('Content');
    p4?.setAttribute('class', 'content');
  }
}
