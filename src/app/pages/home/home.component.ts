import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featurePost: Array<object>;

  constructor(private _postService: PostsService) {

    this._postService.loadFeaturedPosts().subscribe(val => {
      this.featurePost = val
    });

  }

  ngOnInit(): void {
    
  }

}
