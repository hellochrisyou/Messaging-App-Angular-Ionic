import { MessagingService } from '../messaging.service';
import { Injectable } from '@angular/core';
import { Message, MessageList, Proposal } from '../../../shared/interface/models';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ORDER_MESSAGES } from '../../../pages/inbox/inbox.util';
import { ProposalService } from '../proposal.service';
import { AuthService } from '../auth.service';
@Injectable({ providedIn: 'root' })
export class ProposalsStateService {
    proposals: Proposal[] = [];

    constructor(
        private proposalService: ProposalService,
        private authService: AuthService
    ) {
        this.setProposal(this.authService.authState.email);
    }

    pendingProposals: Proposal[];

    historyProposals: Proposal[];
    public setProposal(thisEmail: string) {
        this.proposalService.getUserProposals(thisEmail).subscribe((proposalsData: any[]) => {
            this.proposals = proposalsData;
            console.log("ProposalsStateService -> setProposal -> proposalsData", proposalsData)
            this.pendingProposals = this.proposals.filter(proposal => proposal.status === 'pending').map((proposal: any) => proposal.proposals);
            console.log("ProposalsStateService -> setProposal -> this.pendingProposals", this.pendingProposals)
            this.historyProposals = this.proposals.filter(proposal => proposal.status !== 'pending').map((proposal: any) => proposal.proposals);
        });
    }
}
