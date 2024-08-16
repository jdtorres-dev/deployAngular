import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Blog } from '../../service/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsArray: FormArray;
  constructor(private fb: FormBuilder){
    this.blogForm = this.fb.group({
      title:['',[Validators.required]],
      description: ['',[Validators.required]],
      author: ['',[Validators.required]],
      comments: this.fb.array([''])
    });
    this.commentsArray = this.blogForm.controls['comments'] as FormArray
  }
  onSubmit = () => {
    const blog: Blog = this.blogForm.getRawValue() as Blog;
    console.log('form', this.blogForm.getRawValue());
  };

  addComment = () => {
    this.commentsArray.controls.push(new FormControl(''));
  };

  deleteComment = (index: number) => {
    this.commentsArray.removeAt(index);
  }
}
