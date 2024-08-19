import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book, BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorArray: FormArray;
  bookId: number | null = null;
  books: Book[] = [];
  isUpdateMode: boolean = false;

  constructor(private bookService: BookService, private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.bookForm = this.fb.group({
      id: this.generateId,
      name: ['', [Validators.required]],
      authors: this.fb.array(['']),
      isbn: ['', [Validators.required]]
    });
    this.authorArray = this.bookForm.controls['authors'] as FormArray
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.isUpdateMode = true;
        this.loadBook(this.bookId);
      }
    }
    )
  }
  onSubmit = () => {
    if (this.bookForm.valid) {
      const bookValue: Book = this.bookForm.value;
      if(this.isUpdateMode){
        this.updateBook(bookValue)
      }else{
      this.addBook(bookValue);
      }
    }
  };

  addAuthor = () => {
    this.authorArray.controls.push(new FormControl(''));
  };

  deleteAuthor = (index: number) => {
    this.authorArray.removeAt(index);
  }

  loadBook = (id: any) => {
    this.bookService.getBookById(id).subscribe(book => {
      if (book) {
        this.bookForm.patchValue({
          id: book.id,
          name: book.name,
          isbn: book.isbn,
        });
        book.authors.forEach(author => this.authorArray.push(new FormControl(author, Validators.required)));
      }
    }
    )
  }

  addBook = (newBook: Book) => {
    this.bookService.addBook(newBook).subscribe(
      (book) => console.log(book))
  }

  updateBook = (updatedBook: Book) => {
    this.bookService.updateBook(updatedBook).subscribe(
      (book) => console.log(book))
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }
}
