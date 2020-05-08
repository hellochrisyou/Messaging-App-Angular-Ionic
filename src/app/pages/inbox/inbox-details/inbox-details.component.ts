import { MessagingStateService } from './../../../core/service/state/messaging.state.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, AlertController, NavController, ToastController } from '@ionic/angular';

import { MessagingService } from '../../../core/service/messaging.service';
import { UserService } from '../../../core/service/user.service';
import { Message, User } from '../../../shared/interface/models';
import { GET_DATE, ORDER_MESSAGES } from '../inbox.util';
import { AuthService } from './../../../core/service/auth.service';
import { EmitService } from './../../../core/service/emit.service';
import { UserStateService } from '../../../core/service/state/user.state.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-inbox-details',
  templateUrl: './inbox-details.component.html',
  styleUrls: ['./inbox-details.component.scss'],
})
export class InboxDetailsComponent implements OnInit {

  data: any[];
  date: string;
  messages: any[] = [];
  messageRef: AngularFirestoreDocument<any>;
  otherUserName: string;
  otherEmail: string;
  sender: string;
  thisMessage: Message = {};
  tmpMessages: Message[] = [];
  users: User[];

  messageGroup: FormGroup;

  messagingTrackFn = (i, message) => message.email;

  public nameControl(): AbstractControl {
    return this.messageGroup.get('nameCtrl');
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
    public fb: FormBuilder,
    private userStateService: UserStateService,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    public emitService: EmitService,
    public messagingService: MessagingService,
    public toastController: ToastController,
    public userService: UserService,
    public messagingStateService: MessagingStateService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.otherUserName = this.router.getCurrentNavigation().extras.state.displayName;
        this.otherEmail = this.router.getCurrentNavigation().extras.state.email;
      }
    });
  }


  public ionViewDidEnter(): void {
    this.messagingStateService.setMessageUser(this.authService.authState.email, this.otherEmail);
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.messageGroup = this.fb.group({
      nameCtrl: ['', Validators.required],
    });
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

  public sendMessage(): void {
    this.thisMessage.email = this.authService.authState.email;
    this.thisMessage.message = this.nameControl().value;
    this.thisMessage.date = GET_DATE();
    this.thisMessage.sender = this.authService.authState.email;
    this.thisMessage.receiver = this.otherEmail;
    this.messagingService.sendMessage(this.thisMessage, this.authService.authState.email, this.otherEmail);
    this.messagingService.sendMessage(this.thisMessage, this.otherEmail, this.authService.authState.email);
    this.userStateService.setPartitionedUsers();

    this.successToast('Your message has been sent');
    this.messageGroup.get('nameCtrl').setValue('');
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
