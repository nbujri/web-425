/**
 * title: wishlist.component.ts
 * author: ngi bujri
 * date: july 2 2023
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  // array to hold wishlist items
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  // push new item to items array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
