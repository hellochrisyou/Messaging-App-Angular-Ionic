import { PicModalPage } from './../../shared/component/profile/pic-modal/pic-modal.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

import { AuthService } from '../../core/service/auth.service';
import { ImageService } from '../../core/service/image.service';
import { UserService } from '../../core/service/user.service';
import { UserData } from '../../providers/user-data';
import { Image, User } from '../../shared/interface/models';

declare var $: any;

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements OnInit, AfterViewInit {

  public get authState(): any {
    return this._authState;
  }
  public set authState(value: any) {
    this._authState = value;
  }

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    public authService: AuthService,
    private afStorage: AngularFireStorage,
    public imageService: ImageService,
    public alertController: AlertController,
    public router: Router,
    public userData: UserData,
    public userService: UserService,
    public modalController: ModalController,
  ) { }

  user: any = {};
  userRef: AngularFirestoreDocument<any>;
  username: string;
  public selectedFile: File;
  thisImage: Image = {};
  messageRef: AngularFirestoreDocument<any>;
  imageRef: AngularFirestoreDocument<any>;
  tmpImages: any;
  images: any[];
  imageUrls: string[];
  file: any = {};

  private _authState: any = null;

  async;
  ngOnInit(): void {
    $('#file-upload').change(function () {
      const i = $(this).prev('label').clone();
      const file = $('#file-upload')[0].files[0].name;
      $(this).prev('label').text(file);
    });



    this.userRef = this.userService.getUser(this.authService.authState.email);
    this.userRef.get().subscribe(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.user = doc.data();
        this.loadPhotos();
      }
    }, (err => {
      // console.log('Error fetching document: ', err);
    }));
  }

  ngAfterViewInit() {
    // this.getUsername();
  }

  onFileChanged($event) {
    this.selectedFile = $('#file-upload')[0].files[0];
  }


  public loadPhotos(): void {
    this.images = [];
    this.imageUrls = [];

    this.imageService
      .getUserImageList(this.authService.authState.email)
      .subscribe(imagesData => {
        this.images = imagesData;
        console.log("AccountPage -> loadPhotos -> imagesData", imagesData)
        for (const image of this.images) {
          console.log("AccountPage -> loadPhotos -> image", image)
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this.authService.authState.email}/${image.photoName}`);
          pathReference.getDownloadURL().then(url => {
            const urlExist = this.imageUrls.filter(item => url === item);
            if (urlExist.length !== 1) {
              this.imageUrls.push(url);
            }

          }).catch(function (error) {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          });
        }
      });
  }

  public deleteImage(index: number): void {
    const imageNameRef = this.imageService.getImages(this.authService.authState.email).subscribe(imagesData => {
      this.imageService.deleteImage(imagesData[index].payload.doc.id, this.authService.authState.email);

      const storageRef = firebase.storage().ref();
      const deleteRef = storageRef.child(`images/${this.user.email}/${this.images[index].images[0].photoName}`);
      // Delete the file
      deleteRef.delete().then(function () {
        // File deleted successfully
        this.images.splice(index, 1);
        this.loadPhotos();
      }).catch(function (error) {
        console.log('AccountPage -> deleteImage -> error)', error);

      });
    });
    // delete document in collection

  }

  async launchPicModal() {
    const modal = await this.modalController.create({
      component: PicModalPage,
      componentProps: {
        'email': this.authService.authState.email
      }
    });
    return await modal.present();
  }

  async updatePicture() {
    const alert = await this.alertCtrl.create({
      header: 'Change Picture',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.photoURL = data.photoUrl;
            this.userService.updateUser(this.user);
          }
        }
      ],
      inputs: [
        {
          type: 'url',
          name: 'photoUrl',
          placeholder: 'photoUrl'
        }
      ]
    });
    await alert.present();
  }


  public onUpload(): void {
    if (this.images.find(image => image.photoName === this.selectedFile.name)) {
      this.existsAlert();
      return;
    } else {
      this.tmpImages = [];

      const storageRef = firebase.storage().ref();
      const uploadImagesRef = storageRef.child(`images/${this.user.email}/${this.selectedFile.name}`);
      uploadImagesRef.put(this.selectedFile).then(snapshot => {
        console.log('Uploaded a blob or file1 (snapshot): ', snapshot);

        this.imageRef = this.imageService.getTmpImages(this.authService.authState.email);
        this.imageRef.get().subscribe(imageData => {

          this.thisImage.photoName = this.selectedFile.name;

          if (!imageData.exists) {
            // this.tmpImages.push(this.thisImage);
            // const tmpData: ImageList = {
            //   images: this.tmpImages
            // };
            // this.imageService.CreateImageList(tmpData, this.authService.authState.email);
          } else {
            // this.tmpImages = imageData.data().images;
            // this.tmpImages.push(this.thage);
            // const tmpData: ImageList = {
            //   images: this.tmpImages
            // };
            // this.imageService.CreateImagisImeList(tmpData, this.authService.authState.email);

            const storage = firebase.storage();
            const pathReference = storage.ref(`images/${this.authService.authState.email}/${this.selectedFile.name}`);
            pathReference.getDownloadURL().then(url => {
              this.imageUrls.push(url);
            }).catch(function (error) {
              console.log('AccountPage -> loadPhotos -> error', error);
              // Handle any errors
            });
            const tmpImg: Image = {
              photoName: this.selectedFile.name
            }
            this.imageService.addImageList(tmpImg, this.authService.authState.email);
          }
        });
      });
    }
  }

  public updateUserData(user) {
    // Sets user data to firestore on login
    const data: User = {
      uid: this.authService.authState.uid,
      email: this.authService.authState.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      title: user.title,
      age: user.age,
      religion: user.religion,
      haveKids: user.haveKids,
      hobbies: user.hobbies,
      description: user.description
    };
    return this.userRef.set(data, { merge: true });
  }
  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing

  async changeAvatar() {
    const alert = await this.alertCtrl.create({
      header: 'Change Profile Picture',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.photoURL = data.url;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'url',
          placeholder: 'url'
        }
      ]
    });
    await alert.present();
  }

  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.displayName = data.username;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }
  async changeTitle() {
    const alert = await this.alertCtrl.create({
      header: 'Change Title',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.title = data.title;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'title'
        }
      ]
    });
    await alert.present();
  }

  async changeAge() {
    const alert = await this.alertCtrl.create({
      header: 'Change Age',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.age = data.age;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'age',
          placeholder: 'age'
        }
      ]
    });
    await alert.present();
  }
  async changeReligion() {
    const alert = await this.alertCtrl.create({
      header: 'Change Religion',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.religion = data.religion;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'religion',
          placeholder: 'Religion'
        }
      ]
    });
    await alert.present();
  }
  async changeHaveKids() {
    const alert = await this.alertCtrl.create({
      header: 'Change Have Kids',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.haveKids = data.haveKids;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'haveKids',
          placeholder: 'Have Kids?'
        }
      ]
    });
    await alert.present();
  }
  async changeHobbies() {
    const alert = await this.alertCtrl.create({
      header: 'Change Hobbies',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.hobbies = data.hobbies;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'textarea',
          name: 'hobbies',
          placeholder: 'Hobbies'
        }
      ]
    });
    await alert.present();
  }
  async changeDescription() {
    const alert = await this.alertCtrl.create({
      header: 'Change Description',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.description = data.description;
            this.updateUserData(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'textarea',
          name: 'description',
          placeholder: 'Description'
        }
      ]
    });
    await alert.present();
  }
  private getUsername() {
    this.username = this.authService.authState.displayName;
  }


  // changePassword() {
  //   console.log('Clicked to change password');
  // }

  public logout() { }

  public support() {
    this.navCtrl.navigateForward('/support');
  }

  async existsAlert() {
    const alert = await this.alertController.create({
      header: 'Image Upload Error',
      message: 'Image already exists'
    });

    await alert.present();
  }

  // public upload(event: any) {
  //   this.afStorage.upload('/upload/', event.target.files[0]);
  // }
}
