import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FriendMessaging } from '../../shared/interface/models';

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
    console.log('getusermessages', email, receiverEmail);
    return this.afs.collection('messaging').doc(email).collection(`messages-${receiverEmail}`).valueChanges();
  }

  public getCurrentMessages(email: string): any {
    return this.afs.collection('messaging').doc(email).snapshotChanges();
  }

  public senderMessage(dataArg: FriendMessaging, senderEmail: string, receiverEmail): void {
    console.log('sending message', dataArg);
    this.afs.collection('messaging').doc(senderEmail).collection(`messages-${receiverEmail}`).add({
      messages: dataArg.messages,
    });
  }

  public recipientMessage(dataArg: FriendMessaging, senderEmail: string, receiverEmail): void {
    console.log('sending message', dataArg);
    this.afs.collection('messaging').doc(senderEmail).collection(`messages-${receiverEmail}`).add({
      messages: dataArg.messages,
    });
  }


}
