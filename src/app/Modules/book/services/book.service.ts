import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Book {
  id?: any;
  name: string;
  authors: string[];
  isbn: string;
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private serverUrl = 'http://localhost:3000/books';
  // private books: Book[] = [
  //   { id: 1, name: 'Sample Book Name 1', authors: ['Author A', 'Author B'], isbn: '1234567890' },
  //   { id: 2, name: 'Sample Book Name 2', authors: ['Author 2'], isbn: '0987654321' }
  // ];

  constructor(private http: HttpClient) { }

  // getBooks(): Book[] {
  //   return this.books;
  // }

getBooksFromServer (): Observable<Book[]> {
  return this.http.get<Book[]>(this.serverUrl)
  .pipe(tap((data) => console.log(data)));
  }

  getBookById(id: any): Observable<Book> {
    return this.http.get<Book>(`${this.serverUrl}/${id}`);
  }
  
  addBook(book: Book) {
    return this.http
      .post(this.serverUrl, book)
  }

  updateBook(book: Book) {
    return this.http
      .put(`${this.serverUrl}/${book.id}`, book)
  }

  deleteBook(id: string) {
    return this.http
      .delete(`${this.serverUrl}/${id}`)
  }
}
