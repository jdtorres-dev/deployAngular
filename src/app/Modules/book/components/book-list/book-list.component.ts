import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  booksServer: any;
  books: Book[] = [];
 constructor(private bookService: BookService, private router: Router) { }
 
 ngOnInit (): void {
  this.books = this.bookService.getBooks();
  this.loadBlogs()
}


edit = (book: Book) => {
  console.log(`Edit Book Name: ${book.name} with Id: ${book.id}`);
  this.router.navigate(['/book/book-form'], { queryParams: { id: book.id } })
}

delete = (book: Book) => {
  console.log(`Delete Book Name: ${book.name} with Id: ${book.id}`);
}

actionType = (action: any) => {
  if(action === 'add'){
    this.router.navigate(['/book/book-form'])
    console.log('add');
  }else if(action === 'delete'){
    console.log('delete');
  }
}

loadBlogs(): void {
  this.bookService.getBooksFromServer().subscribe(data => {
    this.booksServer = data;
  });

}
}