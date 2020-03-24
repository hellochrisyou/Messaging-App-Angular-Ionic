import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';

import { AuthService } from '../../core/service/auth.service';
import { EmitService } from '../../core/service/emit.service';
import { MessagingService } from '../../core/service/messaging.service';
import { UserService } from '../../core/service/user.service';
import { FriendMessaging, Message, User } from './../../shared/models';
import { GET_DATE } from './inbox.util';

declare var google: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {

  messageCount: number[] = [];
  messages: Message[] = [];
  user: User;
  users: any[];

  constructor(
    private authService: AuthService,
    private messagingService: MessagingService,
    private navCtrl: NavController,
    private userService: UserService,
    public alertCtrl: AlertController,
    public emitService: EmitService, private changeDetector: ChangeDetectorRef,

  ) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.getUsers();
  }

  public getUsers() {
    // Initialize new memory
    this.messages = [];
    this.messageCount = [];

    this.userService.getUsers().subscribe(usersData => {

      this.users = usersData;
      this.users.forEach((item, index) => {
        this.messagingService
          .getUserMessages(this.authService.authState.email, item.payload.doc.data().email)
          .subscribe(userMessageData => {
            if (userMessageData.length) {
              if (item.payload.doc.data().email === userMessageData[0].messages[0].sender || item.payload.doc.data().email === userMessageData[0].messages[0].receiver) {
                this.messageCount[index] = userMessageData.length;
              }
            } else {
              this.messageCount[index] = 0;
            }
          });
      });
    });
  }



  public navigateDetails(index: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        email: this.users[index].payload.doc.data().email,
      }
    };
    this.navCtrl.navigateForward(['/inbox/inbox-details'], navigationExtras);
  }


}
