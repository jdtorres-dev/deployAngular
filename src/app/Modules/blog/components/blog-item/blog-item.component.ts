import { Component, Input,  EventEmitter, Output} from '@angular/core';
import { Blog } from '../../service/blog.service';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input('blogInput') blog: Blog | undefined;
  @Output() edit = new EventEmitter<Blog>;
  @Output() delete = new EventEmitter<Blog>;

  Edit = () => {
    this.edit.emit(this.blog)
  }
  
  Delete= () => {
    this.delete.emit(this.blog);
  }
}
