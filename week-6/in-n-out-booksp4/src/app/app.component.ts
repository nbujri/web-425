/*
  title: app.component.ts
  author: ngi bujri
  date: june 20 2023
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.2 - Output Properties';
  }
}
