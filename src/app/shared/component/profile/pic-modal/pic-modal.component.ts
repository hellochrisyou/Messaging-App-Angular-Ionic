import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase';

import { ImageService } from '../../../../core/service/image.service';

@Component({
  selector: 'app-pic-modal',
  templateUrl: './pic-modal.component.html',
  styleUrls: ['./pic-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PicModalPage implements OnInit {

  private _email: string;

  images: any[];
  imageUrls: string[];
  tabs: string[] = [];
  tabCounter = 1;

  @Input()
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  constructor(
    private navParams: NavParams,
    public imageService: ImageService,
    public modalController: ModalController,
  ) {
    this._email = this.navParams.get('email');
  }

  ngOnInit() {
    this.loadPhotos();
  }
  public closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  public loadPhotos(): void {
    this.imageUrls = [];
    this.imageService
      .getUserImageList(this.email)
      .subscribe(imagesData => {
        console.log("PicModalPage -> loadPhotos -> imagesData", imagesData)
        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this.email}/${image.images[0].photoName}`);

          pathReference.getDownloadURL().then(url => {
            this.imageUrls.push(url);
            this.addTab();
          }).catch(error => {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          });
        }
      });
  }
  public addTab() {
    this.tabs.push('Photo ' + this.tabCounter);
    this.tabCounter++;
  }
}
