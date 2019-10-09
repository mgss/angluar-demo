import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detaile',
  templateUrl: './post-detaile.component.html',
  styleUrls: ['./post-detaile.component.css'],
})
export class PostDetaileComponent implements OnInit {
  entity: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = +params.get('id');

      this.entity = this.postService.show(postId);
    });
  }
}
