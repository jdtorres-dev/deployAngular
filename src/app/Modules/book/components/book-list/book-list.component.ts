import { Component } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] = [];
 constructor(private bookService: BookService) { }
 
 ngOnInit (): void {
  this.books = this.bookService.getBooks();
}

edit = (book: Book) => {
  console.log(`Edit Book Name: ${book.name} with Id: ${book.id}`);
}

delete = (book: Book) => {
  console.log(`Delete Book Name: ${book.name} with Id: ${book.id}`);
}
}
