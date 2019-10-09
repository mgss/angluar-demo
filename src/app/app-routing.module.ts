import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './modules/post/post.component';
import { PostDetaileComponent } from './modules/post/components/post-detaile/post-detaile.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id', component: PostDetaileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
