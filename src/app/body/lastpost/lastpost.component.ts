import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lastpost',
  templateUrl: './lastpost.component.html',
  styleUrls: ['./lastpost.component.css'],
})
export class LastpostComponent implements OnInit {

  lastestPosts: any;

  constructor(private _postService: PostsService) {}

  ngOnInit(): void {
    this._postService.loadLatest().subscribe((val) => {
      this.lastestPosts = val;
    });
  }
}
