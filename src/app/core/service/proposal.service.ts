import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Proposal } from '../../shared/interface/models';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getProposals(email: string) {
    return this.afs.collection('users').doc(email).get();
  }
  public getUserProposals(email: string): any {
    return this.afs.collection('users').doc(email).collection('proposals').valueChanges();
  }

  public getUserProposalsSnapshot(email: string): any {
    return this.afs.collection('users').doc(email).collection('proposals').snapshotChanges();
  }

  public sendProposal(proposal: Proposal, senderEmail: string): void {
    this.afs.collection('users').doc(senderEmail).collection('proposals').add({
      city: proposal.city,
      proposalDate: proposal.proposalDate,
      select: 'Select',
      sender: proposal.sender,
      state: proposal.state,
      status: proposal.status,
      street: proposal.street,
      zipcode: proposal.zipcode
    });
  }

  public updateProposal(statusArg: string, email: string, id: any) {
    this.afs.collection('users').doc(email).collection('proposals').doc(id).set({ status: statusArg }, { merge: true });
  }

  public acceptProposal(proposal: Proposal, email): void {
    this.afs.collection('users').doc(email).collection('proposals-accepted').add({
      city: proposal.city,
      proposalDate: proposal.proposalDate,
      select: 'Select',
      sender: proposal.sender,
      state: proposal.state,
      status: proposal.status,
      street: proposal.street,
      zipcode: proposal.zipcode
    });
  }

  public getUserAcceptedProposals(email: string): any {
    return this.afs.collection('users').doc(email).collection('proposals-accepted').valueChanges();
  }

}
