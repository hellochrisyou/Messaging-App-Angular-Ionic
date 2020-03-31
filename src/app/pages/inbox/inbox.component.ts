import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';

import { AuthService } from '../../core/service/auth.service';
import { EmitService } from '../../core/service/emit.service';
import { MessagingService } from '../../core/service/messaging.service';
import { ProposalService } from '../../core/service/proposal.service';
import { UserService } from '../../core/service/user.service';
import { ProfileModal } from '../../shared/component/profile/profile.component';
import { Message, Proposal } from '../../shared/interface/models';
import { GET_DATE, GET_TODAY_DATE } from './inbox.util';
import { UserStateService } from '../../core/service/state/user.state.service';

declare var google: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {

  thisProposal: Proposal = {};
  status = 'inbox';
  thisMessage: Message;
  tmpMessages: Message[] = [];
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private messagingService: MessagingService,
    private userStateService: UserStateService,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public proposalService: ProposalService,
    public modalController: ModalController,
    public emitService: EmitService, private changeDetector: ChangeDetectorRef,

  ) { }

  ngOnInit() {

  }
  ionViewDidEnter() {

  }

  public navigateMessages(index: number) {

    const navigationExtras = {
      state: {
        email: this.userStateService.users[index].email,
      }
    };
    this.navCtrl.navigateForward(['/inbox/inbox-details'], navigationExtras);
  }

  public navigateProfile(index: number) {
    // const navigationExtras = {
    //   state: {
    //     email: this.users[index].email,
    //   }
    // };
    // this.navCtrl.navigateForward(['/shared'], navigationExtras);
    this.presentModal(index);
  }

  async presentModal(index: number) {
    const modal = await this.modalController.create({
      component: ProfileModal,
      cssClass: 'profileModal',
      componentProps: {
        'email': this.userStateService.users[index].email
      },
    });
    return await modal.present();
  }

  async sendMessage(index: number) {

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
            this.thisMessage.message = dataMessage.message;
            this.thisMessage.date = GET_DATE();
            this.thisMessage.email = this.authService.authState.email;
            this.messagingService.sendMessage(this.thisMessage, this.authService.authState.email, this.userStateService.users[index].email);
            this.messagingService.sendMessage(this.thisMessage, this.userStateService.users[index].email, this.authService.authState.email);
            this.presentToast('Your message has been sent');
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

  async submitProposal(index: number) {
    const todaysDate = GET_TODAY_DATE();

    const alert = await this.alertCtrl.create({
      header: 'Send Proposal to:',
      subHeader: this.userStateService.users[index].displayName,
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
          handler: (dataProposal: any) => {
            this.thisProposal.select = 'select';
            this.thisProposal.reject = 'reject';
            this.thisProposal.street = dataProposal.street;
            this.thisProposal.city = dataProposal.city;
            this.thisProposal.state = dataProposal.state;
            this.thisProposal.zipcode = dataProposal.zipcode;
            this.thisProposal.proposalDate = dataProposal.proposalDate;
            this.thisProposal.status = 'pending';

            this.proposalService.sendProposal(this.thisProposal, this.authService.authState.email, this.userStateService.users[index].email);
            this.presentToast('Your proposal has been sent');
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'street',
          placeholder: 'Street'
        },
        {
          type: 'text',
          name: 'city',
          placeholder: 'City'
        },
        {
          type: 'text',
          name: 'state',
          placeholder: 'State'
        },
        {
          type: 'number',
          name: 'zipcode',
          min: 0,
          placeholder: 'Zipcode'
        },
        {
          name: 'proposalDate',
          type: 'date',
          min: todaysDate,
          // max: ''
        },
      ]
    });
    await alert.present();
  }
}
