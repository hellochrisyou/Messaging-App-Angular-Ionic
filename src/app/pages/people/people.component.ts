import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { MessagingService } from '../../core/service/messaging.service';
import { AuthService } from '../../core/service/auth.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { GET_USERS } from '../../shared/utils/user.util';
import { MessageCount } from '../../shared/interface/interface';
import { FriendMessaging, Message } from '../../shared/interface/models';
import { GET_DATE } from '../inbox/inbox.util';

@Component({
  selector: 'people-page',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeoplePage implements OnInit {

  users: any[];
  status = 'people';
  messageCount: MessageCount;
  thisMessage: Message = {};
  tmpMessages: Message[] = [];
  // options: GeolocationOptions;

  constructor(
    public alertCtrl: AlertController,
    private userService: UserService,
    private authService: AuthService,
    private navCtrl: NavController,
    private messagingService: MessagingService,
    public toastController: ToastController,

  ) {
    this.messageCount = {};
    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData; ``
      console.log("PeoplePage -> getUsers -> usersData", usersData)
    });
  }

  ngOnInit() {

  }
  ionViewDidEnter() {
  }

  async sendMessage(index: number) {
    // this.options = {
    //   enableHighAccuracy: false
    // };
    const alert = await this.alertCtrl.create({
      header: 'Send Message to:',
      subHeader: this.users[index].payload.doc.data().displayName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Ok',
          handler: (dataMessage: any) => {

            const messageRef = this.messagingService.getMessages(this.authService.authState.email);
            messageRef.get().subscribe(messagesData => {


              this.thisMessage.sender = this.authService.authState.email;
              this.thisMessage.receiver = this.users[index].payload.doc.data().email;
              this.thisMessage.message = dataMessage.message;
              this.thisMessage.date = GET_DATE();
              this.thisMessage.senderPhotoUrl = this.authService.authState.photoURL;
              this.thisMessage.receiverPhotoURL = this.users[index].payload.doc.data().photoURL;
              this.thisMessage.email = this.authService.authState.email;

              if (!messagesData.exists) {
                this.tmpMessages = [];
                this.tmpMessages.push(this.thisMessage);
                const tmpData: FriendMessaging = {
                  messages: this.tmpMessages
                };
                this.messagingService.senderMessage(tmpData, this.authService.authState.email, this.users[index].payload.doc.data().email);
                this.messagingService.senderMessage(tmpData, this.users[index].payload.doc.data().email, this.authService.authState.email);
              } else {
                this.tmpMessages = messagesData.data().messages;
                this.tmpMessages.push(this.thisMessage);
                const tmpData: FriendMessaging = {
                  messages: this.tmpMessages
                };
                this.messagingService.senderMessage(tmpData, this.authService.authState.email, this.users[index].payload.doc.data().email);
                this.messagingService.senderMessage(tmpData, this.users[index].payload.doc.data().email, this.authService.authState.email);
              }

            }, (err => {
              // console.log('Error fetching document: ', err);
            }), () => {
              // this.messageCount[index]++;
              this.presentToast('Your message has been sent');
            }
            );
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'message',
          placeholder: 'message'
        }
      ]
    });
    await alert.present();
  }
  public navigatePersonProfile(index: number) {
    const navigationExtras = {
      state: {
        email: this.users[index].payload.doc.data().email,
      }
    };
    this.navCtrl.navigateForward(['/shared/profile'], navigationExtras);
  }

  public async presentToast(messageArg: string) {
    const toast = await this.toastController.create({
      header: '',
      message: messageArg,
      position: 'bottom',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Success',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
    toast.present();
  }

}

