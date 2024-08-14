import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'book',
    loadChildren: () =>
      import('./Modules/book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./Modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Modules/profile/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
