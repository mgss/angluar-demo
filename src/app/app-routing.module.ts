import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './modules/post/post.component';
import { PostDetaileComponent } from './modules/post/components/post-detaile/post-detaile.component';
import { RegisterComponent } from './modules/user/component/register/register.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id', component: PostDetaileComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
