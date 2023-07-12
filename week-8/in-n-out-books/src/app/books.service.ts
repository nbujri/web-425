/**
 * title: books.service.ts
 * author: ngi bujri
 * date: june 23 2023
 * description: books service
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // pre-defined ISBNs
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
  ];

  constructor(private http: HttpClient) {}

  // return books
  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    // send get request for books with matching isbns
    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}
