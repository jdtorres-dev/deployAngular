import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../services/book.service';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorArray: FormArray;
  constructor(private fb: FormBuilder){
    this.bookForm = this.fb.group({
      name:['',[Validators.required]],
      authors: this.fb.array(['']),
      isbn:['',[Validators.required]]
    });
    this.authorArray = this.bookForm.controls['authors'] as FormArray
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
  }
}
