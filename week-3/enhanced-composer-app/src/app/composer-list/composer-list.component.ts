/**
 * title: composer-list.component.ts
 * author: ngi bujri
 * date: june 9 2023
 * description: component to display list of composers
 */

// imports
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent {
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }
}
