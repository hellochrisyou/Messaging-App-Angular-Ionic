import { User } from 'firebase';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Proposal } from '../../shared/interface/models';
import { FILTER_PENDING_PROPOSALS } from './proposal.util';
import { UserStateService } from '../../core/service/state/user.state.service';
import { ProposalService } from '../../core/service/proposal.service';
import { AuthService } from '../../core/service/auth.service';
import { ProposalsStateService } from '../../core/service/state/proposals.state.service';

@Component({
  selector: 'proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProposalComponent implements OnInit {

  pendingProposals: Proposal[] = [];
  historyProposals: Proposal[] = [];
  tmpProposals: Proposal[] = [];

  constructor(
    public authService: AuthService,
    public userStateService: UserStateService,
    public proposalService: ProposalService,
    public proposalStateService: ProposalsStateService
  ) { }

  ngOnInit() {
    this.proposalStateService.setProposal(this.authService.authState.email);
  }


}
