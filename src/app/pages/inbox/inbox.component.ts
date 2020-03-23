import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { FriendMessaging, Message, User } from './../../shared/models';
import { GET_DATE, REMOVE_ME_FROM_PLAYERS, FILTER_MESSAGES, REMOVE_EMPTY_MESSAGES } from './inbox.util';
import { MessagingService } from '../../core/service/messaging.service';
import { EmitService } from '../../core/service/emit.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {

  messageRef: AngularFirestoreDocument<any>;

  user: User;
  message: string;
  messages: Message[] = [];
  usersCollection: any;
  users: any[];
  messageCount: number[] = [];
  thisMessage: Message = {};

  constructor(
    private userService: UserService,
    private messagingService: MessagingService,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    public emitService: EmitService, private changeDetector: ChangeDetectorRef

  ) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getUsers().subscribe(usersData => {

      this.users = usersData;
      this.users = REMOVE_ME_FROM_PLAYERS(this.authService.authState.email, this.users);
      // this.users = REMOVE_EMPTY_MESSAGES(this.users);
      this.users.forEach((item, index) => {

        this.messagingService
          .getUserMessages(this.authService.authState.email, item.payload.doc.data().email)
          .subscribe(userMessageData => {
            this.messages.push(userMessageData);
            // Need to count inner messages
            let count = 0;
            for (const element of userMessageData) {
              count++;
            }

            this.messageCount.push(count);
          });
      });
    });
  }

  async sendMessage(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Send Message',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (dataMessage: any) => {
            this.messageRef = this.messagingService.getMessages(this.authService.authState.email);
            this.messageRef.get().subscribe(messagesData => {

              this.thisMessage.sender = this.authService.authState.email;
              this.thisMessage.receiver = this.users[index].payload.doc.data().email;
              this.thisMessage.message = dataMessage.message;
              this.thisMessage.date = GET_DATE();
              this.thisMessage.senderPhotoUrl = this.authService.authState.photoURL;
              this.thisMessage.receiverPhotoURL = this.users[index].payload.doc.data().photoURL;
              this.thisMessage.email = this.authService.authState.email;

              if (!messagesData.exists) {
                this.messages = [];
                this.messages.push(this.thisMessage);
                const tmpData: FriendMessaging = {
                  messages: this.messages
                };
                this.messagingService.senderMessage(tmpData, this.authService.authState.email, this.users[index].payload.doc.data().email);
                this.messagingService.senderMessage(tmpData, this.users[index].payload.doc.data().email, this.authService.authState.email);
              } else {
                this.messages = messagesData.data().messages;
                this.messages.push(this.thisMessage);
                const tmpData: FriendMessaging = {
                  messages: this.messages
                };
                this.messagingService.senderMessage(tmpData, this.authService.authState.email, this.users[index].payload.doc.data().email);
                this.messagingService.senderMessage(tmpData, this.users[index].payload.doc.data().email, this.authService.authState.email);
              }
              // window.location.reload();
            }, (err => {
              // console.log('Error fetching document: ', err);
            })
            );
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'message',
          value: this.message,
          placeholder: 'message'
        }
      ]
    });
    await alert.present();
  }

  public navigateDetails(index: number) {
    this.router.navigateByUrl('/inbox/inbox-details', {
      state: {
        email: this.users[index].payload.doc.data().email,
        messages: this.messages[index]
      }
    });
  }
}
