// import { TestBed } from '@angular/core/testing';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { UserService } from '../user.service';
// import { EmitService } from '../emit.service';
// import { MessagingService } from '../messaging.service';
// import { User } from '../../../shared/interface/models';
// describe('UserService', () => {
//   let service: UserService;
//   beforeEach(() => {
//     const userStub = () => ({
//       email: {},
//       uid: {},
//       displayName: {},
//       photoURL: {},
//       title: {},
//       age: {},
//       religion: {},
//       haveKids: {},
//       hobbies: {},
//       description: {}
//     });
//     const angularFirestoreStub = () => ({
//       collection: string => ({
//         doc: () => ({ set: () => ({}) }),
//         valueChanges: () => ({})
//       }),
//       doc: arg => ({ set: () => ({}) })
//     });
//     const emitServiceStub = () => ({ refreshMessages: () => ({}) });
//     const messagingServiceStub = () => ({
//       getUserMessages: (email, otherEmail) => ({ subscribe: f => f({}) })
//     });
//     TestBed.configureTestingModule({
//       providers: [
//         UserService,
//         { provide: User, useFactory: userStub },
//         { provide: AngularFirestore, useFactory: angularFirestoreStub },
//         { provide: EmitService, useFactory: emitServiceStub },
//         { provide: MessagingService, useFactory: messagingServiceStub }
//       ]
//     });
//     service = TestBed.get(UserService);
//   });
//   it('can load instance', () => {
//     expect(service).toBeTruthy();
//   });
//   describe('createUser', () => {
//     it('makes expected calls', () => {
//       const userStub: User = TestBed.get(User);
//       const angularFirestoreStub: AngularFirestore = TestBed.get(
//         AngularFirestore
//       );
//       spyOn(angularFirestoreStub, 'collection').and.callThrough();
//       service.createUser(userStub);
//       expect(angularFirestoreStub.collection).toHaveBeenCalled();
//     });
//   });
//   describe('updateUser', () => {
//     it('makes expected calls', () => {
//       const userStub: User = TestBed.get(User);
//       const angularFirestoreStub: AngularFirestore = TestBed.get(
//         AngularFirestore
//       );
//       const emitServiceStub: EmitService = TestBed.get(EmitService);
//       spyOn(angularFirestoreStub, 'doc').and.callThrough();
//       spyOn(emitServiceStub, 'refreshMessages').and.callThrough();
//       service.updateUser(userStub);
//       expect(angularFirestoreStub.doc).toHaveBeenCalled();
//       expect(emitServiceStub.refreshMessages).toHaveBeenCalled();
//     });
//   });
//   describe('getUsers', () => {
//     it('makes expected calls', () => {
//       const angularFirestoreStub: AngularFirestore = TestBed.get(
//         AngularFirestore
//       );
//       spyOn(angularFirestoreStub, 'collection').and.callThrough();
//       service.getUsers();
//       expect(angularFirestoreStub.collection).toHaveBeenCalled();
//     });
//   });
// });
