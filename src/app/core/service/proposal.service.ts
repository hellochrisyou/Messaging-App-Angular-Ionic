import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Proposal, User } from '../../shared/interface/models';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getProposals(email: string) {
    return this.afs.collection('proposals').snapshotChanges();
  }

  public sendProposal(dataArg: Proposal): void {
    console.log('sending message', dataArg);
    this.afs.collection('proposals').add(dataArg).then(res => { }, err => rejects(err));
  }

  public updateProposal(dataArg: Proposal, email: string) {


  }
}
