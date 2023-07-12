/*
  title: app-routing.module.ts
  author: ngi bujri
  date: june 20 2023
  description: routing
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// component routes
const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
