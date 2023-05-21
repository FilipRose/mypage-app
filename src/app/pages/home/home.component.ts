import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featurePost: any;

  constructor(private _postService: PostsService) {}

  ngOnInit(): void {
    this._postService.loadFeaturedPosts().subscribe((val) => {
      this.featurePost = val;
    });
  }
}
