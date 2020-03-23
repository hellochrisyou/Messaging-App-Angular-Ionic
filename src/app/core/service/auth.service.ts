import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
import { User } from '../../shared/models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _authState: any = null;
  // tslint:disable-next-line: variable-name
  private _user: Observable<User>;

  private messageRef: any;

  private newUser: User;
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

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public userService: UserService,
    public afAuth: AngularFireAuth,
    // private snackBar: MatSnackBar,
    public toastController: ToastController,
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

  public async presentToast(messageArg: string) {
    const toast = await this.toastController.create({
      message: messageArg,
      duration: 2000
    });
    toast.present();
  }
  /* Sign up */
  public signupEmail(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.presentToast('You have registered an account');
        // this.snackBar.open('Registration', 'SUCCESS', {
        // });
        this.router.navigateByUrl('/app/tabs/inbox');
      })
      .catch(error => {
        // this.signupErrorPopup(error.message);
      });
  }

  private OAuthProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.userService.updateUser(credential.user);
      });
  }
  // Firebase Google Sign-in
  public signinGoogle() {
    console.log('hello');
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((credential) => {
      this.messageRef = this.afs.doc(`users/${credential.user.email}`);
      this.router.navigateByUrl('/app/tabs/inbox');

      this.messageRef.get().subscribe(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          this.userService.createUser(credential.user);
        } else {
          console.log('Document data:', doc.data());
          // this.userService.updateUser(credential.user);
        }
      }, (err => {
        // console.log('Error fetching document: ', err);
      }));
    });

    // return this.OAuthProvider(new this.authState.GoogleAuthProvider())
    // .then(res => { }).catch(error => { });
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      // window.location.reload();
    });
  }

  /* Sign in */
  public signinEmail(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.presentToast('You are signed in');
        // this.checkUserExists(credential.user.email, credential.user.displayName, "https://material.angular.io/assets/img/examples/shiba2.jpg");
        this.router.navigateByUrl('/app/tabs/inbox');
        window.location.reload();
      })
      .catch(err => { });
  }

  // public signupErrorPopup(message: string): void {
  //   const dialogRef = this.dialog.open(ConfirmComponent, {
  //     width: '25vw',
  //     data: {
  //       title: 'Error',
  //       subTitle: 'Signup Failed',
  //       text: message
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe();
  // }




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


  public checkUserExists(argEmail: string, argDisplayName: string, argPhotoUrl: string): void {
    console.log('begin, check user exists');

    // this.httpService.post(APIURL.BACKENDCALL + '/user/existsByEmail/', argEmail).subscribe((data) => {
    //   console.log('existsbyemail1', data);
    //   // if (data !== true) {
    //   this.newUser = {
    //     uId: '',
    //     displayName: argDisplayName,
    //     email: argEmail,
    //     photoURL: argPhotoUrl
    //   };
    //   console.log('existsby email', data);
    //   this.httpService.post(APIURL.BACKENDCALL + '/user/createUser/', this.newUser).subscribe(x => {
    //     console.log('create data returned: ', x);
    //   });
    //   // }
    // });
  }
}

// https://stackoverflow.com/questions/42073340/angular2-firebase-get-current-user