// import { TestBed } from '@angular/core/testing';
// import { NgZone } from '@angular/core';
// import { Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { NavController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
// import { AuthService } from '../auth.service';
// import { UserService } from '../user.service';
// describe('AuthService', () => {
//   let service: AuthService;
//   beforeEach(() => {
//     const ngZoneStub = () => ({});
//     const routerStub = () => ({});
//     const angularFirestoreStub = () => ({
//       doc: arg => ({ valueChanges: () => ({}) })
//     });
//     const angularFireAuthStub = () => ({
//       authState: { pipe: () => ({}), subscribe: f => f({}) },
//       auth: {
//         createUserWithEmailAndPassword: () => ({
//           then: () => ({ catch: () => ({}) })
//         }),
//         signInWithPopup: () => ({ then: () => ({ catch: () => ({}) }) }),
//         signOut: () => ({ then: () => ({}) }),
//         signInWithEmailAndPassword: () => ({
//           then: () => ({ catch: () => ({}) })
//         })
//       }
//     });
//     const navControllerStub = () => ({ navigateForward: string => ({}) });
//     const alertControllerStub = () => ({
//       create: object => ({ present: () => ({}) })
//     });
//     const userServiceStub = () => ({
//       updateUser: user => ({}),
//       createUser: user => ({})
//     });
//     TestBed.configureTestingModule({
//       providers: [
//         AuthService,
//         { provide: NgZone, useFactory: ngZoneStub },
//         { provide: Router, useFactory: routerStub },
//         { provide: AngularFirestore, useFactory: angularFirestoreStub },
//         { provide: AngularFireAuth, useFactory: angularFireAuthStub },
//         { provide: NavController, useFactory: navControllerStub },
//         { provide: AlertController, useFactory: alertControllerStub },
//         { provide: UserService, useFactory: userServiceStub }
//       ]
//     });
//     service = TestBed.get(AuthService);
//   });
//   it('can load instance', () => {
//     expect(service).toBeTruthy();
//   });
//   describe('signinGoogle', () => {
//     it('makes expected calls', () => {
//       const angularFirestoreStub: AngularFirestore = TestBed.get(
//         AngularFirestore
//       );
//       const navControllerStub: NavController = TestBed.get(NavController);
//       const userServiceStub: UserService = TestBed.get(UserService);
//       spyOn(component, 'presentToast').and.callThrough();
//       spyOn(angularFirestoreStub, 'doc').and.callThrough();
//       spyOn(navControllerStub, 'navigateForward').and.callThrough();
//       spyOn(userServiceStub, 'createUser').and.callThrough();
//       service.signinGoogle();
//       expect(service.presentToast).toHaveBeenCalled();
//       expect(angularFirestoreStub.doc).toHaveBeenCalled();
//       expect(navControllerStub.navigateForward).toHaveBeenCalled();
//       expect(userServiceStub.createUser).toHaveBeenCalled();
//     });
//   });
//   describe('signinFacebook', () => {
//     it('makes expected calls', () => {
//       const angularFirestoreStub: AngularFirestore = TestBed.get(
//         AngularFirestore
//       );
//       const navControllerStub: NavController = TestBed.get(NavController);
//       const userServiceStub: UserService = TestBed.get(UserService);
//       spyOn(component, 'presentToast').and.callThrough();
//       spyOn(component, 'errorProviderAlert').and.callThrough();
//       spyOn(angularFirestoreStub, 'doc').and.callThrough();
//       spyOn(navControllerStub, 'navigateForward').and.callThrough();
//       spyOn(userServiceStub, 'createUser').and.callThrough();
//       service.signinFacebook();
//       expect(service.presentToast).toHaveBeenCalled();
//       expect(service.errorProviderAlert).toHaveBeenCalled();
//       expect(angularFirestoreStub.doc).toHaveBeenCalled();
//       expect(navControllerStub.navigateForward).toHaveBeenCalled();
//       expect(userServiceStub.createUser).toHaveBeenCalled();
//     });
//   });
//   describe('signinTwitter', () => {
//     it('makes expected calls', () => {
//       const angularFirestoreStub: AngularFirestore = TestBed.get(
//         AngularFirestore
//       );
//       const navControllerStub: NavController = TestBed.get(NavController);
//       const userServiceStub: UserService = TestBed.get(UserService);
//       spyOn(component, 'presentToast').and.callThrough();
//       spyOn(angularFirestoreStub, 'doc').and.callThrough();
//       spyOn(navControllerStub, 'navigateForward').and.callThrough();
//       spyOn(userServiceStub, 'createUser').and.callThrough();
//       service.signinTwitter();
//       expect(service.presentToast).toHaveBeenCalled();
//       expect(angularFirestoreStub.doc).toHaveBeenCalled();
//       expect(navControllerStub.navigateForward).toHaveBeenCalled();
//       expect(userServiceStub.createUser).toHaveBeenCalled();
//     });
//   });
//   describe('signOut', () => {
//     it('makes expected calls', () => {
//       const navControllerStub: NavController = TestBed.get(NavController);
//       spyOn(component, 'presentToast').and.callThrough();
//       spyOn(navControllerStub, 'navigateForward').and.callThrough();
//       service.signOut();
//       expect(service.presentToast).toHaveBeenCalled();
//       expect(navControllerStub.navigateForward).toHaveBeenCalled();
//     });
//   });
//   describe('errorProviderAlert', () => {
//     it('makes expected calls', () => {
//       const alertControllerStub: AlertController = TestBed.get(AlertController);
//       spyOn(alertControllerStub, 'create').and.callThrough();
//       service.errorProviderAlert();
//       expect(alertControllerStub.create).toHaveBeenCalled();
//     });
//   });
// });
