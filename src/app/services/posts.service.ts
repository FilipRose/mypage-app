import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _fireStore: AngularFirestore) {}

  loadFeaturedPosts() {
    return this._fireStore
      .collection('posts', (ref) =>
        ref.where('isFeatured', '==', true).limit(4)
      )
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

  loadLatest() {
    return this._fireStore
      .collection('posts', (ref) => ref.orderBy('createdAt'))
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

  loadCategoryPosts(categoryId) {
    return this._fireStore
      .collection('posts', (ref) =>
        ref.where('category.categoryId', '==', categoryId).limit(4)
      )
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

  loadOnePost(postId) {
    return this._fireStore.doc(`posts/${postId}`).valueChanges();
  }

  loadSimiliar(categoryId) {
    return this._fireStore
      .collection('posts', (ref) =>
        ref.where('category.categoryId', '==', categoryId).limit(4)
      )
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

  countViews(postId) {
    const viewsCount = {
      views: firebase.default.firestore.FieldValue.increment(1),
    };
    this._fireStore
      .doc(`posts/${postId}`)
      .update(viewsCount)
      .then(() => {
      });
  }
}
