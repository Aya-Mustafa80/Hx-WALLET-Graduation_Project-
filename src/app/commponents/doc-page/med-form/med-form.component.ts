import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-med-form',
  templateUrl: './med-form.component.html',
  styleUrls: ['./med-form.component.css'],
})
export class MedFormComponent implements OnInit {
  constructor() {}
  dos: number[] = [1];
  ngOnInit(): void {}
  AddDosage() {
    this.dos.push(1);
  }
}
