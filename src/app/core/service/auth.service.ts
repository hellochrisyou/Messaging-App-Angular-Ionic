import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { User } from '../../shared/interface/models';
import { UserService } from './user.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authState: User = null;
  private _user: Observable<User>;

  private messageRef: any;

  public get user(): Observable<User> {
    return this._user;
  }

  public set user(value: Observable<User>) {
    this._user = value;
  }

  public get authState(): any {
    return this._authState;
  }

  public set authState(value: any) {
    this._authState = value;
  }

  get userData(): any {
    return [
      {
        uid: this.authState.uid,
        displayName: this.authState.displayName,
        email: this.authState.email,
        phoneNumber: this.authState.phoneNumber,
        photoURL: this.authState.photoURL,
        country: this.authState.country,
      }
    ];
  }

  constructor(
    public router: Router,
    private navCtrl: NavController,
    public ngZone: NgZone,
    public userService: UserService,
    public afAuth: AngularFireAuth,
    public alertController: AlertController,
    private afs: AngularFirestore,
    // public dialog: MatDialog,
    // private httpService: HttpService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.afAuth.authState.subscribe(authState => {
      this.authState = authState;
    });
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }


  /* Sign up */
  public signupEmail(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('res', res);
        this.messageRef = this.afs.doc(`users/${res.user.email}`);

        this.messageRef.get().subscribe(doc => {
          if (!doc.exists) {
            console.log('No such document!');
            res.user.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
            this.userService.createUser(res.user);
          } else {
            console.log('Document data:', doc.data());
            this.authState.email = doc.data().email;
            this.authState.displayName = doc.data().displayName;
            this.authState.photoURL = doc.data().photoURL;
            this.authState.title = doc.data().title;
            this.authState.uId = doc.data().uId;
            if (doc.data().photoUrl === undefined) {
              this.authState.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
            }
          }
        }, (err => {
          console.log('Error fetching document: ', err);

        }));
        this.confirmToast('You have registered an account');
        this.navCtrl.navigateForward('/app/tabs/account');
      })
      .catch(error => {
        this.signupErrorPopup(error);
      });
  }

  async signupErrorPopup(errorMsg: string) {
    const alert = await this.alertController.create({
      header: 'Sign Up Error',
      cssClass: 'globalAlert',
      message: errorMsg,
      buttons: ['OK']
    });

    await alert.present();
  }

  private OAuthProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.userService.updateUser(credential.user);
      });
  }
  // Firebase Google Sign-in
  public signinGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((credential) => {
      this.messageRef = this.afs.doc(`users/${credential.user.email}`);
      this.confirmToast('You have signed in with your Google account');
      this.navCtrl.navigateForward('/app/tabs/people');

      this.messageRef.get().subscribe(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          if (credential.user.photoURL === undefined) {
            credential.user.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
          }
          this.userService.createUser(credential.user);
        } else {
          console.log('Document data:', doc.data());
        }
      }, (err => {
        // console.log('Error fetching document: ', err);
      }));
    });
  }

  public signinFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((credential) => {
      this.messageRef = this.afs.doc(`users/${credential.user.email}`);
      this.confirmToast('You have signed in with your Facebook account');
      this.navCtrl.navigateForward('/app/tabs/people');

      this.messageRef.get().subscribe(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          if (credential.user.photoURL === undefined) {
            credential.user.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
          }
          this.userService.createUser(credential.user);
        } else {
          console.log('Document data:', doc.data());
          this.authState.email = doc.data().email;
          this.authState.displayName = doc.data().displayName;
          this.authState.photoURL = doc.data().photoURL;
          this.authState.title = doc.data().title;
          this.authState.uId = doc.data().uId;
          if (doc.data().photoUrl === undefined) {
            this.authState.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
          }
        }
      }, (err => {
        console.log('Error fetching document: ', err);
      }));
    }).catch(error => {
      console.log('Error signing in w/ facebook: ' + error);
      this.errorProviderAlert();
    })
  }

  public signinTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((credential) => {

      this.messageRef = this.afs.doc(`users/${credential.user.email}`);
      this.confirmToast('You have signed in with your Twitter account');
      this.navCtrl.navigateForward('/app/tabs/people');

      this.messageRef.get().subscribe(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          if (credential.user.photoURL === undefined) {
            credential.user.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
          }
          this.userService.createUser(credential.user);
        } else {
          console.log('Document data:', doc.data());
          this.authState.email = doc.data().email;
          this.authState.displayName = doc.data().displayName;
          this.authState.photoURL = doc.data().photoURL;
          this.authState.title = doc.data().title;
          this.authState.uId = doc.data().uId;
          if (doc.data().photoUrl === undefined) {
            this.authState.photoURL = 'https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png';
          }
        }
      }, (err => {
        // console.log('Error fetching document: ', err);
      }));
    });
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  /* Sign in */
  public signinEmail(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.confirmToast('You are signed in with your email account');
        this.navCtrl.navigateForward('/app/tabs/people');
      })
      .catch(err => {
        this.failToast(err);
      });
  }

  async errorProviderAlert() {
    const alert = await this.alertController.create({
      header: 'Email Duplicate',
      subHeader: 'You have the same email registered w/ a different provider',
      message: 'Please use a different provider to login.',
      buttons: [{
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
      ]
    });

    await alert.present();
  }

  public async confirmToast(messageArg: string) {
    const toast = await this.alertController.create({
      header: 'Success',
      message: messageArg,
      cssClass: 'center-alert',
      buttons: ['OK']
    });
    toast.present();
  }
  public async failToast(messageArg: string) {
    const toast = await this.alertController.create({
      header: 'Failed Login',
      message: messageArg,
      cssClass: 'center-alert',
      buttons: ['OK']
    });
    toast.present();
  }

}

// https://stackoverflow.com/questions/42073340/angular2-firebase-get-current-user
