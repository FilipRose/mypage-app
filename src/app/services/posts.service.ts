import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _fireStore: AngularFirestore) {}

  loadFeaturedPosts() {
    return this._fireStore
      .collection('posts', ref => ref.where('isFeatured', '==', true))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {
              id,
              data,
            };
          });
        })
      );
  }

  loadOnePost(id) {
    return this._fireStore.doc(`posts/${id}`).valueChanges();
  }
}
