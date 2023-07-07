/**
 * title: sign-in.service.ts
 * author: ngi bujri
 * date: july 7 2023
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    // pre-defined IDs for login
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // check if student id exists
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
