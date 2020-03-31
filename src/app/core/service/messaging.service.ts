import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../../shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getMessages(email: string) {
    return this.afs.collection('users').doc(email).snapshotChanges();
  }
  public getUserMessages(email: string, receiverEmail: string): any {
    return this.afs.collection('users').doc(email).collection('receiverEmail').valueChanges();
  }

  public getCurrentMessages(email: string): any {
    return this.afs.collection('users').doc(email).snapshotChanges();
  }

  public sendMessage(message: Message, senderEmail: string, receiverEmail): void {
    this.afs.collection('users').doc(senderEmail).collection(`${receiverEmail}`).add({
      messages: message,
    });
  }

}
