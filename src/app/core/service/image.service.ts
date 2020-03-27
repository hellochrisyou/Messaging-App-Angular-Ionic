import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Proposal, ImageList } from '../../shared/interface/models';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private afs: AngularFirestore
  ) { }



  public getImages(userEmail: string) {
    return this.afs.collection('images').doc(userEmail).collection(`image-list-${userEmail}`).snapshotChanges();
  }

  public getTmpImages(userEmail: string) {
    return this.afs.collection('images').doc(userEmail);
  }
  public getUserImageList(userEmail: string): any {
    console.log('getusermessages', userEmail);
    return this.afs.collection('images').doc(userEmail).collection(`image-list-${userEmail}`).valueChanges();

  }

  public CreateImageList(dataArg: ImageList, userEmail: string): void {
    console.log('setting images', dataArg);
    this.afs.collection('images').doc(userEmail).collection(`image-list-${userEmail}`).add({
      images: dataArg.images,
    });
  }

  public deleteImage(docId: string, userEmail: string): void {
    this.afs.collection('images').doc(userEmail).collection(`image-list-${userEmail}`).doc(docId).delete();
  }
}
