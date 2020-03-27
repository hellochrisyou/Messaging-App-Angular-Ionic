import { User } from '../../../shared/interface/models';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, AlertController, NavController, ToastController } from '@ionic/angular';

import { MessagingService } from '../../../core/service/messaging.service';
import { UserService } from '../../../core/service/user.service';
import { Message, FriendMessaging } from '../../../shared/interface/models';
import { ORDER_MESSAGES, GET_DATE } from '../inbox.util';
import { AuthService } from './../../../core/service/auth.service';
import { EmitService } from './../../../core/service/emit.service';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-inbox-details',
  templateUrl: './inbox-details.component.html',
  styleUrls: ['./inbox-details.component.scss'],
})
export class InboxDetailsComponent implements AfterContentInit {

  data: any[];
  date: string;
  message: string;
  messages: any[] = [];
  messageRef: AngularFirestoreDocument<any>;
  myEmail: string;
  options: GeolocationOptions;
  otherUser: any;
  receiver: string;
  sender: string;
  senderPhotoURL: string;
  thisMessage: Message = {};
  tmpMessages: Message[] = [];
  users: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private navCtrl: NavController,
    private router: Router,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    public emitService: EmitService,
    public geolocation: Geolocation,
    public messagingService: MessagingService,
    public toastController: ToastController,
    public userService: UserService,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const otherEmail = this.router.getCurrentNavigation().extras.state.email;

        this.userService.getUsers().subscribe(usersData => {
          this.users = usersData;
          this.otherUser = this.users.find(user => user.payload.doc.data().email === otherEmail);
          this.getMessages(this.otherUser.payload.doc.data().email);
        });
      }
    });
  }
  ionViewDidEnter() {
  }

  ngAfterContentInit(): void {
    this.myEmail = this.authService.authState.email;
  }

  public getMessages(otherEmail: string): void {
    this.messagingService
      .getUserMessages(this.myEmail, otherEmail)
      .subscribe(userMessageData => {
        this.messages = userMessageData;
        console.log("InboxDetailsComponent -> ngAfterViewOnInit ->  this.messages", this.messages);
        this.messages = ORDER_MESSAGES(this.messages);
        this.date = this.messages[0].messages[0].date;
        this.sender = this.messages[0].messages[0].sender;
        this.receiver = this.messages[0].messages[0].receiver;
        this.senderPhotoURL = this.messages[0].messages[0].receiverPhotoURL;
      });
  }

  public navigateMaps(index: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        lat: this.messages[index].messages[0].lat,
        lgn: this.messages[index].messages[0].lgn
      }
    };
    this.navCtrl.navigateForward(['/maps'], navigationExtras);
  }

  async optionActionSheet(index: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [, {
        text: 'Location',
        icon: 'map',
        handler: () => {
          this.navigateMaps(index);
        }
      }]
    });
    await actionSheet.present();
  }

  async sendMessage() {
    this.options = {
      enableHighAccuracy: false
    };
    const alert = await this.alertCtrl.create({
      header: 'Send Message to:',
      subHeader: this.otherUser.payload.doc.data().displayName,
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

            this.messageRef = this.messagingService.getMessages(this.authService.authState.email);
            this.messageRef.get().subscribe(messagesData => {

              this.geolocation.getCurrentPosition(this.options).then((pos: any) => {
                this.thisMessage.lat = pos.coords.latitude;
                this.thisMessage.lgn = pos.coords.longitude;

                this.thisMessage.sender = this.authService.authState.email;
                this.thisMessage.receiver = this.otherUser.payload.doc.data().email;
                this.thisMessage.message = dataMessage.message;
                this.thisMessage.date = GET_DATE();
                this.thisMessage.senderPhotoUrl = this.authService.authState.photoURL;
                this.thisMessage.receiverPhotoURL = this.otherUser.payload.doc.data().photoURL;
                this.thisMessage.email = this.authService.authState.email;

                if (!messagesData.exists) {
                  this.tmpMessages = [];
                  this.tmpMessages.push(this.thisMessage);
                  const tmpData: FriendMessaging = {
                    messages: this.tmpMessages
                  };
                  this.messagingService.senderMessage(tmpData, this.authService.authState.email, this.otherUser.payload.doc.data().email);
                  this.messagingService.senderMessage(tmpData, this.otherUser.payload.doc.data().email, this.authService.authState.email);
                } else {
                  this.tmpMessages = messagesData.data().messages;
                  this.tmpMessages.push(this.thisMessage);
                  const tmpData: FriendMessaging = {
                    messages: this.tmpMessages
                  };
                  this.messagingService.senderMessage(tmpData, this.authService.authState.email, this.otherUser.payload.doc.data().email);
                  this.messagingService.senderMessage(tmpData, this.otherUser.payload.doc.data().email, this.authService.authState.email);
                }
              });
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
          value: this.message,
          placeholder: 'message'
        }
      ]
    });
    await alert.present();
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

  public reloadItems(refresher): void {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.target.complete();
    }, 2000);
    this.getMessages(this.otherUser.payload.doc.data().email);
  }
}
