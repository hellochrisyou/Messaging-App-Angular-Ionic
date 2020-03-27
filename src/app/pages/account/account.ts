import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';

import { AuthService } from '../../core/service/auth.service';
import { ImageService } from '../../core/service/image.service';
import { UserService } from '../../core/service/user.service';
import { UserData } from '../../providers/user-data';
import { ImageUrls } from '../../shared/interface/interface';
import { Image, ImageList, User } from '../../shared/interface/models';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements OnInit, AfterViewInit {

  user: any = {};
  userRef: AngularFirestoreDocument<any>;
  username: string;
  selectedFile: File;
  thisImage: Image = {}; messageRef: AngularFirestoreDocument<any>;
  imageRef: AngularFirestoreDocument<any>;
  tmpImages: any;
  images: any[];
  imageUrls: ImageUrls[] = [];
  file: any = {};


  private _authState: any = null;

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
  ) { }

  ngOnInit(): void {
    this.userRef = this.userService.getThisUser(this.authService.authState.email);

    this.userRef.get().subscribe(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.user = doc.data();
      }
    }, (err => {
      // console.log('Error fetching document: ', err);
    }));
    this.loadPhotos();
  }

  ngAfterViewInit() {
    // this.getUsername();
  }

  public loadPhotos(): void {
    this.imageService
      .getUserImageList(this.authService.authState.email)
      .subscribe(imagesData => {
        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this.authService.authState.email}/${image.images[0].photoName}`);

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

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  public onUpload(): void {
    if (this.images.find(image => image.images[0].photoName === this.selectedFile.name)) {
      this.existsAlert();
      return;
    } else {
      const storageRef = firebase.storage().ref();
      const uploadImagesRef = storageRef.child(`images/${this.user.email}/${this.selectedFile.name}`);
      uploadImagesRef.put(this.selectedFile).then(snapshot => {
        console.log('Uploaded a blob or file1 (snapshot): ', snapshot);
      });

      this.imageRef = this.imageService.getTmpImages(this.authService.authState.email);
      this.imageRef.get().subscribe(imageData => {

        this.thisImage.photoName = this.selectedFile.name;

        if (!imageData.exists) {
          this.tmpImages = [];
          this.tmpImages.push(this.thisImage);
          const tmpData: ImageList = {
            images: this.tmpImages
          };
          this.imageService.CreateImageList(tmpData, this.authService.authState.email);
        } else {
          this.tmpImages = imageData.data().images;
          this.tmpImages.push(this.thisImage);
          const tmpData: ImageList = {
            images: this.tmpImages
          };
          this.imageService.CreateImageList(tmpData, this.authService.authState.email);
        }
        this.loadPhotos();
      });
    }
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
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
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
