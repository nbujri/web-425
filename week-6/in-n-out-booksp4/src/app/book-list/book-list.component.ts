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
  books: Observable<IBook[]>;

  // table headers
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private bookService: BooksService, private dialog: MatDialog) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {}

  // logs book properties
  showBookDetails(isbn: string) {
    this.book = this.bookService.getBook(isbn);

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

    // console.log(this.book);
  }
}
