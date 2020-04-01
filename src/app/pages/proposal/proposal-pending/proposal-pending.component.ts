import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

import { AuthService } from '../../../core/service/auth.service';
import { ProposalService } from '../../../core/service/proposal.service';
import { PEND_PROPOSAL_COL_OBJ, PEND_PROPOSAL_DISPLAY } from '../../../shared/const/columns.const';
import { FILTER_PENDING_PROPOSALS, SET_PROPOSAL_DATA } from '../proposal.util';
import { Proposal } from '../../../shared/interface/models';
import { UserStateService } from '../../../core/service/state/user.state.service';
import { ProposalsStateService } from '../../../core/service/state/proposals.state.service';

@Component({
  selector: 'proposal-pending',
  templateUrl: './proposal-pending.component.html',
  styleUrls: ['./proposal-pending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProposalPendingComponent implements OnInit {

  proposalRef: AngularFirestoreDocument<any>;
  private _pendingProposals: Proposal[] = [];

  readonly PEND_PROPOSAL_COL_OBJ = PEND_PROPOSAL_COL_OBJ;
  readonly PEND_PROPOSAL_DISPLAY = PEND_PROPOSAL_DISPLAY;

  @Input()
  public get pendingProposals(): any[] {
    return this._pendingProposals;
  }
  public set pendingProposals(value: any[]) {
    console.log("ProposalPendingComponent -> setpendingProposals -> value", value);
    this._pendingProposals = value;
    this.cdr.markForCheck();
  }

  constructor(
    private proposalStateService: ProposalsStateService,
    private proposalService: ProposalService,
    private userStateService: UserStateService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.proposalService.getUserProposals(this.authService.authState.email).subscribe((proposalsData: Proposal[]) => {
      this.pendingProposals = proposalsData.map((proposal: any) => proposal.proposals).filter(proposal => proposal.status === 'pending');
    });
  }

  ionViewDidEnter() {

  }

  ngOnInit() {
  }


  public acceptProposal(index: number): void {

  }

  public rejectProposal(index: number): void {

  }
}
