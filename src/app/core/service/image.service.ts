import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Proposal, Image } from '../../shared/interface/models';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private afs: AngularFirestore
  ) { }



  public getImages(userEmail: string) {
    return this.afs.collection('users').doc(userEmail).collection('images').valueChanges();
  }

  public getTmpImages(userEmail: string) {
    return this.afs.collection('users').doc(userEmail);
  }
  public getUserImageList(userEmail: string): any {
    return this.afs.collection('users').doc(userEmail).collection('images').valueChanges();
  }

  public addImageList(img: Image, userEmail: string): void {
    this.afs.collection('users').doc(userEmail).collection('images').add({
      image: img,
    });
  }

  public deleteImage(docId: string, userEmail: string): void {
    this.afs.collection('users').doc(userEmail).collection('images').doc(docId).delete();
  }
}
