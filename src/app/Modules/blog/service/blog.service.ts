import { Injectable } from '@angular/core';

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
  private blogs: Blog[] = [
    { id: 1, title: 'Sample Title 1', description: 'Sample Description 1', author: 'Author 1',comment: 'Dummy Dummy comment 1' },
    { id: 2, title: 'Sample Title 2', description: 'Sample Description 2', author: 'Author 2',comment: 'Dummy Dummy comment 2' }
  ];
  constructor() { }

  getBlogs(): Blog []{
    return this.blogs;
  }
}
