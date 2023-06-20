/**
 * title: book.interface.ts
 * author: ngi bujri
 * date: june 20 2023
 * description: book interface
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
