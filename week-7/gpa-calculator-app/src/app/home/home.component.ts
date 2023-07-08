/**
 * title: home.component.ts
 * author: ngi bujri
 * date: july 6 2023
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      // make course and grade required
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  // save current course and grade than reset values
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value,
    });
    event.currentTarget.reset();
  }

  // calculates gpa
  calculateResults() {
    let gpa = 0;
    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        default:
          gpa += 0.0;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // clears all grades
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

  // get transcriptForm controls
  get form() {
    return this.transcriptForm.controls;
  }
}
