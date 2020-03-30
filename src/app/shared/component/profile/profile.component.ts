import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

import { ImageService } from '../../../core/service/image.service';
import { UserService } from '../../../core/service/user.service';
import { ImageUrls } from '../../interface/interface';
import { Proposal } from '../../interface/models';
import { PicModalPage } from './pic-modal/pic-modal.component';

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
    public modalController: ModalController,
    public imageService: ImageService,
    public modalCtrl: ModalController,
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
  async launchPicModal() {
    const modal = await this.modalController.create({
      component: PicModalPage,
      componentProps: {
        'email': this._email
      }
    });
    return await modal.present();
  }

  public closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
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