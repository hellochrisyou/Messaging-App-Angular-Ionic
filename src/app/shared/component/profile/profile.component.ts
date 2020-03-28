import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

import { AuthService } from '../../../core/service/auth.service';
import { ImageService } from '../../../core/service/image.service';
import { ProposalService } from '../../../core/service/proposal.service';
import { UserService } from '../../../core/service/user.service';
import { GET_TODAY_DATE } from '../../../pages/inbox/inbox.util';
import { ImageUrls } from '../../interface/interface';
import { Proposal } from '../../interface/models';
import { PicModal } from '../pic/pic.component';

@Component({
  selector: 'shared-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileModal implements OnInit {

  selected = new FormControl(0);
  otherUser: any;
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
    private authService: AuthService,
    public imageService: ImageService,
    public modalCtrl: ModalController,
    private proposalService: ProposalService,
    public toastController: ToastController,
    public navParams: NavParams,
    private userService: UserService

  ) {
    this._email = navParams.get('email');
  }


  ngOnInit() {
    this.loadPhotos();
    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData;
      this.users.forEach((user, index) => {
        if (user.email === this._email) {
          this.otherUser = user;
          console.log("SharedProfilePage -> ngOnInit ->  this.otherUser", this.otherUser)
        }
      });
    });
  }
  async launchPicModal(index: number) {
    const modal = await this.modalCtrl.create({
      component: PicModal,
      componentProps: {
        'email': this.otherUser.email
      },
      cssClass: 'profile-modal'
    });
    return await modal.present();
  }
  public loadPhotos(): void {
    this.imageService
      .getUserImageList(this._email)
      .subscribe(imagesData => {
        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this._email}/${image.images[0].photoName}`);

          pathReference.getDownloadURL().then(url => {
            this.imageUrls.push(url);
          }).catch(function (error) {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          });
        }
      });
  }

  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
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