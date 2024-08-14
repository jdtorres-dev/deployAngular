import { Component, Input,  EventEmitter, Output} from '@angular/core';
import { Book } from 'src/app/Modules/book/services/book.service';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input('bookInput') book: Book | undefined;
  @Output() edit = new EventEmitter<Book>;
  @Output() delete = new EventEmitter<Book>;

  Edit = () => {
    this.edit.emit(this.book)
  }

  Delete= () => {
    this.delete.emit(this.book);
  }
}
