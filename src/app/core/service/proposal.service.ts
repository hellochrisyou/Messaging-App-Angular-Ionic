import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Proposal } from '../../shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public getProposals(email: string) {
    return this.afs.collection('users').doc(email).valueChanges();
  }
  public getUserProposals(email: string, receiverEmail: string): any {
    return this.afs.collection('users').doc(email).collection('receiverEmail').valueChanges();
  }

  public sendProposal(proposal: Proposal, senderEmail: string, receiverEmail): void {
    this.afs.collection('users').doc(senderEmail).collection(`${receiverEmail}`).add({
      proposals: proposal,
    });
  }

  public updateProposal(dataArg: Proposal, email: string) {


  }
}
