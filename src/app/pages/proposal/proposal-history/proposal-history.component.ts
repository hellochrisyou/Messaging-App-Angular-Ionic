import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

import { AuthService } from '../../../core/service/auth.service';
import { ProposalService } from '../../../core/service/proposal.service';
import { HISTORY_PROPOSAL_COL_OBJ, HISTORY_PROPOSAL_DISPLAY } from '../../../shared/const/columns.const';
import { FILTER_HISTORY_PROPOSALS, SET_PROPOSAL_DATA } from '../proposal.util';
import { Proposal } from '../../../shared/interface/models';

@Component({
  selector: 'proposal-history',
  templateUrl: './proposal-history.component.html',
  styleUrls: ['./proposal-history.component.scss'],
})
export class ProposalHistoryComponent implements OnInit {

  proposalRef: AngularFirestoreDocument<any>;
  thisProposals: Proposal[] = [];
  readonly HISTORY_PROPOSAL_COL_OBJ = HISTORY_PROPOSAL_COL_OBJ;
  readonly HISTORY_PROPOSAL_DISPLAY = HISTORY_PROPOSAL_DISPLAY;

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
      const tmpData = FILTER_HISTORY_PROPOSALS(data, this.authService.authState.email);
      this.thisProposals = SET_PROPOSAL_DATA(this.thisProposals, tmpData);
    });
  }
}

