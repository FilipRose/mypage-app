import { Component, OnInit } from '@angular/core';
import { CommenetsService } from 'src/app/services/commenets.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent implements OnInit{

  comments: Array<any>;
  commentCount:number;
  
  constructor(private _commentsService: CommenetsService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    const url = window.location.href;
    const postId = url.split('/').pop();
    this._commentsService.loadComments().subscribe(val => {
        this.comments = val.filter((comment) => comment.data.postId === postId);
        this.commentCount = this.comments.length;
      })
    
  }
}
