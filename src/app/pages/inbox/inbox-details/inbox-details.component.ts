import { MessagingStateService } from './../../../core/service/state/messaging.state.service';
import { AfterContentInit, Component } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { ActionSheetController, AlertController, NavController, ToastController } from '@ionic/angular';

import { MessagingService } from '../../../core/service/messaging.service';
import { UserService } from '../../../core/service/user.service';
import { Message, User } from '../../../shared/interface/models';
import { GET_DATE, ORDER_MESSAGES } from '../inbox.util';
import { AuthService } from './../../../core/service/auth.service';
import { EmitService } from './../../../core/service/emit.service';

@Component({
  selector: 'app-inbox-details',
  templateUrl: './inbox-details.component.html',
  styleUrls: ['./inbox-details.component.scss'],
})
export class InboxDetailsComponent implements AfterContentInit {


  data: any[];
  date: string;
  messages: any[] = [];
  messageRef: AngularFirestoreDocument<any>;
  otherEmail: string;
  sender: string;
  thisMessage: Message = {};
  tmpMessages: Message[] = [];
  users: User[];

  messagingTrackFn = (i, message) => message.email;

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    public emitService: EmitService,
    public geolocation: Geolocation,
    public messagingService: MessagingService,
    public toastController: ToastController,
    public userService: UserService,
    public messagingStateService: MessagingStateService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.otherEmail = this.router.getCurrentNavigation().extras.state.email;
      }
    });
  }

  public ionViewDidEnter(): void {
  }

  public ngAfterContentInit(): void {
  }

  // public navigateMaps(index: number) {
  //   const navigationExtras: NavigationExtras = {
  //     state: {
  //       lat: this.messages[index].messages[0].lat,
  //       lgn: this.messages[index].messages[0].lgn
  //     }
  //   };
  //   this.navCtrl.navigateForward(['/maps'], navigationExtras);
  // }
  // async optionActionSheet(index: number) {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Options',
  //     buttons: [, {
  //       text: 'Location',
  //       icon: 'map',
  //       handler: () => {
  //         this.navigateMaps(index);
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

  async sendMessage() {

    const alert = await this.alertCtrl.create({
      header: 'Send Message to:',
      // subHeader: this.users[index].payload.doc.data().displayName,
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
            this.thisMessage.email = this.authService.authState.email;
            this.thisMessage.message = dataMessage.message;
            this.thisMessage.date = GET_DATE();
            this.thisMessage.sender = this.authService.authState.email;
            this.thisMessage.receiver = this.otherEmail;
            this.messagingService.sendMessage(this.thisMessage, this.authService.authState.email, this.otherEmail);
            this.messagingService.sendMessage(this.thisMessage, this.otherEmail, this.authService.authState.email);
            this.successToast('Your message has been sent');
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


  public async successToast(messageArg: string) {
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
  }
}
