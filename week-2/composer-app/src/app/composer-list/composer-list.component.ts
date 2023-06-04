import { Component } from '@angular/core';

// Composer class
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Johann Sebastian Bach', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Richard Wagner', 'Classical'),
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Claude Debussy', 'Classical'),
    ];
  }
}
