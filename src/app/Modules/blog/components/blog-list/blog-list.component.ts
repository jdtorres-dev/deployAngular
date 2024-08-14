import { Component } from '@angular/core';
import { BlogService, Blog } from '../../service/blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs: Blog[] = [];
 constructor(private blogService: BlogService) { }

 ngOnInit(): void {
  this.blogs = this.blogService.getBlogs();
}

getBook = (blogService: BlogService) =>{
  this.blogs = blogService.getBlogs();
}

edit = (blog: Blog) => {
  console.log(`Edit Blog Title: ${blog.title} with id: ${blog.id}`);
}

delete = (blog: Blog) => {
  console.log(`Delete Blog Title: ${blog.title} with id: ${blog.id}`);
}




}
