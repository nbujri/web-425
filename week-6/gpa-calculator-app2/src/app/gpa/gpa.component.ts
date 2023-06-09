/**
 * title: gpa.component.ts
 * author: ngi bujri
 * date: july 6 2023
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
