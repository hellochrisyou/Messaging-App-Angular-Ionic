import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';

import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { UserData } from '../../providers/user-data';
import { User } from './../../shared/models';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements OnInit, AfterViewInit {

  photoURL: string;
  title: string;
  user: any = {};
  userRef: AngularFirestoreDocument<any>;
  username: string;

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
    public router: Router,
    public userData: UserData,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.initiateUpload();
    this.userService.getThisUser(this.authService.authState.email).get().subscribe(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.user = doc.data();
        console.log('this user:', this.user);

      }
    }, (err => {
      // console.log('Error fetching document: ', err);
    }));

  }

  ngAfterViewInit() {
    // this.getUsername();
    console.log('this.user', this.user);
  }

  public initiateUpload() {
    // Create a root reference

    const storageRef = firebase.storage().ref();

    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + this.file.name).put(this.file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function (error: any) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;


          case 'storage/unknown': ;
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, function () {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
        });
      });
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
            this.getPhotoURL();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'photoUrl',
          value: this.photoURL,
          placeholder: 'photoUrl'
        }
      ]
    });
    await alert.present();
  }

  public updateUserData(user) {
    // Sets user data to firestore on login


    const data: User = {
      uid: this.authState.uid,
      email: this.authState.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      title: this.authState.title
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
            console.log('handler', this.user);
            this.userService.updateUser(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
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
            console.log('handler', this.user);
            this.userService.updateUser(this.user);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'title',
          value: this.title,
          placeholder: 'title'
        }
      ]
    });
    await alert.present();
  }
  private getUsername() {
    this.username = this.authService.authState.displayName;
  }

  private getPhotoURL() {
    this.photoURL = this.authService.authState.photoURL;
  }

  // changePassword() {
  //   console.log('Clicked to change password');
  // }

  public logout() { }

  public support() {
    this.navCtrl.navigateForward('/support');
  }

  public upload(event: any) {
    this.afStorage.upload('/upload/', event.target.files[0]);

  }
}
