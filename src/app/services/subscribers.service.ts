import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private _fireBase: AngularFirestore) {}

  addSubs(subData) {
    this._fireBase
      .collection('subscribers')
      .add(subData)
      .then(() => {
        console.log('Subscriber saved sucessfully');
      });
  }

  checkSubs(subEmail) {
    return this._fireBase.collection('subscribers', (ref) =>
      ref.where('email', '==', subEmail)
    ).get();
  }
}
