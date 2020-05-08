import { Injectable } from '@angular/core';
import { Proposal } from '../../../shared/interface/models';
import { AuthService } from '../auth.service';
import { ProposalService } from '../proposal.service';

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
            this.pendingProposals = this.proposals.filter(proposal => proposal.status === null).map((proposal: any) => proposal.proposals);
            this.historyProposals = this.proposals.filter(proposal => proposal.status === true).map((proposal: any) => proposal.proposals);
        });
    }
}
