import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AuthService } from '../../core/service/auth.service';
import { ImageService } from '../../core/service/image.service';
import { UserService } from '../../core/service/user.service';
import { Image, User } from '../../shared/interface/models';
import { PicModalPage } from './../../shared/component/profile/pic-modal/pic-modal.component';

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
    private changeDetectorRefs: ChangeDetectorRef,
    public alertCtrl: AlertController,
    public authService: AuthService,
    private afStorage: AngularFireStorage,
    public imageService: ImageService,
    public alertController: AlertController,
    public router: Router,
    public userService: UserService,
    public modalController: ModalController,
  ) {
    $('#file-upload').change(function () {
      const i = $(this).prev('label').clone();
      const file = $('#file-upload')[0].files[0].name;
      $(this).prev('label').text(file);
    });
  }

  ages: number[] = [];
  religions: string[] = ['Atheism', 'Buddhism', 'Christianity', 'Catholicism', 'Hinduism', 'Islam', 'Judaism', 'Other'];
  kidsOptions: string[] = ['Yes', 'No', 'Maybe', 'No opinion'];
  compareWith: any;
  user: any = {};
  userRef: AngularFirestoreDocument<any>;
  username: string;
  public selectedFile: File;
  selectedFileName = 'Select File';
  thisImage: Image = {};
  messageRef: AngularFirestoreDocument<any>;
  imageRef: AngularFirestoreDocument<any>;
  tmpImages: any;
  deletedPhoto: string;
  images: any[] = [];
  imageUrls: string[] = [];
  file: any = {};
  selectedAge: number;
  selectedReligion: string;
  selectedKids: string;
  imageNameRef: any;

  private _authState: any = null;


  ageActionSheetOptions: any = {
    header: 'Select your age'
  };
  religionActionSheetOptions: any = {
    header: 'Select your religion'
  };
  kidsActionSheetOptions: any = {
    header: 'Select your religion'
  };

  imagesTrackFn = (i, image) => image.photoName;

  ngOnInit(): void {

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
    }, (err => {
      // console.log('Error fetching document: ', err);
    }));
    this.loadPhotos();
  }

  ngAfterViewInit() {
    // this.getUsername();
  }

  public onFileChanged($event): void {
    this.selectedFileName = $event.target.value.split('C:\\fakepath\\').pop();
    this.changeDetectorRefs.detectChanges();
    this.onUpload();
  }

  public onUpload(): void {
    this.selectedFile = $('#file-upload')[0].files[0];
    if (this.images.find(image => image.photoName === this.selectedFile.name)) {
      this.existsAlert();
      return;
    } else {
      this.tmpImages = [];
      const storageRef = firebase.storage().ref();
      console.log('AccountPage -> onUpload -> this.selectedFile.name', this.selectedFile.name);
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
            }).catch(function (error) {
              console.log('AccountPage -> loadPhotos -> error', error);
              // Handle any errors
            });
            const tmpImg: Image = {
              photoName: this.selectedFile.name
            };
            this.imageService.addImageList(tmpImg, this.authService.authState.email);
            this.selectedFileName = 'Select File';
            this.router.navigateByUrl('/account');
          }
        });
      });
    }
  }

  public loadPhotos(): void {
    this.images = [];
    this.imageUrls = [];
    this.imageService
      .getUserImageList(this.authService.authState.email)
      .subscribe(imagesData => {

        this.images = imagesData;
        for (const image of this.images) {
          const storage = firebase.storage();
          const pathReference = storage.ref(`images/${this.authService.authState.email}/${image.image.photoName}`);
          pathReference.getDownloadURL().then(url => {
            if (this.imageUrls.find(image => image === url)) { } else {
              this.imageUrls.push(url);
            }
          }).catch(error => {
            console.log('AccountPage -> loadPhotos -> error', error);
            // Handle any errors
          });
        }
      });
  }

  public deleteImage(index: number): void {
    this.deletedPhoto = this.images[index].image.photoName;
    this.imageNameRef = this.imageService.getImages(this.authService.authState.email).subscribe(payload => {
      if (payload[index].payload.doc.data().image.photoName === this.deletedPhoto) {
        this.imageService.deleteImage(payload[index].payload.doc.id, this.authService.authState.email);
        const storageRef = firebase.storage().ref();
        const deleteRef = storageRef.child(`images/${this.user.email}/${this.images[index].image.photoName}`);
        // Delete the file
        this.loadPhotos();
        deleteRef.delete().then(function () {
          // File deleted successfully
          // this.images.splice(index, 1);
        }).catch(error => {
          console.log('deleteImage -> error', error);
        });
      }
    });
  }

  public deleteAllPhotos() {
    this.imageUrls.forEach(image => {
      this.imageService.deleteImage(image, this.authService.authState.email);
      const storageRef = firebase.storage().ref();

      const deleteRef = storageRef.child(`images/${this.user.email}/${image}`);
      // Delete the file
      deleteRef.delete().then(function () {
        // File deleted successfully
        // this.images.splice(index, 1);
      }).catch(error => {
        console.log('deleteImage -> error', error);
      });
    });
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
      cssClass: 'center-alert',
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
          placeholder: this.user.photoURL
        }
      ]
    });
    await alert.present();
  }

  async updateUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      cssClass: 'center-alert',
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
          placeholder: this.user.displayName
        }
      ]
    });
    await alert.present();
  }
  async updateTitle() {
    const alert = await this.alertCtrl.create({
      header: 'Change Title',
      cssClass: 'center-alert',
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
          placeholder: this.user.title
        }
      ]
    });
    await alert.present();
  }

  public updateAge(): void {
    this.user.age = this.selectedAge;
    this.updateUserData(this.user);
  }
  public updateReligion(): void {
    this.user.religion = this.selectedReligion;
    this.updateUserData(this.user);
  } public updateHaveKids(): void {
    this.user.haveKids = this.selectedKids;
    this.updateUserData(this.user);
  }
  async updateHobbies() {
    const alert = await this.alertCtrl.create({
      header: 'Change Hobbies',
      cssClass: 'center-alert',
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
          placeholder: this.user.hobbies
        }
      ]
    });
    await alert.present();
  }
  async updateDescription() {
    const alert = await this.alertCtrl.create({
      header: 'Update Description',
      cssClass: 'center-alert',
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
          placeholder: this.user.description
        }
      ]
    });
    await alert.present();
  }

  // updatePassword() {
  //   console.log('Clicked to update password');
  // }

  async existsAlert() {
    const alert = await this.alertController.create({
      header: 'Image Upload Error',
      cssClass: 'center-alert',
      message: 'Image already exists'
    });

    await alert.present();
  }
}
