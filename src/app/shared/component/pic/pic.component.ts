import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import * as firebase from 'firebase';

import { ImageService } from '../../../core/service/image.service';
import { ImageUrls } from '../../interface/interface';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss'],
})
export class PicModal implements OnInit {

  private _email: string;

  tabs: string[] = [];
  tabCounter = 1;

  images: any[];
  imageUrls: ImageUrls = {
    imagePath: [] = []
  };

  @Input()
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  constructor(
    public navParams: NavParams,
    public imageService: ImageService,
  ) {
    this._email = navParams.get('email');
  }

  ngOnInit() {
    this.loadPhotos();

  }

  public loadPhotos(): void {
    this.imageUrls = {
      imagePath: []
    };
    this.imageService
      .getUserImageList(this._email)
      .subscribe(imagesData => {
        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this._email}/${image.images[0].photoName}`);

          pathReference.getDownloadURL().then(url => {
            this.imageUrls.imagePath.push(url);
            this.addTab();
          }).catch(error => {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          })
        }
      });
  }

  public addTab() {
    this.tabs.push('Photo ' + this.tabCounter);
    this.tabCounter++;
  }
}
