import { Proposal } from '../../shared/interface/models';

export const FILTER_PENDING_PROPOSALS = (proposals: any[], recipientEmail: string): any[] => {
    let returnProposals = [];
    returnProposals = proposals.filter(proposal => proposal.payload.doc.data().status === 'pending');
    returnProposals = returnProposals.filter(proposal => proposal.payload.doc.data().receiver === recipientEmail);
    return returnProposals;
};

export const FILTER_HISTORY_PROPOSALS = (proposals: any[], recipientEmail: string): any[] => {
    let returnProposals = [];
    returnProposals = proposals.filter(proposal =>
        proposal.payload.doc.data().status === 'done' && proposal.payload.doc.data().receiver === recipientEmail
    );

    console.log("returnProposals2", returnProposals)
    return returnProposals;
};

export const SET_PROPOSAL_DATA = (proposals: Proposal[], proposalsData: any[]): Proposal[] => {

    proposalsData.forEach(proposalData => {
        let tmpProposal = {
            select: '',
            reject: '',
            street: '',
            city: '',
            state: '',
            zipcode: 1,
            proposalDate: null,
            status: false,
            sender: '',
            recipient: ''
        };
        tmpProposal.select = proposalData.payload.doc.data().select;
        tmpProposal.reject = proposalData.payload.doc.data().reject;
        tmpProposal.street = proposalData.payload.doc.data().street;
        tmpProposal.city = proposalData.payload.doc.data().city;
        tmpProposal.state = proposalData.payload.doc.data().state;
        tmpProposal.zipcode = proposalData.payload.doc.data().zipcode;
        tmpProposal.proposalDate = proposalData.payload.doc.data().proposalDate;
        tmpProposal.status = proposalData.payload.doc.data().status;
        tmpProposal.sender = proposalData.payload.doc.data().sender;
        tmpProposal.recipient = proposalData.payload.doc.data().recipient;

        proposals.push(tmpProposal);
    });
    return proposals;

};