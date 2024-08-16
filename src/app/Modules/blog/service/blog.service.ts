import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  comment: string
}

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private serverUrl = 'http://localhost:3000/blogs';
  private blogs: Blog[] = [
    { id: 1, title: 'Sample Title 1', description: 'Sample Description 1', author: 'Author 1',comment: 'Dummy Dummy comment 1' },
    { id: 2, title: 'Sample Title 2', description: 'Sample Description 2', author: 'Author 2',comment: 'Dummy Dummy comment 2' }
  ];
  constructor(private http: HttpClient) { }

  getBlogs(): Blog []{
    return this.blogs;
  }
  
  getBlogsFromServer = () => {
    return this.http
      .get(this.serverUrl)
      .pipe(tap((data) => console.log(data)));
  };
}

