import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Book {
  id: number;
  name: string;
  authors: string[];
  isbn: string;
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private serverUrl = 'http://localhost:3000/books';
  private books: Book[] = [
    { id: 1, name: 'Sample Book Name 1', authors: ['Author A', 'Author B'], isbn: '1234567890' },
    { id: 2, name: 'Sample Book Name 2', authors: ['Author 2'], isbn: '0987654321' }
  ];

  constructor(private http: HttpClient) { }

  getBooks(): Book[] {
    return this.books;
  }

getBooksFromServer= () => {
  return this.http
  .get(this.serverUrl)
  .pipe(tap((data) => console.log(data)));
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }
}
