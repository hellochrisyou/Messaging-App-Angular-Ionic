import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

import { AuthService } from '../../../core/service/auth.service';
import { ProposalService } from '../../../core/service/proposal.service';
import { PEND_PROPOSAL_COL_OBJ, PEND_PROPOSAL_DISPLAY } from '../../../shared/const/columns.const';
import { FILTER_PENDING_PROPOSALS, SET_PROPOSAL_DATA } from '../proposal.util';
import { Proposal } from '../../../shared/interface/models';

@Component({
  selector: 'proposal-pending',
  templateUrl: './proposal-pending.component.html',
  styleUrls: ['./proposal-pending.component.scss'],
})
export class ProposalPendingComponent implements OnInit {

  proposalRef: AngularFirestoreDocument<any>;
  thisProposals: Proposal[] = [];
  readonly PEND_PROPOSAL_COL_OBJ = PEND_PROPOSAL_COL_OBJ;
  readonly PEND_PROPOSAL_DISPLAY = PEND_PROPOSAL_DISPLAY;

  constructor(
    private proposalService: ProposalService,
    private authService: AuthService,
  ) { }

  ionViewDidEnter() {
    this.getProposals();
  }

  ngOnInit() {
    this.getProposals();

  }

  public getProposals() {
    this.proposalService.getProposals(this.authService.authState.email).subscribe(data => {
      // const tmpData = FILTER_PENDING_PROPOSALS(data, this.authService.authState.email);
      // this.thisProposals = SET_PROPOSAL_DATA(this.thisProposals, tmpData);
    });
  }
  public acceptProposal(index: number): void {

  }

  public rejectProposal(index: number): void {

  }
}
