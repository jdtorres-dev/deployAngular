import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  name: string;
  authors: string;
  isbn: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    { id: 1, name: 'Sample Book Name 1', authors: 'Author 1', isbn: '1234567890' },
    { id: 2, name: 'Sample Book Name 2', authors: 'Author 2', isbn: '0987654321' },
    { id: 3, name: 'Sample Book Name 3', authors: 'Author 3', isbn: '098765432X' },
    { id: 4, name: 'Sample Book Name 4', authors: 'Author 4', isbn: '2356162626' },
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }
}
