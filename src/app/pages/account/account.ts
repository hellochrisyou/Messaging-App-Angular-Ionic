import { User } from './../../shared/models';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { AlertController, NavController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';


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
    public router: Router,
    public userData: UserData,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    console.log('email', this.authService.authState.email);
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

  public logout() {
    this.userData.logout();
    this.navCtrl.navigateForward('/login');
  }

  public support() {
    this.navCtrl.navigateForward('/support');
  }
}
