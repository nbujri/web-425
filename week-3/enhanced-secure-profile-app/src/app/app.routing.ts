/**
 * title: app.routing.ts
 * author: ngi bujri
 * date: june 10 2023
 * description: routing
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// routes
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];
