/**
 * title: composer.service.ts
 * author: ngi bujri
 * date: june 18 2023
 * description: composer service
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  // array to store composers
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Richard Wagner',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Ludwig van Beethoven',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Claude Debussy',
        genre: 'Classical',
      },
    ];
  }

  // return composers in the composers array
  getComposers() {
    console.log(this.composers);
    return this.composers;
  }

  // return a composer with specified id
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
