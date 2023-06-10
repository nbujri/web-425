/**
 * title: home.component.ts
 * author: ngi bujri
 * date: june 10 2023
 */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {
    // get value of isLoggedIn
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }
}
