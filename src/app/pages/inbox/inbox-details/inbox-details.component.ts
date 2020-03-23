import { EmitService } from './../../../core/service/emit.service';
import { AuthService } from './../../../core/service/auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../../core/service/user.service';
import { Message, FriendMessaging } from '../../../shared/models';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MessagingService } from '../../../core/service/messaging.service';
import { AlertController } from '@ionic/angular';
import { GET_DATE } from '../inbox.util';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-inbox-details',
  templateUrl: './inbox-details.component.html',
  styleUrls: ['./inbox-details.component.scss'],
})
export class InboxDetailsComponent implements OnInit {

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  messageRef: AngularFirestoreDocument<any>;
  myEmail: string;
  otherEmail: string;
  message: Message;
  messages: any[];
  thisMessage: Message = {};
  senderMessages: Message[] = [];
  recipientMessages: Message[] = [];
  users: any[];
  date: string;
  sender: string;
  receiver: string;
  email: string;
  senderPhotoURL: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private authService: AuthService,
    public userService: UserService,
    public alertCtrl: AlertController, public messagingService: MessagingService,
    private changeDetector: ChangeDetectorRef,
    public emitService: EmitService,
    private afs: AngularFirestore,
  ) { }
  ionViewDidEnter() {
    this.messageRef = this.afs.doc(`messaging/${this.authService.authState.email}`);

  }

  ngOnInit() {
    this.otherEmail = this.router.getCurrentNavigation().extras.state.email;
    this.myEmail = this.authService.authState.email;
    this.messages = [];
    this.messages = this.router.getCurrentNavigation().extras.state.messages;
    this.date = this.messages[0].messages[0].date;
    this.email = this.messages[0].messages[0].email;
    this.sender = this.messages[0].messages[0].sender;
    console.log('sender', this.sender);
    console.log('myemail', this.myEmail);
    this.receiver = this.messages[0].messages[0].receiver;
    this.senderPhotoURL = this.messages[0].messages[0].receiverPhotoURL;
    console.log('senderphotourl', this.senderPhotoURL);
    console.log('ngoninit', this.messages[0].messages[0]);
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
              const tmpUser = {
                uid: this.authService.authState.uid,
                displayName: this.authService.authState.displayName,
                email: this.authService.authState.email,
                phoneNumber: this.authService.authState.phoneNumber,
                photoURL: this.authService.authState.photoURL,
                country: this.authService.authState.country,
              }
              this.userService.updateUser(tmpUser);
              this.emitService.refreshMessages();
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


}
