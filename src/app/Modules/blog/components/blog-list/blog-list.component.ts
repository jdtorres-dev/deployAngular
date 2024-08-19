import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from '../../service/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  blogs: Blog[] = [];
  blogsServer: any;
 constructor(private blogService: BlogService, private router: Router) { }

 ngOnInit(): void {
  this.getBlogs()
}
getBlogs(): void {
  this.blogService.getBlogsFromServer()
    .subscribe(blogs => this.blogs = blogs);
}

edit = (blog: Blog) => {
  console.log(`Edit Blog Title: ${blog.title} with id: ${blog.id}`);
  this.router.navigate(['/blog/blog-form'],{ queryParams: { id: blog.id } })
}

//delete function need to refresh the page to reflect the changes
delete = (blog: Blog) => {
  this.blogService.deleteBlog(blog.id).subscribe(
    () => {
      this.blogs = this.blogs.filter(blog => blog.id === blog.id)
    }
  )
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
