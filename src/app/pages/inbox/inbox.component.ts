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

  users: any[];
  status = 'inbox';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private userService: UserService,
    public alertCtrl: AlertController,
    public emitService: EmitService, private changeDetector: ChangeDetectorRef,

  ) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData; ``
      console.log("PeoplePage -> getUsers -> usersData", usersData)
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
