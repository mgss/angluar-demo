import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AppRoutingModule } from '../../app-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetaileComponent } from './components/post-detaile/post-detaile.component';

@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetaileComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}
