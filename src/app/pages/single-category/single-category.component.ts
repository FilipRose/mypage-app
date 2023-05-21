import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

    postArray: any;
    categoryObj: any;
    constructor(private _route: ActivatedRoute, private _postService: PostsService) {}

    ngOnInit(): void {
      this._route.params.subscribe((val => {
        this.categoryObj = val
        this._postService.loadCategoryPosts(val['id']).subscribe((post => {
          this.postArray = post;
        }));
      }));
    }
}
