import { User, Message } from '../../shared/interface/models';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { FriendMessaging } from '../../shared/interface/models';
import { EmitService } from './emit.service';
import { MessagingService } from './messaging.service';
import { MessageCount } from '../../shared/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ref: AngularFirestoreDocument<any>;

  constructor(
    private afs: AngularFirestore,
    public emitService: EmitService,
    private messagingService: MessagingService
  ) { }

  public createUser(dataArg: User): void {

    this.afs.collection('users').doc(dataArg.email).set(
      Object.assign({}, {
        uId: dataArg.uid,
        displayName: dataArg.displayName,
        email: dataArg.email,
        photoURL: dataArg.photoURL,
        title: 'Newcomer',
        age: null,
        religion: null,
        haveKids: null,
        hobbies: null,
        description: null
      }
      ));
  }
  public updateUser(dataArg: User) {
    console.log("updateUser -> dataArg", dataArg)

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${dataArg.email}`);
    if (!dataArg.title) {
      dataArg.title = 'Newcomer';
      const data: User = {
        uid: dataArg.uid,
        email: dataArg.email,
        displayName: dataArg.displayName,
        photoURL: dataArg.photoURL,
        title: dataArg.title,
        age: dataArg.age,
        religion: dataArg.religion,
        haveKids: dataArg.haveKids,
        hobbies: dataArg.hobbies,
        description: dataArg.description
      };
      console.log('refreshing from user service');
      this.emitService.refreshMessages();
      return userRef.set(Object.assign({}, data), { merge: true });
    }
  }

  public getUsers() {
    return this.afs.collection('users').valueChanges();
  }

  public getThisUser(email: string) {
    return this.ref = this.afs.doc(`users/${email}`);
  }


  public returnUsersMessages(messages: Message[], email: string, otherEmail: string): Message[] {

    this.messagingService.getUserMessages(email, otherEmail).subscribe(messagesData => {
      console.log("messagesData", messagesData)
      const returnMessages = messagesData;
      return returnMessages;
    });
    return;
  }
}
