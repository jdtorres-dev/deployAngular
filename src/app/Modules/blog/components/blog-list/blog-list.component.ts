import { Component } from '@angular/core';
import { BlogService, Blog } from '../../service/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs: Blog[] = [];
 constructor(private blogService: BlogService, private router: Router) { }

 ngOnInit(): void {
  this.blogs = this.blogService.getBlogs();
}

getBook = (blogService: BlogService) =>{
  this.blogs = blogService.getBlogs();
}

edit = (blog: Blog) => {
  console.log(`Edit Blog Title: ${blog.title} with id: ${blog.id}`);
  this.router.navigate(['/blog/blog-form'])
}

delete = (blog: Blog) => {
  console.log(`Delete Blog Title: ${blog.title} with id: ${blog.id}`);
}

actionType = (action: any) => {
  if(action === 'add'){
    this.router.navigate(['/blog/blog-form'])
    console.log('add');
  }else if(action === 'delete'){
    console.log('delete');
  }
}
}
