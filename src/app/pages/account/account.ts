import { PicModalPage } from './../../shared/component/profile/pic-modal/pic-modal.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';

import { AuthService } from '../../core/service/auth.service';
import { ImageService } from '../../core/service/image.service';
import { UserService } from '../../core/service/user.service';
import { UserData } from '../../providers/user-data';
import { Image, User } from '../../shared/interface/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements OnInit, AfterViewInit {

  ages: number[] = [];
  religions: string[] = ['Atheism', 'Buddhism', 'Christianity', 'Catholicism', 'Hinduism', 'Islam', 'Judaism', 'Other'];
  kidsOptions: string[] = ['Yes', 'No', 'Maybe', 'No opinion'];
  compareWith: any;
  user: any = {};
  userRef: AngularFirestoreDocument<any>;
  username: string;
  public selectedFile: File;
  thisImage: Image = {};
  messageRef: AngularFirestoreDocument<any>;
  imageRef: AngularFirestoreDocument<any>;
  tmpImages: any;
  images: any[] = [];
  imageUrls: string[];
  file: any = {};
  selectedAge: number;
  selectedReligion: string;
  selectedKids: string;
  imageNameRef: any;

  private _authState: any = null;

  imagesTrackFn = (i, image) => image;


  ageActionSheetOptions: any = {
    header: 'Select your age'
  };
  religionActionSheetOptions: any = {
    header: 'Select your religion'
  };
  kidsActionSheetOptions: any = {
    header: 'Select your religion'
  };


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

  ngOnInit(): void {
    $('#file-upload').change(function () {
      const i = $(this).prev('label').clone();
      const file = $('#file-upload')[0].files[0].name;
      $(this).prev('label').text(file);
    });

    for (let i = 18; i < 99; i++) {
      this.ages.push(i);
    }

    this.userRef = this.userService.getUser(this.authService.authState.email);
    this.userRef.get().subscribe(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.user = doc.data();
      }
      this.loadPhotos();
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
    this.imageUrls = [];
    this.imageService
      .getUserImageList(this.authService.authState.email)
      .subscribe(imagesData => {
        console.log("PicModalPage -> loadPhotos -> imagesData", imagesData)
        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this.authService.authState.email}/${image.image.photoName}`);

          pathReference.getDownloadURL().then(url => {
            this.imageUrls.push(url);
            console.log("AccountPage -> loadPhotos -> this.imageUrls$", this.imageUrls)
          }).catch(error => {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          });
        }
      });
  }

  public deleteImage(index: number): void {
    this.imageNameRef = this.imageService.getImages(this.authService.authState.email).subscribe(payload => {
      console.log('AccountPage -> deleteImage -> payload', payload[index].payload.doc.data().image.photoName);
      this.imageService.deleteImage(payload[index].payload.doc.data().image.photoName, this.authService.authState.email);

      const storageRef = firebase.storage().ref();
      const deleteRef = storageRef.child(`images/${this.user.email}/${this.images[index].image.photoName}`);
      // Delete the file
      deleteRef.delete().then(function () {
        // File deleted successfully
        // this.images.splice(index, 1);
      }).catch(error => {
        console.log('AccountPage -> deleteImage -> error)', error);
      });
    })
  }


  async launchPicModal() {
    const modal = await this.modalController.create({
      component: PicModalPage,
      componentProps: {
        email: this.authService.authState.email
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
              // this.imageUrls.push(url);
            }).catch(function (error) {
              console.log('AccountPage -> loadPhotos -> error', error);
              // Handle any errors
            });
            const tmpImg: Image = {
              photoName: this.selectedFile.name
            };
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

  async updateAvatar() {
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

  async updateUsername() {
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
  async updateTitle() {
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

  public updateAge(): void {
    this.user.age = this.selectedAge;
    this.updateUserData(this.user);
  };

  public updateReligion(): void {
    this.user.religion = this.selectedReligion;
    this.updateUserData(this.user);
  };
  public updateHaveKids(): void {
    this.user.haveKids = this.selectedKids;
    this.updateUserData(this.user);
  };

  async updateHobbies() {
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
  async updateDescription() {
    const alert = await this.alertCtrl.create({
      header: 'Update Description',
      cssClass: 'globalAlert',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.user.description = data.description;
            this.updateUserData(this.user);
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


  // updatePassword() {
  //   console.log('Clicked to update password');
  // }

  async existsAlert() {
    const alert = await this.alertController.create({
      header: 'Image Upload Error',
      message: 'Image already exists'
    });

    await alert.present();
  }

}
