import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FriendMessaging } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getMessages(email: string) {
    return this.afs.collection('messaging').doc(email);
  }
  public getUserMessages(email: string, receiverEmail: string): any {
    return this.afs.collection('messaging').doc(email).collection(`messages-${receiverEmail}`).valueChanges();

  }

  public senderMessage(dataArg: FriendMessaging, senderEmail: string, receiverEmail): void {
    console.log('sending message', dataArg);
    this.afs.collection('messaging').doc(senderEmail).collection(`messages-${receiverEmail}`).add({
      messages: dataArg.messages,
    });
  }

  public receipientMessage(dataArg: FriendMessaging, recipientEmail: string) {
    this.afs.collection('messaging').doc(recipientEmail).collection('messages').add({
      messages: dataArg.messages,
    });
  }


}