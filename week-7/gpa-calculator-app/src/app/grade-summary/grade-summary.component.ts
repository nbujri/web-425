/**
 * title: grade-summary.component.ts
 * author: ngi bujri
 * date: july 6 2023
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
