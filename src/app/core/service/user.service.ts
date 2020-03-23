import { User } from './../../shared/models';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { FriendMessaging } from '../../shared/models';
import { EmitService } from './emit.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ref: AngularFirestoreDocument<any>;


  constructor(private afs: AngularFirestore,
    public emitService: EmitService,

  ) { }

  public createUser(dataArg: User): void {

    this.afs.collection('users').doc(dataArg.email).set(
      Object.assign({}, {
        uId: dataArg.uid,
        displayName: dataArg.displayName,
        email: dataArg.email,
        photoURL: dataArg.photoURL,
        title: 'Newcomer',
      }));
  }
  public updateUser(dataArg: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${dataArg.email}`);
    if (!dataArg.title) {
      dataArg.title = 'Newcomer';
      const data: User = {
        uid: dataArg.uid,
        email: dataArg.email,
        displayName: dataArg.displayName,
        photoURL: dataArg.photoURL,
        title: dataArg.title,
      };
      console.log('refreshing from user service');
      this.emitService.refreshMessages();
      return userRef.set(Object.assign({}, data), { merge: true });
    }
  }

  public getUsers() {
    return this.afs.collection('users').snapshotChanges();
  }

  public getThisUser(email: string) {
    return this.ref = this.afs.doc(`users/${email}`);
  }


}
