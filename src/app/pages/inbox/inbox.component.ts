import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';

import { AuthService } from '../../core/service/auth.service';
import { EmitService } from '../../core/service/emit.service';
import { MessagingService } from '../../core/service/messaging.service';
import { UserService } from '../../core/service/user.service';
import { FriendMessaging, Message, User } from '../../shared/interface/models';
import { GET_DATE } from './inbox.util';
import { MessageCount } from '../../shared/interface/interface';

declare var google: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {

  messageCount: MessageCount;
  messages: Message[] = [];
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
    this.messageCount = {};

    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData;
      this.users.forEach((user, index) => {
        this.messagingService.getUserMessages(this.authService.authState.email, user.email).subscribe(message => {
          console.log("InboxComponent -> getUsers -> message", message)
          if (message.length > 0) {
            this.messageCount[index] = message.length;
            this.messageCount.userName = user.email;
            console.log('thismessagecout', this.messageCount);

          } else {
            this.messageCount[index] = 0;
            console.log('thismessagecout', this.messageCount);
          }
        });
      });
    });
  }



  public navigateDetails(index: number) {
    const navigationExtras = {
      state: {
        email: this.users[index].payload.doc.data().email,
      }
    };
    this.navCtrl.navigateForward(['/inbox/inbox-details'], navigationExtras);
  }

  public navigateProfile(index: number) {
    const navigationExtras = {
      state: {
        email: this.users[index].payload.doc.data().email,
      }
    };
    this.navCtrl.navigateForward(['/shared/profile'], navigationExtras);
  }
}
