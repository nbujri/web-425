/**
 * title: my-details.component.ts
 * author: ngi bujri
 * date: june 10 2023
 */

import { Component, OnInit } from '@angular/core';

// Person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(
      `\n  full name: ${this.fullName}\n  favorite food: ${this.favoriteFood}\n  favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    // create new instance of Person
    this.myProfile = new Person('Ngi Bujri', 'Pho', 'Red');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
