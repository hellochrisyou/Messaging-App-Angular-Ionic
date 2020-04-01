import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Message, User, Image, Proposal } from '../../shared/interface/models';
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
        uid: dataArg.uid,
        displayName: dataArg.displayName,
        email: dataArg.email,
        photoURL: dataArg.photoURL,
        title: 'Newcomer',
        age: null,
        religion: null,
        haveKids: null,
        hobbies: null,
        description: null,
        messageCount: 0,
        images: [],
        proposalCount: 0
      }
      ));
  }
  public updateUser(dataArg: User) {
    console.log("updateUser -> dataArg", dataArg)
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${dataArg.email}`);
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
      description: dataArg.description,
      messageCount: dataArg.messageCount,
      images: dataArg.images,
      proposalCount: dataArg.proposalCount
    };
    console.log('data', data);
    return userRef.set(Object.assign({}, data), { merge: true });
  }


  public getUsers() {
    return this.afs.collection('users').valueChanges();
  }

  public getUser(email: string) {
    return this.afs.doc(`users/${email}`);
  }


  public returnUsersMessages(messages: Message[], email: string, otherEmail: string): Message[] {

    this.messagingService.getUserMessages(email, otherEmail).subscribe(messagesData => {
      const returnMessages = messagesData;
      return returnMessages;
    });
    return;
  }
}
