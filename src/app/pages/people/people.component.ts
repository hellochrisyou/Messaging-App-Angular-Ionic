import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { MessagingService } from '../../core/service/messaging.service';
import { AuthService } from '../../core/service/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'people-page',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeoplePage implements OnInit {

  users: any[];

  constructor(
    private userService: UserService,
    private messagingService: MessagingService,
    private authService: AuthService,
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(usersData => {

      this.users = usersData;
      this.users.forEach((item, index) => {
        this.messagingService
          .getUserMessages(this.authService.authState.email, item.payload.doc.data().email)
          .subscribe(userMessageData => {
            if (userMessageData.length) {
              if (item.payload.doc.data().email === userMessageData[0].messages[0].sender || item.payload.doc.data().email === userMessageData[0].messages[0].receiver) {
                this.users.splice(index, 1);
              }
            } else {
              this.users.splice(index, 1);
            }
          });
        console.log('thisUsers', this.users);
      });
    });
  }

  public navigatePersonProfile(index: number) {
    const navigationExtras = {
      state: {
        email: this.users[index].payload.doc.data().email,
      }
    };
    this.navCtrl.navigateForward(['/shared/profile'], navigationExtras);
  }
}

