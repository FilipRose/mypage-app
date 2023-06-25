import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommenetsService {
  constructor(private _fireBase: AngularFirestore) {}

  addComment(commentData, postId) {
    const commentWithPostId = {
      ...commentData,
      postId: postId,
    };
    console.log(commentWithPostId);
    
    this._fireBase
      .collection('comments')
      .add(commentWithPostId)
      .then(() => {});
  }

  loadComments() {
    return this._fireBase
      .collection('comments')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data: any = a.payload.doc.data();
            const id: string = a.payload.doc.id;
            return {
              id,
              data,
            };
          });
        })
      );
  }
}
