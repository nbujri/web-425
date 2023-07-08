/**
 * title: sign-in.component.ts
 * author: ngi bujri
 * date: july 7 2023
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private signInService: SignInService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          // accept numbers only
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    // store student id as a number
    const studentId = parseInt(formValues.studentId);

    // navigate user to home page if input passes validation
    if (this.signInService.validate(studentId)) {
      // set session_user to string value of student id
      // expire cookie after 1 day
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid';
    }
  }

  // get controls from sign in form
  get form() {
    return this.signInForm.controls;
  }
}
