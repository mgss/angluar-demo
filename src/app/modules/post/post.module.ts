import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetaileComponent } from './components/post-detaile/post-detaile.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetaileComponent],
  imports: [CommonModule, PostRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}
