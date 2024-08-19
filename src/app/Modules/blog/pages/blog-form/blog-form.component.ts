import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Blog, BlogService } from '../../service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsArray: FormArray;
  blogId: number | null = null;
  books: Blog[] = [];
  isUpdateMode: boolean = false;

  constructor(private fb: FormBuilder, private blogService: BlogService, private route: ActivatedRoute) {
    this.blogForm = this.fb.group({
      id: this.generateId,
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      comments: this.fb.array([''])
    });
    this.commentsArray = this.blogForm.controls['comments'] as FormArray
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.blogId = params['id'];
      if ( this.blogId) {
        this.loadBlog( this.blogId);
      }
    }
  )
  }
  onSubmit = () => {
    if (this.blogForm.valid) {
      const blogValue: Blog = this.blogForm.value;
      if(this.isUpdateMode){
        this.updateBlog(blogValue)
      }else{
      this.addBlog(blogValue);
      }
    }
  };

  addComment = () => {
    this.commentsArray.controls.push(new FormControl(''));
  };

  deleteComment = (index: number) => {
    this.commentsArray.removeAt(index);
  }

  loadBlog = (id: any) => {
    this.blogService.getBlogById(id).subscribe(blog => {
      if (blog) {
        this.blogForm.patchValue({
          title: blog.title,
          description: blog.description,
          author: blog.author,
        });
        this.commentsArray.clear();
        blog.comment.forEach(comment => this.commentsArray.push(new FormControl(comment, Validators.required)));
      }
    }
    )
  }

  addBlog = (newBlog: Blog) => {
    this.blogService.addBlog(newBlog).subscribe(
      (blog) => console.log(blog))
  }

  updateBlog = (updatedBlog: Blog) => {
    this.blogService.updateBlog(updatedBlog).subscribe(
      (blog) => console.log(blog))
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }
}
