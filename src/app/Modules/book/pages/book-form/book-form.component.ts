import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book, BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit{
  bookForm: FormGroup;
  authorArray: FormArray;
  bookId: number | null = null;
 
  constructor(private bookService: BookService, private fb: FormBuilder,
    private route: ActivatedRoute)
    {
    this.bookForm = this.fb.group({
      name:['',[Validators.required]],
      authors: this.fb.array(['']),
      isbn:['',[Validators.required]]
    });
    this.authorArray = this.bookForm.controls['authors'] as FormArray
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bookId = params['id'];
      if (params['id']) {
        this.loadBook(params['id']);
      }
    }
  );
  console.log(this.bookId)
  }
  onSubmit = () => {
    const book: Book = this.bookForm.getRawValue() as Book;
    console.log('form', this.bookForm.getRawValue());
  };

  addAuthor = () => {
    this.authorArray.controls.push(new FormControl(''));
  };

  deleteAuthor = (index: number) => {
    this.authorArray.removeAt(index);
  };

  loadBook(id: number): void {
    const book = this.bookService.getBookById(id);
    if (book) {
      this.bookForm.patchValue({
        name: book.name,
        isbn: book.isbn
      });
      this.authorArray.clear();
      book.authors.forEach(author => this.authorArray.push(new FormControl(author, Validators.required)));
    }
  }
}
