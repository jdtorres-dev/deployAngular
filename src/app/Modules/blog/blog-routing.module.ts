import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
const routes: Routes = [
  {path: '', component: BlogListComponent},
  {path: 'blog-form', component: BlogFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
