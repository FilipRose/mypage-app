import { Component, ElementRef, OnInit } from '@angular/core';
import { CommenetsService } from 'src/app/services/commenets.service';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  constructor(
    private _commentsService: CommenetsService, private _elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  addComment(formValue: any) {
    const url = window.location.href;
    const postId = url.split('/').pop();
    const commenetData: Comments = {
      name: formValue.name,
      comment: formValue.comment,
      postId: postId,
      createdAt: new Date()
    };
    console.log(commenetData);
    
    this._commentsService.addComment(commenetData, postId);

    this.resetFormFields();
  }

  resetFormFields() {
    const formElement: HTMLFormElement = this._elementRef.nativeElement.querySelector('form');
    if (formElement) {
      formElement.reset();
    }
  }
}
