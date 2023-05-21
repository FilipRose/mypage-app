import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {

  postData: any; 
  similarPostArray: any;

  constructor(
    private _postService: PostsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(val => {
      this._postService.countViews(val['id'])
      this._postService.loadOnePost(val['id']).subscribe (post => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })
    });
  }
  loadSimilarPost(categoryId) {
    this._postService.loadSimiliar(categoryId).subscribe(val => {
      this.similarPostArray = val;
    });
  }
}
