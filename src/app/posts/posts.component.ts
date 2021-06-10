import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from '../posts.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<Post[]>;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts$();
  }

}
