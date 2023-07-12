/**
 * title: book-list.component.ts
 * author: ngi bujri
 * date: june 23 2023
 */

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook> = [];

  book: IBook;

  constructor(private bookService: BooksService, private dialog: MatDialog) {
    this.bookService.getBooks().subscribe((res) => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map((author) => author.name);
          }

          // push objects into books array
          this.books.push({
            // assign isbn_13 if exists, else use isbn_10
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,

            // assign subtitle if exists, else use N/A
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  // return book with matching ISBNs
  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn);

    const dialogRef = this.dialog
      .open(BookDetailsDialogComponent, {
        data: {
          book: this.book,
        },
        disableClose: true,
        width: '800px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === 'confirm') {
          this.book = null;
        }
      });
  }
}
