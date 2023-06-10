/**
 * title: sign-in.component.ts
 * author: ngi bujri
 * date: june 10 2023
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  // signs user in
  signin() {
    this.isLoggedIn = true;

    // sends user to home page when signed in
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }

  ngOnInit(): void {}
}
