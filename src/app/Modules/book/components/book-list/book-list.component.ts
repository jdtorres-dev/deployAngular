import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  books: Book[] = [];
  isEditMode = false;
 constructor(private bookService: BookService, private router: Router,private route: ActivatedRoute) { }
 
 ngOnInit (): void {
  this.books = this.bookService.getBooks();
}


edit = (book: Book) => {
  console.log(`Edit Book Name: ${book.name} with Id: ${book.id}`);
  this.router.navigate(['/book/book-form'])
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

}
