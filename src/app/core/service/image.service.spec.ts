// import { ImageList } from './../../shared/interface/models';
// import { TestBed } from '@angular/core/testing';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { ImageService } from './image.service';
// describe('ImageService', () => {
//   let service: ImageService;
//   beforeEach(() => {
//     const angularFirestoreStub = () => ({
//       collection: string => ({
//         doc: () => ({
//           collection: () => ({
//             snapshotChanges: () => ({}),
//             valueChanges: () => ({}),
//             add: () => ({}),
//             doc: () => ({ delete: () => ({}) })
//           })
//         })
//       })
//     });
//     const imageListStub = () => ({ images: {} });
//     TestBed.configureTestingModule({
//       providers: [
//         ImageService,
//         { provide: AngularFirestore, useFactory: angularFirestoreStub },
//         { provide: ImageList, useFactory: imageListStub }
//       ]
//     });
//     service = TestBed.get(ImageService);
//   });
//   it('can load instance', () => {
//     expect(service).toBeTruthy();
//   });
// });
