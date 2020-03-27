import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Proposal } from '../../interface/models';
import { ImageUrls } from '../../interface/interface';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { ImageService } from '../../../core/service/image.service';
import { UserService } from '../../../core/service/user.service';
import { ProposalService } from '../../../core/service/proposal.service';
import * as firebase from 'firebase';
import { GET_TODAY_DATE } from '../../../pages/inbox/inbox.util';

@Component({
  selector: 'shared-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class SharedProfilePage implements OnInit {

  selected = new FormControl(0);
  otherUser: any;
  otherEmail: string;
  users: any[];
  thisProposal: Proposal = {};
  images: any[];
  imageUrls: ImageUrls[] = [];

  private _email: string;

  @Input()
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }


  constructor(
    public alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public imageService: ImageService,
    private router: Router,
    private userService: UserService,
    private proposalService: ProposalService,
    public toastController: ToastController,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.otherEmail = this.router.getCurrentNavigation().extras.state.email;

        this.userService.getUsers().subscribe(usersData => {
          this.users = usersData;
          this.otherUser = this.users.find(user => user.payload.doc.data().email === this.otherEmail);
          console.log("InboxProfileComponent -> this.otherUser", this.otherUser.payload.doc.data())
        });
      }
    });
  }


  ngOnInit() {
    this.loadPhotos();
  }

  public loadPhotos(): void {
    this.imageService
      .getUserImageList(this.otherEmail)
      .subscribe(imagesData => {
        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this.otherEmail}/${image.images[0].photoName}`);

          pathReference.getDownloadURL().then(url => {
            this.imageUrls.push(url);
            console.log('AccountPage -> loadPhotos -> url', this.imageUrls);

          }).catch(function (error) {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          });
        }
      });
  }

  async sendProposal() {
    const todaysDate = GET_TODAY_DATE();

    const alert = await this.alertCtrl.create({
      header: 'Send Proposal to:',
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
          handler: (dataProposal: any) => {
            this.thisProposal.select = 'select';
            this.thisProposal.reject = 'reject';
            this.thisProposal.street = dataProposal.street;
            this.thisProposal.city = dataProposal.city;
            this.thisProposal.state = dataProposal.state;
            this.thisProposal.zipcode = dataProposal.zipcode;
            this.thisProposal.proposalDate = dataProposal.proposalDate;
            this.thisProposal.status = 'pending';
            this.thisProposal.sender = this.authService.authState.email;
            this.thisProposal.recipient = this.otherUser.payload.doc.data().email;

            this.proposalService.sendProposal(this.thisProposal);
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